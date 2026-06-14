@echo off
setlocal

set "FRONTEND_DIR=C:\beer\pivo-bez-mery"
set "BACKEND_DIR=C:\beer\back"

start "pivo-bez-mery frontend" /min cmd /k "cd /d ""%FRONTEND_DIR%"" && npm run serve"
start "pivo-bez-mery backend" /min cmd /k "cd /d ""%BACKEND_DIR%"" && npm start"

endlocal
