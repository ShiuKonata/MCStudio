#Requires -Version 5.0
<#
.SYNOPSIS
  🎵 26位VTuber自動分類更新系統
  每6小時自動偵測新影片、分類、更新data.js、推送GitHub

.DESCRIPTION
  完全自動化的VTuber影片管理系統，包含：
  - YouTube API調用
  - 自動分類邏輯
  - data.js更新
  - Git推送
  - 完善的錯誤處理和備份

.NOTES
  執行權限: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  排程: Windows Task Scheduler (每6小時)
#>

# ===== 配置 =====
$ProjectPath = "C:\Claude Ai\網站\MCStudio"
$DataJsPath = "$ProjectPath\js\data.js"
$LogPath = "$ProjectPath\auto_update.log"
$BackupPath = "$ProjectPath\backups"
$GitHubRepo = "https://github.com/ShiuKonata/MCStudio.git"

# YouTube API金鑰（從data.js中提取）
$ApiKey = "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM"

# 26位VTuber ID
$VtuberIds = @(
    'rumi', 'paroniie', 'lubee', 'himegimichika', 'arrynia', 'kiriko',
    'vaswawa', 'sinniearis', 'ririna', 'ekorru', 'wakasaito', 'whalefall',
    'kai', 'mukuru', 'nyrfier', 'fuka22', 'chita', 'chamamatti',
    'shiroleon', 'BarkBarkPomi', 'cocor0', 'UchiFifi', 'nokori', 'KeKeMii',
    'Pele', 'Yawnii'
)

# ===== 日誌函數 =====
function Write-Log {
    param(
        [string]$Message,
        [string]$Level = "INFO"
    )
    $timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    $logLine = "[$timestamp] [$Level] $Message"
    Write-Host $logLine
    Add-Content -Path $LogPath -Value $logLine -Encoding UTF8
}

function New-Backup {
    if (!(Test-Path $BackupPath)) { New-Item -ItemType Directory -Path $BackupPath | Out-Null }
    $backupFile = "$BackupPath\data.js.backup.$(Get-Date -Format 'yyyyMMdd_HHmmss')"
    Copy-Item -Path $DataJsPath -Destination $backupFile -Force
    Write-Log "備份已建立: $backupFile"
    return $backupFile
}

# ===== YouTube API 函數 =====
function Get-YoutubeVideos {
    param(
        [string]$ChannelId,
        [string]$VtuberId
    )

    try {
        # 構建上傳播放清單ID
        $uploadsPlaylistId = "UU" + $ChannelId.Substring(2)

        $videos = @()
        $pageToken = $null

        do {
            $params = @{
                part       = "snippet"
                playlistId = $uploadsPlaylistId
                maxResults = 50
                key        = $ApiKey
            }
            if ($pageToken) { $params['pageToken'] = $pageToken }

            $url = "https://www.googleapis.com/youtube/v3/playlistItems?$($params.GetEnumerator() | ForEach-Object { "$($_.Key)=$($_.Value)" } | Join-String -Separator '&')"

            $response = Invoke-WebRequest -Uri $url -UseBasicParsing | ConvertFrom-Json

            foreach ($item in $response.items) {
                $vid = $item.snippet.resourceId.videoId
                $title = $item.snippet.title
                $date = $item.snippet.publishedAt.Substring(0, 10)

                # 自動分類邏輯
                $titleLower = $title.ToLower()
                if ($titleLower.Contains('cover') -or $titleLower.Contains('歌ってみた')) {
                    $classifiedTitle = "【Cover】$title"
                    $type = 'cover'
                } elseif ($titleLower.Contains('original') -or $titleLower.Contains('official') -or $titleLower.Contains('原創')) {
                    $classifiedTitle = "【Original】$title"
                    $type = 'original'
                } else {
                    continue # 跳過未分類的
                }

                $videos += @{
                    id    = $vid
                    title = $classifiedTitle
                    date  = $date
                    type  = $type
                }
            }

            $pageToken = $response.nextPageToken
        } while ($pageToken)

        Write-Log "$VtuberId: 抓取了 $($videos.Count) 部新影片"
        return $videos
    }
    catch {
        Write-Log "$VtuberId: API錯誤 - $($_.Exception.Message)" "ERROR"
        return @()
    }
}

