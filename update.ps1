$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
chcp 65001 | Out-Null

Set-Location $PSScriptRoot

$changes = & git status --porcelain 2>&1

if (-not $changes) {
    Write-Host ""
    Write-Host "  (no changes - already up to date)"
    Write-Host ""
    Read-Host "  Press Enter to close"
    exit 0
}

Write-Host ""
Write-Host "  [Changes detected]"
Write-Host "  ------------------------------------------"
& git status --short
Write-Host "  ------------------------------------------"
Write-Host ""

$msg = Read-Host "  Commit message (Enter = auto timestamp)"
if ([string]::IsNullOrWhiteSpace($msg)) {
    $msg = "update " + (Get-Date -Format "yyyy-MM-dd HH:mm")
}

Write-Host ""
Write-Host "  Pushing to GitHub..."
Write-Host "  ------------------------------------------"

& git add .
& git commit -m $msg
& git push
$pushExit = $LASTEXITCODE

Write-Host "  ------------------------------------------"
Write-Host ""

if ($pushExit -eq 0) {
    Write-Host "  OK - Push successful!"
    Write-Host "  Site will update in 1-2 minutes."
    Write-Host "  Message: $msg"
} else {
    Write-Host "  FAILED - git push error."
    Write-Host "  Check: network / GitHub auth / git remote"
}

Write-Host ""
Read-Host "  Press Enter to close"
