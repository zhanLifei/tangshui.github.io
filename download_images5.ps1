$images = @(
    @{url="https://aka.doubaocdn.com/s/JoBV1wpzEP"; file="img76.jpg"},
    @{url="https://aka.doubaocdn.com/s/1U8E1wpzEP"; file="img77.jpg"},
    @{url="https://aka.doubaocdn.com/s/qdU01wpzEM"; file="img78.jpg"},
    @{url="https://aka.doubaocdn.com/s/FcS61wpzEM"; file="img79.jpg"},
    @{url="https://aka.doubaocdn.com/s/rtPO1wpzEM"; file="img80.jpg"},
    @{url="https://aka.doubaocdn.com/s/WlLs1wpzEO"; file="img81.jpg"},
    @{url="https://aka.doubaocdn.com/s/orir1wpzEO"; file="img82.jpg"},
    @{url="https://aka.doubaocdn.com/s/YkfB1wpzEP"; file="img83.jpg"},
    @{url="https://aka.doubaocdn.com/s/95PL1wpzEO"; file="img84.jpg"},
    @{url="https://aka.doubaocdn.com/s/W3O51wpzEM"; file="img85.jpg"}
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
    Start-Sleep -Seconds 3
}

Write-Host "Done!"
