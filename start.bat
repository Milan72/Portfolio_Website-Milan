@echo off
echo ========================================
echo   Starting Portfolio Website
echo ========================================
echo.

REM Kill any process on port 3001
echo Checking for processes on port 3001...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3001') do (
    echo Killing process %%a on port 3001...
    taskkill /F /PID %%a >nul 2>&1
)

REM Kill all node processes
echo Cleaning up Node.js processes...
taskkill /F /IM node.exe >nul 2>&1

REM Wait 2 seconds
echo Waiting for port to be free...
timeout /t 2 /nobreak >nul

REM Start the server
echo.
echo Starting Next.js development server on port 3001...
echo Open http://localhost:3001 in your browser
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev

