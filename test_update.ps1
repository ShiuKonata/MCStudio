# VTuber自動更新腳本 - 測試版本
$ProjectPath = 'C:\Claude Ai\網站\MCStudio'
$DataJsPath = "$ProjectPath\js\data.js"
$LogPath = "$ProjectPath\auto_update.log"

function Write-Log {
    param([string]$Message, [string]$Level = 'INFO')
    $timestamp = (Get-Date).ToString('yyyy-MM-dd HH:mm:ss')
    $logLine = "[$timestamp] [$Level] $Message"
    Write-Host $logLine
    Add-Content -Path $LogPath -Value $logLine -Encoding UTF8 -ErrorAction SilentlyContinue
}

# 測試邏輯
Write-Log '========== 開始自動更新測試 ==========' 'INFO'
Write-Log '掃描中文測試...' 'INFO'
Write-Log '檢查data.js路徑...' 'INFO'

if (Test-Path $DataJsPath) {
    Write-Log "✅ data.js 已找到: $DataJsPath" 'SUCCESS'
    $fileSize = (Get-Item $DataJsPath).Length / 1MB
    Write-Log "檔案大小: $fileSize MB" 'INFO'
} else {
    Write-Log "❌ data.js 未找到!" 'ERROR'
}

Write-Log '========== 測試完成 ==========' 'INFO'