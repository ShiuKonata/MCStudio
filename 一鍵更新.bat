@echo off
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0update.ps1"
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] PowerShell script failed with code %errorlevel%
    pause
)
