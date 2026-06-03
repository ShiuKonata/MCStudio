# 26位VTuber自動分類更新腳本（PowerShell版本）

# ═══════════════════════════════════════════════════════════════════
# 讀取 data.js
# ═══════════════════════════════════════════════════════════════════

$dataPath = ".\js\data.js"
try {
  $dataContent = [IO.File]::ReadAllText($dataPath, [Text.UTF8Encoding]::new($true))
} catch {
  Write-Host "❌ 無法讀取 data.js"
  exit 1
}

# 提取 API Key
if ($dataContent -match 'ytApiKey:\s*["`]([^"`]+)["`]') {
  $API_KEY = $matches[1]
} else {
  Write-Host "❌ 無 API 金鑰"
  exit 1
}

# ═══════════════════════════════════════════════════════════════════
# 提取所有 VTuber 數據（除詩雨蔻達外）
# ═══════════════════════════════════════════════════════════════════

$vtubers = @{}

[regex]::Matches($dataContent, 'id:\s*["`]([^"`]+)["`][^}]*?youtubeChannelId:\s*["`]([^"`]+)["`]') | ForEach-Object {
  $id = $_.Groups[1].Value
  $channelId = $_.Groups[2].Value
  $vtubers[$id] = @{ channelId = $channelId }
}

# 排除詩雨蔻達
$vtuberIds = @($vtubers.Keys | Where-Object { $_ -ne 'shiucoda' } | Sort-Object)

Write-Host "🎵 開始自動分類 26 位 VTuber" -ForegroundColor Cyan
Write-Host "📊 共 $($vtuberIds.Count) 位成員`n" -ForegroundColor Cyan

# ═══════════════════════════════════════════════════════════════════
# 分類邏輯
# ═══════════════════════════════════════════════════════════════════

function Classify-Video {
  param([string]$Title)

  $titleLower = $Title.ToLower()

  # Cover
  if ($titleLower -like '*cover*' -or $titleLower -like '*歌ってみた*') {
    return 'covers'
  }

  # Original
  if ($titleLower -like '*original*' -or $titleLower -like '*official*' -or $titleLower -like '*原創*') {
    return 'originals'
  }

  return 'unclassified'
}

# ═══════════════════════════════════════════════════════════════════
# API 調用
# ═══════════════════════════════════════════════════════════════════

function Fetch-PlaylistItems {
  param([string]$PlaylistId, [string]$PageToken = $null)

  $url = "https://www.googleapis.com/youtube/v3/playlistItems" +
    "?part=snippet" +
    "&playlistId=$PlaylistId" +
    "&maxResults=50" +
    "&key=$API_KEY"

  if ($PageToken) {
    $url += "&pageToken=$PageToken"
  }

  try {
    $response = Invoke-WebRequest -Uri $url -UserAgent "Mozilla/5.0" -ErrorAction Stop
    return $response.Content | ConvertFrom-Json
  } catch {
    Write-Host "  ⚠️ API 請求失敗：$_" -ForegroundColor Yellow
    return @{ items = @() }
  }
}

# ═══════════════════════════════════════════════════════════════════
# 提取現有影片 ID
# ═══════════════════════════════════════════════════════════════════

function Get-ExistingVideoIds {
  param([string]$VId)

  $existingIds = @{}

  # 新結構：{ covers: [], originals: [], unclassified: [] }
  $newPattern = "id:\s*[`"`]$VId[`"`][^}]*?videos:\s*\{([^}]+)\}"
  if ($dataContent -match $newPattern) {
    [regex]::Matches($matches[1], 'id["`]?\s*:\s*["`]([^"`]+)["`]') | ForEach-Object {
      $existingIds[$_.Groups[1].Value] = $true
    }
  }

  # 舊結構：[]
  $oldPattern = "id:\s*[`"`]$VId[`"`][^]]*?videos:\s*\[([^\]]*)\]"
  if (!$existingIds.Count -and $dataContent -match $oldPattern) {
    [regex]::Matches($matches[1], 'id["`]?\s*:\s*["`]([^"`]+)["`]') | ForEach-Object {
      $existingIds[$_.Groups[1].Value] = $true
    }
  }

  return $existingIds
}

