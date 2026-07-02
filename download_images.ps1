$images = @(
    @{url="https://aka.doubaocdn.com/s/CP5g1wpz4S"; file="img36.jpg"},
    @{url="https://aka.doubaocdn.com/s/fPj71wpz4S"; file="img37.jpg"},
    @{url="https://aka.doubaocdn.com/s/iixE1wpz4P"; file="img38.jpg"},
    @{url="https://aka.doubaocdn.com/s/v8Uy1wpz4S"; file="img39.jpg"},
    @{url="https://aka.doubaocdn.com/s/2q5c1wpz4S"; file="img40.jpg"},
    @{url="https://aka.doubaocdn.com/s/VR7N1wpz4S"; file="img41.jpg"},
    @{url="https://aka.doubaocdn.com/s/X1gH1wpz4R"; file="img42.jpg"},
    @{url="https://aka.doubaocdn.com/s/ADZr1wpz4P"; file="img43.jpg"},
    @{url="https://aka.doubaocdn.com/s/4xF31wpz4S"; file="img44.jpg"},
    @{url="https://aka.doubaocdn.com/s/3OJ21wpz4P"; file="img45.jpg"}
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
