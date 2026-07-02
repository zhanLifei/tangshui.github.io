$images = @(
    @{url="https://aka.doubaocdn.com/s/lfUQ1wpz6W"; file="img46.jpg"},
    @{url="https://aka.doubaocdn.com/s/bfGj1wpz6Y"; file="img47.jpg"},
    @{url="https://aka.doubaocdn.com/s/3QKx1wpz6Z"; file="img48.jpg"},
    @{url="https://aka.doubaocdn.com/s/1ccI1wpz6Y"; file="img49.jpg"},
    @{url="https://aka.doubaocdn.com/s/IQIk1wpz6V"; file="img50.jpg"},
    @{url="https://aka.doubaocdn.com/s/n1YT1wpz6X"; file="img51.jpg"},
    @{url="https://aka.doubaocdn.com/s/Dw6H1wpz6Z"; file="img52.jpg"},
    @{url="https://aka.doubaocdn.com/s/xSjG1wpz6Y"; file="img53.jpg"},
    @{url="https://aka.doubaocdn.com/s/tz6W1wpz6X"; file="img54.jpg"},
    @{url="https://aka.doubaocdn.com/s/LG6d1wpz6X"; file="img55.jpg"}
)

$baseDir = "D:\szdt_concom\tangshui.github.io\image"

foreach ($img in $images) {
    $outputPath = Join-Path $baseDir $img.file
    Write-Host "Downloading $($img.file)..."
    try {
        Invoke-WebRequest -Uri $img.url -OutFile $outputPath -TimeoutSec 30
        Write-Host "  Success"
    } catch {
        Write-Host "  Failed: $_"
    }
    Start-Sleep -Seconds 1
}

Write-Host "Done!"
