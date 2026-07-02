# 图片替换规则
$replacements = @(
    # 雪花冰/冰品类
    @{ name = "雪花冰底"; img = "img36.jpg" },
    @{ name = "龙眼冰底"; img = "img36.jpg" },
    @{ name = "白雪冰底"; img = "img37.jpg" },
    
    # 饮品类
    @{ name = "经典柠檬茶"; img = "img41.jpg" },
    @{ name = "鲜橙柠檬茶"; img = "img41.jpg" },
    @{ name = "黄皮柠檬茶"; img = "img41.jpg" },
    @{ name = "芭乐柠檬茶"; img = "img41.jpg" },
    @{ name = "草莓雪葩"; img = "img79.jpg" },
    @{ name = "芭乐气泡水"; img = "img76.jpg" },
    @{ name = "葡萄气泡水"; img = "img76.jpg" },
    @{ name = "冬瓜茶底"; img = "img77.jpg" },
    @{ name = "奶盖"; img = "img43.jpg" },
    
    # 小吃类
    @{ name = "咖喱鱼蛋"; img = "img53.jpg" },
    @{ name = "酸辣凤爪"; img = "img80.jpg" },
    @{ name = "潮汕酸野"; img = "img81.jpg" },
    
    # 甜品类
    @{ name = "绢珊大满贯"; img = "img68.jpg" },
    @{ name = "椰乳桂花茉莉大满贯"; img = "img68.jpg" },
    @{ name = "四果汤底"; img = "img66.jpg" },
    @{ name = "海石花"; img = "img74.jpg" },
    @{ name = "银耳汤"; img = "img65.jpg" },
    @{ name = "古田银耳烤梨"; img = "img67.jpg" },
    @{ name = "牛奶麻薯"; img = "img25.jpg" },
    @{ name = "姜薯"; img = "img69.jpg" },
    
    # 闽南甜汤小料类
    @{ name = "鲜百合"; img = "img62.jpg" },
    @{ name = "花生仁"; img = "img46.jpg" },
    @{ name = "蜜木薯"; img = "img70.jpg" },
    @{ name = "蜜莲藕"; img = "img55.jpg" },
    @{ name = "糯薏米"; img = "img58.jpg" },
    @{ name = "蜜绿豆"; img = "img55.jpg" },
    
    # 其他
    @{ name = "糖水"; img = "img71.jpg" },
    @{ name = "椰奶底"; img = "img61.jpg" },
    @{ name = "椰乳基底"; img = "img61.jpg" },
    @{ name = "鲜牛奶底"; img = "img56.jpg" },
    @{ name = "榴莲系列基础奶底"; img = "img64.jpg" },
    @{ name = "榴莲系列基础奶底-榴莲奶油"; img = "img64.jpg" },
    @{ name = "榴莲系列基础奶底-河粉皮"; img = "img64.jpg" },
    @{ name = "万用奶浆"; img = "img60.jpg" },
    @{ name = "杏仁片"; img = "img62.jpg" },
    @{ name = "腐竹薏米窝蛋糖水"; img = "img46.jpg" }
)

$filePath = "D:\szdt_concom\tangshui.github.io\js\index.js"
$content = Get-Content $filePath -Raw -Encoding UTF8
$count = 0

foreach ($r in $replacements) {
    $pattern = "(name: '$($r.name)',`r?`n\s+)url: '\.\/image\/img0\.jpg'"
    $replacement = "`$1url: './image/$($r.img)'"
    if ($content -match $pattern) {
        $content = $content -replace $pattern, $replacement
        Write-Host "替换成功: $($r.name) → $($r.img)"
        $count++
    } else {
        Write-Host "未找到: $($r.name)"
    }
}

# 保存文件
$content | Set-Content $filePath -Encoding UTF8 -NoNewline
Write-Host "`n共替换了 $count 个糖水的图片"
