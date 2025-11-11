# Simple Portfolio Website Starter
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Starting Portfolio Website" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Kill processes on port 3001
Write-Host "Cleaning up port 3001..." -ForegroundColor Yellow
$connections = Get-NetTCPConnection -LocalPort 3001 -ErrorAction SilentlyContinue
if ($connections) {
    $connections | ForEach-Object {
        $pid = $_.OwningProcess
        Write-Host "Killing process $pid on port 3001"
        Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
    }
}

# Kill all node processes
Write-Host "Cleaning up Node.js processes..." -ForegroundColor Yellow
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# Wait
Start-Sleep -Seconds 2

# Start server
Write-Host ""
Write-Host "Starting Next.js server on port 3001..." -ForegroundColor Green
Write-Host "Open http://localhost:3001 in your browser" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

npm run dev

