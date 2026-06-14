@echo off
if /i not "%~1"=="--minimized" (
  start "pivo-bez-mery kiosk launcher" /min "%~f0" --minimized
  exit /b
)

setlocal

set "CHROME_EXE=C:\Program Files\Google\Chrome\Application\chrome.exe"
if not exist "%CHROME_EXE%" set "CHROME_EXE=C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"

set "APP_URL=http://localhost:8080"
set "MERA_URL=http://localhost:8080/mera"

rem Screen layout from Windows display settings:
rem screen 2 is on the left, screen 1 is on the right.
set "APP_X=0"
set "APP_Y=0"
set "APP_W=1920"
set "APP_H=1080"

set "MERA_X=1920"
set "MERA_Y=0"
set "MERA_W=1024"
set "MERA_H=768"

set "APP_PROFILE=%TEMP%\pivo-bez-mery-main-chrome"
set "MERA_PROFILE=%TEMP%\pivo-bez-mery-mera-chrome"

timeout /t 15 /nobreak >nul

start "pivo-bez-mery main" "%CHROME_EXE%" ^
  --user-data-dir="%APP_PROFILE%" ^
  --no-first-run ^
  --disable-session-crashed-bubble ^
  --autoplay-policy=no-user-gesture-required ^
  --new-window ^
  --window-position=%APP_X%,%APP_Y% ^
  --window-size=%APP_W%,%APP_H% ^
  --kiosk ^
  "%APP_URL%"

timeout /t 2 /nobreak >nul

start "pivo-bez-mery mera" "%CHROME_EXE%" ^
  --user-data-dir="%MERA_PROFILE%" ^
  --no-first-run ^
  --disable-session-crashed-bubble ^
  --autoplay-policy=no-user-gesture-required ^
  --new-window ^
  --window-position=%MERA_X%,%MERA_Y% ^
  --window-size=%MERA_W%,%MERA_H% ^
  --kiosk ^
  "%MERA_URL%"

powershell -NoProfile -ExecutionPolicy Bypass -Command "$ws = New-Object -ComObject WScript.Shell; Start-Sleep -Seconds 2; $ws.AppActivate('pivo-bez-mery main') | Out-Null"

endlocal
