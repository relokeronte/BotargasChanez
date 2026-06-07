$port = 3000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Start()
    Write-Host "Server started successfully!"
    Write-Host "You can open the application at: http://localhost:$port/"
} catch {
    Write-Host "Error starting server: $_"
    exit 1
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        # Get local path
        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") {
            $urlPath = "/index.html"
        }

        # Decode path
        $decodedPath = [Uri]::UnescapeDataString($urlPath).TrimStart('/')
        $filePath = [System.IO.Path]::GetFullPath((Join-Path (Get-Location).Path $decodedPath))

        # Check path traversal
        $currentDir = (Get-Location).Path
        if (-not $filePath.StartsWith($currentDir)) {
            $response.StatusCode = 403
            $errorMessage = "403 Forbidden"
            $bytes = [System.Text.Encoding]::UTF8.GetBytes($errorMessage)
            $response.ContentType = "text/plain"
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            Write-Host "$(Get-Date -Format 'HH:mm:ss') - 403 Forbidden - $urlPath"
            $response.Close()
            continue
        }

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css" }
                ".js"   { "application/javascript" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                default { "application/octet-stream" }
            }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            Write-Host "$(Get-Date -Format 'HH:mm:ss') - 200 OK - $urlPath"
        } else {
            $response.StatusCode = 404
            $errorMessage = "404 Not Found"
            $bytes = [System.Text.Encoding]::UTF8.GetBytes($errorMessage)
            $response.ContentType = "text/plain"
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            Write-Host "$(Get-Date -Format 'HH:mm:ss') - 404 Not Found - $urlPath"
        }
        $response.Close()
    }
} finally {
    $listener.Stop()
}