# ===== 更新 data.js =====
function Update-DataJs {
    param(
        [hashtable]$NewVideos
    )

    try {
        if ($NewVideos.Count -eq 0) {
            Write-Log "沒有新影片需要更新"
            return $false
        }

        $backupFile = New-Backup
        $dataContent = Get-Content -Path $DataJsPath -Raw -Encoding UTF8
        $originalContent = $dataContent
        $updateCount = 0

        foreach ($vtuberId in $NewVideos.Keys) {
            if ($NewVideos[$vtuberId].Count -eq 0) { continue }

            # 構建新的videos JSON（使用PowerShell的JSON序列化）
            $videosArray = @()
            foreach ($video in $NewVideos[$vtuberId]) {
                $videosArray += @{
                    id    = $video.id
                    title = $video.title
                    date  = $video.date
                }
            }

            $videosJson = ConvertTo-Json -InputObject $videosArray -Depth 2 -Compress
            # 移除ConvertTo-Json添加的額外空格
            $videosJson = $videosJson -replace '\r?\n', ''

            # 精確替換pattern：id: "XXX" ... videos: []
            # 使用(?smi)讓.匹配換行符
            $pattern = "(?smi)(id:\s*`"$([regex]::Escape($vtuberId))`"[^}]*?videos:\s*)\[\]"
            $replacement = "`${1}$videosJson"

            # 驗證替換
            if ($dataContent -match $pattern) {
                $newContent = $dataContent -replace $pattern, $replacement

                # 驗證替換後的數據是否仍然有效
                if ($newContent -match "id:\s*`"$vtuberId`"") {
                    $dataContent = $newContent
                    $updateCount += $NewVideos[$vtuberId].Count
                    Write-Log "$vtuberId: 已更新 $($NewVideos[$vtuberId].Count) 部影片"
                }
                else {
                    Write-Log "$vtuberId: 驗證失敗，跳過此VTuber" "WARNING"
                }
            }
            else {
                Write-Log "$vtuberId: 未找到videos欄位，跳過" "WARNING"
            }
        }

        if ($updateCount -gt 0) {
            # 驗證修改前後的基本結構
            if (($dataContent.Length -gt $originalContent.Length) -and ($dataContent -match 'const vtubers')) {
                # 寫回data.js（使用UTF8 without BOM）
                $utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
                [System.IO.File]::WriteAllText($DataJsPath, $dataContent, $utf8NoBOM)
                Write-Log "✅ data.js 已更新，共 $updateCount 部新影片"
                return $true
            }
            else {
                Write-Log "❌ 驗證失敗，未寫入檔案，已恢復備份" "ERROR"
                Copy-Item -Path $backupFile -Destination $DataJsPath -Force
                return $false
            }
        }
        else {
            Write-Log "沒有新影片需要更新"
            return $false
        }
    }
    catch {
        Write-Log "❌ 更新data.js失敗: $($_.Exception.Message)" "ERROR"
        Write-Log "⏮️ 嘗試從備份恢復..." "WARNING"
        if (Test-Path $backupFile) {
            Copy-Item -Path $backupFile -Destination $DataJsPath -Force
            Write-Log "✅ 已恢復備份"
        }
        return $false
    }
}

# ===== Git 操作 =====
function Push-ToGithub {
    try {
        Push-Location $ProjectPath

        # git add
        git add js/data.js

        # git commit
        $commitMsg = "Auto-update: Add new VTuber videos ($(Get-Date -Format 'yyyy-MM-dd HH:mm'))"
        git commit -m $commitMsg

        # git push
        git push origin main

        Write-Log "已推送到GitHub"
        Pop-Location
        return $true
    }
    catch {
        Write-Log "Git操作失敗: $($_.Exception.Message)" "ERROR"
        Pop-Location
        return $false
    }
}

# ===== 主程式 =====
function Start-AutoUpdate {
    param(
        [switch]$TestMode = $false
    )

    if ($TestMode) {
        Write-Log "⚠️ 【測試模式】不會修改data.js或推送GitHub" "WARNING"
    }

    Write-Log "========== 開始自動更新 ==========" "INFO"

    try {
        # 從data.js中讀取VTuber資訊
        $dataContent = Get-Content -Path $DataJsPath -Raw
        $vtuberData = @{}

        foreach ($id in $VtuberIds) {
            # 簡單解析（實際應該用proper JSON parser）
            if ($dataContent -match "id: `"$id`".*?youtubeChannelId: `"([^`"]+)`"") {
                $channelId = $matches[1]
                $vtuberData[$id] = @{ channelId = $channelId }
            }
        }

        Write-Log "開始掃描 $($vtuberData.Count) 位VTuber"

        # 抓取新影片
        $allNewVideos = @{}
        foreach ($id in $vtuberData.Keys) {
            $channelId = $vtuberData[$id].channelId
            $videos = Get-YoutubeVideos -ChannelId $channelId -VtuberId $id
            if ($videos.Count -gt 0) {
                $allNewVideos[$id] = $videos
            }
            Start-Sleep -Milliseconds 500 # API限流
        }

        # 更新data.js
        if ($allNewVideos.Count -gt 0) {
            if ($TestMode) {
                Write-Log "【測試】會更新以下VTuber:" "INFO"
                foreach ($id in $allNewVideos.Keys) {
                    Write-Log "  - $id: $($allNewVideos[$id].Count) 部新影片" "INFO"
                }
            }
            else {
                $updated = Update-DataJs -NewVideos $allNewVideos
                if ($updated) {
                    Write-Log "準備推送到GitHub..." "INFO"
                    Push-ToGithub
                }
            }
        }

        Write-Log "========== 更新完成 ==========" "INFO"
    }
    catch {
        Write-Log "程式出錯: $($_.Exception.Message)" "ERROR"
    }
}

# ===== 執行 =====
# 檢查命令行參數
$testMode = $PSBoundParameters.ContainsKey('TestMode')
Start-AutoUpdate -TestMode:$testMode
