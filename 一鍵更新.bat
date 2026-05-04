@echo off
chcp 65001 >nul
title MC組事務所 — 網站更新工具
color 0B
cls

echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║       MC組事務所  網站一鍵更新工具           ║
echo  ║       自動同步到 GitHub Pages                ║
echo  ╚══════════════════════════════════════════════╝
echo.

cd /d "C:\Claude Ai\網站\vtuber-site"

:: 檢查是否有變更
git diff --quiet HEAD 2>nul
if %errorlevel% == 0 (
  git status --porcelain > temp_check.txt 2>nul
  for %%A in (temp_check.txt) do if %%~zA == 0 (
    del temp_check.txt 2>nul
    echo  ✨ 目前沒有任何變更，網站已是最新版本！
    echo.
    pause
    exit /b 0
  )
  del temp_check.txt 2>nul
)

echo  📋 偵測到以下變更：
echo  ────────────────────────────────────────────
git status --short
echo  ────────────────────────────────────────────
echo.

:: 詢問更新說明
set /p msg= 📝 輸入更新說明（直接按 Enter 使用自動時間戳記）：

if "%msg%"=="" (
  for /f "tokens=1-4 delims=/ " %%a in ('date /t') do set today=%%b-%%c-%%d
  for /f "tokens=1-2 delims=: " %%a in ('time /t') do set now=%%a:%%b
  set msg=自動更新 %today% %now%
)

echo.
echo  ⬆  正在上傳到 GitHub...
echo  ────────────────────────────────────────────

git add .
git commit -m "%msg%"
git push

echo  ────────────────────────────────────────────
echo.

if %errorlevel% == 0 (
  color 0A
  echo  ✅  網站更新成功！
  echo.
  echo  🌐  約 1~2 分鐘後，所有訪客將看到最新內容
  echo  📌  更新說明：%msg%
) else (
  color 0C
  echo  ❌  更新失敗！請確認下列事項：
  echo.
  echo     1. 是否已設定 Git 帳號（git config user.name / user.email）
  echo     2. 是否已連結 GitHub Repository（git remote -v 確認）
  echo     3. 網路連線是否正常
  echo     4. GitHub 帳號是否有權限推送
)

echo.
pause
