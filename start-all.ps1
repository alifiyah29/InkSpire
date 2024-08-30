# Navigate to backend directory and start the backend server
Start-Process -NoNewWindow -FilePath "npm" -ArgumentList "start" -WorkingDirectory "D:\Tech-Workspace\React.js\InkSpire\backend"

# Wait for the backend to be up
Start-Sleep -Seconds 5

# Navigate to frontend directory and start the frontend server
Start-Process -NoNewWindow -FilePath "npm" -ArgumentList "start" -WorkingDirectory "D:\Tech-Workspace\React.js\InkSpire\frontend"
