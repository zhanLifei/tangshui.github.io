$images = @(
    @{url="https://aka.doubaocdn.com/s/zv721wpz8o"; file="img56.jpg"},
    @{url="https://aka.doubaocdn.com/s/UhYy1wpz8p"; file="img57.jpg"},
    @{url="https://aka.doubaocdn.com/s/10HS1wpz8p"; file="img58.jpg"},
    @{url="https://aka.doubaocdn.com/s/bIw11wpz8m"; file="img59.jpg"},
    @{url="https://aka.doubaocdn.com/s/LS5o1wpz8p"; file="img60.jpg"},
    @{url="https://aka.doubaocdn.com/s/Ou4a1wpz8o"; file="img61.jpg"},
    @{url="https://aka.doubaocdn.com/s/j4I71wpz8n"; file="img62.jpg"},
    @{url="https://aka.doubaocdn.com/s/GzZB1wpz8o"; file="img63.jpg"},
    @{url="https://aka.doubaocdn.com/s/lgo31wpz8p"; file="img64.jpg"},
    @{url="https://aka.doubaocdn.com/s/QEQb1wpz8o"; file="img65.jpg"}
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
