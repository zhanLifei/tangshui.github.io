$images = @(
    @{url="https://aka.doubaocdn.com/s/ua8o1wpzCB"; file="img66.jpg"},
    @{url="https://aka.doubaocdn.com/s/SAoA1wpzCD"; file="img67.jpg"},
    @{url="https://aka.doubaocdn.com/s/VFtB1wpzCD"; file="img68.jpg"},
    @{url="https://aka.doubaocdn.com/s/UQdv1wpzCC"; file="img69.jpg"},
    @{url="https://aka.doubaocdn.com/s/LZkx1wpzCB"; file="img70.jpg"},
    @{url="https://aka.doubaocdn.com/s/l0nG1wpzCB"; file="img71.jpg"},
    @{url="https://aka.doubaocdn.com/s/EMW01wpzCB"; file="img72.jpg"},
    @{url="https://aka.doubaocdn.com/s/55QQ1wpzCC"; file="img73.jpg"},
    @{url="https://aka.doubaocdn.com/s/1RrR1wpzCE"; file="img74.jpg"},
    @{url="https://aka.doubaocdn.com/s/Cdvg1wpzCC"; file="img75.jpg"}
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