# ═══════════════════════════════════════════════════════════════════
# 主邏輯
# ═══════════════════════════════════════════════════════════════════

$results = @{}
$totalAdded = 0

foreach ($vId in $vtuberIds) {
  $channelId = $vtubers[$vId].channelId
  $uploadsPlaylistId = "UU$($channelId.Substring(2))"

  Write-Host "`n🔵 [$vId] 正在處理..." -ForegroundColor Cyan

  # 獲取所有影片
  $allItems = @()
  $pageToken = $null
  $pageCount = 0

  do {
    $data = Fetch-PlaylistItems -PlaylistId $uploadsPlaylistId -PageToken $pageToken

    if ($data.items) {
      $allItems += $data.items
      $pageCount++
      Write-Host "   第 $pageCount 頁，獲取 $($data.items.Count) 部"
    }

    $pageToken = $data.nextPageToken
  } while ($pageToken)

  Write-Host "   共獲取 $($allItems.Count) 部影片"

  # 提取現有影片 ID
  $existingIds = Get-ExistingVideoIds -VId $vId

  # 分類新影片
  $covers = @()
  $originals = @()
  $unclassified = @()

  foreach ($item in $allItems) {
    $vid = $item.snippet.resourceId.videoId
    if (!$vid -or $existingIds[$vid]) { continue }

    $title = $item.snippet.title
    $date = $item.snippet.publishedAt.Substring(0, 10)
    $category = Classify-Video -Title $title

    $videoObj = @{
      id = $vid
      title = $title
      date = $date
    }

    switch ($category) {
      'covers' { $covers += $videoObj }
      'originals' { $originals += $videoObj }
      'unclassified' { $unclassified += $videoObj }
    }
  }

  $newCount = $covers.Count + $originals.Count + $unclassified.Count
  Write-Host "   ✅ 分類完成：$($covers.Count) Cover + $($originals.Count) Original + $($unclassified.Count) 未分類" -ForegroundColor Green

  if ($newCount -gt 0) {
    $results[$vId] = @{
      covers = $covers
      originals = $originals
      unclassified = $unclassified
    }
    $totalAdded += $newCount
  }

  Start-Sleep -Milliseconds 300
}

# ═══════════════════════════════════════════════════════════════════
# 更新 data.js（簡化版本 - 由於正則表達式複雜，仅輸出結果）
# ═══════════════════════════════════════════════════════════════════

if ($totalAdded -gt 0) {
  Write-Host "`n`n📝 更新 data.js..." -ForegroundColor Cyan
  Write-Host "⚠️ 注意：由於JSON合併的複雜性，請手動將以下結果合併到 data.js`n" -ForegroundColor Yellow

  # 輸出結果為JSON
  Write-Host "┌─ 自動分類結果（JSON格式）─" -ForegroundColor Cyan
  $results | ConvertTo-Json -Depth 3 | Write-Host
  Write-Host "└─────────────────────────────" -ForegroundColor Cyan

  Write-Host "`n📊 ════════════════════════════════════════" -ForegroundColor Cyan
  Write-Host "📊 自動分類結果摘要" -ForegroundColor Cyan
  Write-Host "📊 ════════════════════════════════════════" -ForegroundColor Cyan
  Write-Host "共發現 $($results.Count) 位 VTuber 有新影片"
  Write-Host "共發現 $totalAdded 部新影片`n" -ForegroundColor Green

  foreach ($vId in $results.Keys | Sort-Object) {
    $c = $results[$vId]
    $total = $c.covers.Count + $c.originals.Count + $c.unclassified.Count
    Write-Host "  $vId : +$total (Cover: $($c.covers.Count), Original: $($c.originals.Count), 未分類: $($c.unclassified.Count))" -ForegroundColor Green
  }

  Write-Host "📊 ════════════════════════════════════════`n" -ForegroundColor Cyan
} else {
  Write-Host "`n✅ 所有 VTuber 都已是最新狀態，無需更新" -ForegroundColor Green
}
