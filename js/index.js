// 全部数据
let categoryList = [
  {
    title: '广式传统糖水',
    list: [
      {
        id: 1,
        name: '臭草海带绿豆沙',
        url: './image/img1.png',
        remark: '0-5 度冰箱保存 3 天',
        materials: `<strong>材料：</strong>绿豆 900 克，陈皮 1 片，红片糖 2 片，黄冰糖 260 克，清水 5500 毫升<br>
                    <strong>制作方法：</strong>陈皮泡 20 分钟把囊刮干净，加入绿豆和臭草，倒入清水大火烧开转中火，盖上盖子，漏一个筷子的缝出来煲大概 40 分钟，有点起砂，如果水不够一定要加入开水，盖上盖子等一会绿豆脱壳，尽快捞壳，再快速盖上盖子，壳捞完加入海带，红片糖和冰糖糖煲 5 分钟即可。`,
        isCalculator: true,
        detailList: [
          {  name: '绿豆',  gram: '900',  unit: '克'},
          {  name: '陈皮',  gram: '1',  unit: '片'},
          {  name: '红片糖',  gram: '2',  unit: '片'},
          {  name: '黄冰糖',  gram: '260',  unit: '克'},
          {  name: '清水',  gram: '5500',  unit: '毫升'
          },
        ],
      },
      {
        id: 2,
        name: '陈皮红豆沙',
        url: './image/img2.jpg',
        remark: '0-5 度冰箱保存 3 天',
        materials: `<strong>材料：</strong>红豆1500克，清水6000克水，陈皮一片，黄冰糖850克<br>
                    <strong>制作方法：</strong>第一步先把红豆倒入锅中小火炒5分钟，清洗干净，把陈皮泡20分钟刮囊(不刮囊会发苦)，加入黄冰糖碎，商用压力锅压(牛羊肉键)40分钟，自动凉透不要放气(阀气)，开盖后撒入一匙勺椰蓉增香。`,
        isCalculator: true,
        detailList: [
          {  name: '红豆',  gram: '1500',  unit: '克'},
          {  name: '清水',  gram: '6000',  unit: '克'},
          {  name: '陈皮',  gram: '1',  unit: '片'},
          {  name: '黄冰糖',  gram: '850',  unit: '克'}
        ],
      },
      {
        id: 3,
        name: '芝麻糊',
        url: './image/img4.jpeg',
        remark: '0-5 度冰箱保存 3 天',
        materials: `<strong>1. 炒芝麻：</strong>生芝麻20斤，白芝麻2斤，花生5斤，黑芝麻兑少许白芝麻芝麻冲洗干净放入铁锅迅速翻炒(火不能太急容易糊口，外焦就有糊味，里面白心都不熟，磨完后芝麻糊做出来不够香)。
                    <strong>材料：</strong>芝麻300克，花生30克，水2300克，红片糖1片和白砂糖共300克，糯米粉130克。'<br>
                    <strong>制作方法：</strong><br>
                    A部分:芝麻酱放入1000水放料理机打细腻备用<br>
                    B部分:糯米粉加入250克冷水搅拌过滤备用<br>
                    C部分:锅中放入1300水烧开，加入A部分，烧开倒入B部分慢慢搅拌倒入锅中，火候调到中火不能太大容易糊底。`,
        isCalculator: true,
        detailList: [
          {  name: '芝麻',  gram: '300',  unit: '克'},
          {  name: '花生',  gram: '30',  unit: '克'},
          {  name: '水',  gram: '2300',  unit: '克'},
          {  name: '红片糖1片和白砂糖一共',  gram: '300',  unit: '克'},
          {  name: '糯米粉',  gram: '130',  unit: '克'},
        ],
      },
      {
        id: 4,
        name: '西米',
        url: './image/img3.png',
        remark: '0-5 度冰箱保存 2 天',
        materials: `<strong>材料：</strong>材料:西米300克，水2000毫升，<br>
                    <strong>制作方法：</strong>水烧开后用打蛋头慢慢倒入西米，搅拌浮起来盖上盖子煮8分钟，焖熟(没有白心就煮熟了)，过冷水把粘液洗掉，，加入冰块搅拌沥干水份保存。`,
        isCalculator: true,
        detailList: [
          {  name: '西米',  gram: '300',  unit: '克'},
          {  name: '水',  gram: '2000',  unit: '毫升'}
        ],
      },
      {
        id: 5,
        name: '双皮奶',
        url: './image/img5.jpg',
        remark: '2-6 度冰箱保存 3 天',
        materials: `<strong>材料：</strong>鸡蛋清370克，水牛奶1700毫升，白糖135克，淡奶油20克，二滴柠檬汁(此比例能出10碗，碗约四寸220毫升的碗)<br>
                    <strong>制作方法：</strong>电饭煲胆明火将牛奶加热到70度备用，蛋清打发10秒，加入白糖，淡奶油，水牛奶用打蛋头慢慢倒入蛋清搅拌均匀直到糖融化, 60 目过滤网过滤。提前把碗放入蒸箱预热，用勺子轻搅一下奶，倒入碗中，过滤一遍，火枪消泡盖上盖子，差不多 1 分板钟掀一次盖子，时间没有固定（炉子，牛奶不一样不能很精准）`,
        isCalculator: true,
        detailList: [
          {  name: '鸡蛋清',  gram: '370',  unit: '克'},
          {  name: '水牛奶',  gram: '1700',  unit: '毫升'},
          {  name: '淡奶油',  gram: '20',  unit: '克'},
          {  name: '柠檬汁',  gram: '2',  unit: '滴'},
        ],
      },
      {
        id: 6,
        name: '姜撞奶',
        url: './image/img6.jpeg',
        remark: '现来现做',
        materials: `<strong>(水牛奶版)：</strong><br>
                    4寸青花瓷碗，云南小黄姜带皮洗净榨汁，姜汁过滤(不过滤则有姜渣，口感区别)，姜汁15-20克打到碗底大圈。生水牛奶(生水牛奶200~250克+15~20克白糖)加热80度放凉到(夏天72度，冬天75度)快速撞下去，若奶脂好5秒凝固，若奶不好盖上盖子1分钟。注:撞奶要均匀，否则会散成类似蛋花的观感(底层)
                    <br>
                    <br>
                    <strong>(鲜奶版)：</strong><br>
                    4寸青花瓷碗，姜汁15-20克打到碗底大圈。水牛奶200~250克，加入砂糖15-20克, 加热80度凉到(夏天72度，冬天75度)。(鲜奶200克+淡奶油8克+进口奶粉8克)此混合物可替代水牛奶。15-20克白糖(可调节)。
                    快速撞下去，奶脂后5秒凝固，奶不好盖上盖子1分钟。注:用云南小黄姜，带皮洗净，要用才现磨，姜汁过滤，不过滤则有姜渣，口感差别。撞奶要均匀，否则会散成类似蛋花的观感(底层)<br>
                    注:水牛奶版，厚重，嫩，口感更有奶制品吃完的感受;鲜奶版更嫩，滑，整体有奶油的味道，香。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 7,
        name: '绿水鬼开心果糊',
        url: './image/img7.jpg',
        remark: '',
        materials: `<strong>材料：</strong>水200克，开心果粉5克，糯米粉10克，糖8克，上允开心果酱30克，正荣开心果酱10克，全部搅拌均匀，开1500瓦一直搅拌到沸腾状态`,
        isCalculator: true,
        detailList: [
          {  name: '水',  gram: '200',  unit: '克'},
          {  name: '开心果粉',  gram: '5',  unit: '克'},
          {  name: '糯米粉',  gram: '10',  unit: '克'},
          {  name: '糖',  gram: '8',  unit: '克'},
          {  name: '正荣开心果酱',  gram: '30',  unit: '克'},
          {  name: '正荣开心果酱',  gram: '10',  unit: '克'},
        ],
      },
      {
        id: 8,
        name: '焦糖布丁',
        url: './image/img8.jpg',
        remark: '不能隔夜',
        materials: `<strong>制作步骤：</strong><br>
                    <strong>1. 处理蛋液</strong><br>
                    先将全蛋和蛋黄充分打散，备用。<br>
                    <strong>2. 熬煮焦糖</strong><br>
                    白砂糖 + 水混合，中火煮制，全程搅拌均匀
                    待糖煮到变色后，转小火慢煮（慢煮），避免糊锅
                    焦糖煮好后，冲入 22g 开水，搅匀后倒入布丁杯底部<br>
                    <strong>3. 制作布丁液</strong><br>
                    牛奶 + 淡奶油加热至 70℃
                    加入糖、香草精籽、酒，搅拌至糖融化
                    倒入打散的蛋液，充分搅拌均匀
                    用滤网过滤布丁液，去除气泡和杂质<br>
                    <strong>4. 烘烤</strong><br>
                    将过滤好的布丁液，缓慢倒入铺好焦糖的布丁杯中
                    烤箱设置：下层 145℃，上层 130℃，盖上锡纸
                    烘烤 40-50 分钟（根据自家烤箱调整时间）
                    烤好后放凉，冷藏定型即可食用`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 9,
        name: '糖水',
        url: './image/1.jpg',
        remark: '0-5 度冰箱保存 5 天',
        materials: `<strong>材料：</strong>水4000克，白糖280克，煮沸即可。`,
        isCalculator: true,
        detailList: [
          { name: '水',gram: '4000',unit: '克'},
          { name: '白糖', gram: '280', unit: '克'}
        ],
      },
      {
        id: 9,
        name: '椰子冻',
        url: './image/1.jpg',
        remark: '2-6 度冰箱保存 5 天',
        materials: `<strong>材料：</strong>泰国椰3个，椰青水350克, 牛奶60克，糖16克，淡奶油16克，椰浆150克, 白凉粉6克，果冻粉2克。<br>
                    <strong>制作方法：</strong>全部搅拌均匀，中火加热，倒入白凉粉和果冻粉(2种粉用少许生水搅拌没有颗粒状态，不用过滤直接倒入混合物)。
                    煮开后过滤一遍，分装到每个椰子里，快速用火枪消泡。放凉后用保鲜膜封存起来，2-3度可存放5天。`,
        isCalculator: true,
        detailList: [
          { name: '泰国椰',gram: '3',unit: '个' },
          { name: '椰青水',gram: '350',unit: '克' },
          { name: '牛奶',gram: '60',unit: '克' },
          { name: '糖',gram: '16',unit: '克' },
          { name: '淡奶油',gram: '16',unit: '克' },
          { name: '椰浆',gram: '150',unit: '克' },
          { name: '白凉粉',gram: '6',unit: '克' },
          { name: '果冻粉',gram: '2',unit: '克' }
        ],
      },
      {
        id: 10,
        name: '椰青双层冻',
        url: './image/1.jpg',
        remark: '2-6度冰箱保存5天',
        materials: `<strong>材料：</strong>椰青水 250g + 果冻粉 3g。<br>
                    <strong>制作方法：</strong>先将椰奶冻装一半凝固了再入椰青部分`,
        isCalculator: true,
        detailList: [
          { name: '椰青水',gram: '250',unit: '克' },
          { name: '果冻粉',gram: '3',unit: '克' }
        ],
      },
      {
        id: 11,
        name: '杏仁蛋白茶',
        url: './image/1.jpg',
        remark: '',
        materials: `光中杏100克冲洗干净，浸泡3个小时，加入300克清水，100克冰
                    块料理机打2分钟，再继续打2分钟，纱布袋过滤出来。
                    300克杏仁汁，50克牛奶，加入一个蛋白加热搅拌即可。`,
        isCalculator: true,
        detailList: [
          { name: '光中杏',gram: '100',unit: '克' },
          { name: '清水',gram: '300',unit: '克' },
          { name: '冰块',gram: '100',unit: '克' },
          { name: '杏仁汁',gram: '300',unit: '克' },
          { name: '牛奶',gram: '50',unit: '克' },
        ],
      },
    ],
  },
  {
    title: '百搭小料',
    list: [
      {
        id: 1,
        name: '芋圆',
        url: './image/1.jpg',
        remark: '冷冻能保存一个月',
        materials: `<strong>材料：</strong>沙地蜜薯1000克，木薯粉450克-480克，太白粉80克，糖100克，椰子油20克(可不加)。<br>
                    <strong>制作方法：</strong>清洗干净(不去皮)蒸熟，再去皮。地瓜趁热加入糖和椰子油捣碎，加入木薯粉，太白粉厨师机1档搅拌10秒，
                    打开厨师机用手揉均匀(不能一直用厨师机打，越打越稀，档位高打出来更稀，切记1)。取三分之一面团放入烧开水的锅中烫90分钟再放入机器，
                    开1档搅拌10秒，拿出来用手多次揉均匀(多次揉的面团会更Q弹)。注意:粉的比例有个取值，自己随意调配，因红薯，紫薯，香芋的品质不一样，
                    含水量不一样，大家灵活运用!紫薯(460-480克木薯粉，地瓜480-500克木薯粉，香芋500-550克木薯粉，仅供参考，具体还要根据不同食材的吸水性去调配)，
                    做好的芋圆冷冻能保存一个月。出餐的芋圆最好能保持1个小时内用完，少量多次煮，保证口感比较好吃。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 2,
        name: '莲子',
        url: './image/1.jpg',
        remark: '煮好的莲子电饭锅保温',
        materials: `<strong>材料：</strong>100克莲子，黄冰糖70克，水400克<br>
                    <strong>制作方法：</strong>全部材料加入电高压锅，按煲汤键，15分钟开盖，倒出来放进水里泡着降温。如果当天卖不完放了冰箱第二天必须拿出来煮沸腾才能用`,
        isCalculator: true,
        detailList: [
          { name: '莲子',gram: '100',unit: '克' },
          { name: '黄冰糖',gram: '70',unit: '克' },
          { name: '水',gram: '400',unit: '克' },
        ],
      },
      {
        id: 3,
        name: '香芋块',
        url: './image/1.jpg',
        remark: '电饭煲保温存储',
        materials: `<strong>材料：</strong>荔浦芋头250克，水350克，椰浆20克，冰糖30克，白糖10克<br>
                    <strong>制作方法：</strong>全部材料放入锅中煮沸状态开小火煮5分钟后再加入糖煮熟关火。粉糯芋头时间因不同产地的芋头时间是不一样的。辨别方法用签字识别状态。
                    当天卖不完的放了冰箱第二天需加热才能用，不然会夹生`,
        isCalculator: true,
        detailList: [
          { name: '荔浦芋头',gram: '250',unit: '克' },
          { name: '冰糖',gram: '30',unit: '克' },
          { name: '白糖',gram: '10',unit: '克' },
          { name: '水',gram: '350',unit: '克' },
          { name: '椰浆',gram: '20',unit: '克' },
        ],
      },
      {
        id: 4,
        name: '蜜红薯',
        url: './image/1.jpg',
        remark: '保温储存',
        materials: `<strong>材料：</strong>红薯300克，黄冰糖碎45克，麦芽糖15克。水700克，<br>
                    <strong>制作方法：</strong>先把红薯放入少许盐和水浸泡10分钟(为了保持红薯的完整性不易煮散)。上锅整到半熟状态捞切块，加入糖和水大火转小火慢慢收汁。`,
        isCalculator: true,
        detailList: [
          { name: '红薯',gram: '300',unit: '克' },
          { name: '黄冰糖',gram: '45',unit: '克' },
          { name: '麦芽糖',gram: '15',unit: '克' },
          { name: '水',gram: '700',unit: '克' },
        ],
      },
      {
        id: 5,
        name: '芋泥球',
        url: './image/1.jpg',
        remark: '2-6度冰箱保存3天',
        materials: `<strong>材料：</strong>
                    <br>A部分: 蒸熟香芋500克，紫薯粉1克
                    <br>B部分: 黄油30克，炼奶10克，椰子粉20克, 糖25克，淡奶油50克，所有材料用煮奶锅煮开(装芋泥的器血不能有水)。
                    <strong>制作方法：</strong>A部分切块上锅蒸热熟透，趁热加入开水100克用压泥棒压均匀，再加入B部分一起放入厨师机搅拌均匀。`,
        isCalculator: true,
        detailList: [
          { name: '蒸熟香芋',gram: '500',unit: '克' },
          { name: '紫薯粉',gram: '1',unit: '克' },
          { name: '黄油',gram: '30',unit: '克' },
          { name: '炼奶',gram: '10',unit: '克' },
          { name: '椰子粉',gram: '20',unit: '克' },
          { name: '糖',gram: '25',unit: '克' },
          { name: '淡奶油',gram: '50',unit: '克' },
          { name: '开水',gram: '100',unit: '克' },
        ],
      },
      {
        id: 6,
        name: '栗子',
        url: './image/1.jpg',
        remark: '电饭锅保温保存',
        materials: `<strong>材料：</strong>栗子100克，水200克，冰糖糖50克<br>
                    <strong>制作方法：</strong>栗子放水烧开，带上洗碗手套趁热拔掉外壳，所有材料放入压力锅压10分钟。当天卖不完的放了冰箱第二天需加热才能用，不然会夹生。`,
        isCalculator: true,
        detailList: [
          { name: '栗子',gram: '100',unit: '克' },
          { name: '水',gram: '200',unit: '克' },
          { name: '冰糖',gram: '50',unit: '克' },
        ],
      },
      {
        id: 7,
        name: '煮芋圆',
        url: './image/1.jpg',
        remark: '电饭锅保温保存',
        materials: `<strong>制作方法：</strong>水开后倒入芋圆，轻微搅拌一下，防止沾底，煮三分钟，过冷水后放入装好冰块加一点水搅拌口感Q弹，冰水倒掉，加入少许果糖浆拌均匀。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 8,
        name: '精修桃胶',
        url: './image/1.jpg',
        remark: '-2-1度冰箱保存10天',
        materials: `<strong>材料：</strong>桃胶200克，水1000克，石蜂糖60克, 冰糖60克, 灰枣2个<br>
                    <strong>制作方法：</strong>桃胶加入 2000 毫升水，提前一个晚上泡发好，泡发时间要达到 12 个小时，挑出多余的杂质。灰枣洗干净、去核。放入高压锅压制 15 分钟后，去掉阀门放气，马上打开盖子
                    <br><strong>注：</strong>家用压力锅和商用压力锅的压力不同，压制时间是不同的。`,
        isCalculator: true,
        detailList: [
          { name: '桃胶',gram: '200',unit: '克' },
          { name: '水',gram: '1000',unit: '克' },
          { name: '石蜂糖',gram: '60',unit: '克' },
          { name: '冰糖',gram: '60',unit: '克' },
          { name: '灰枣',gram: '2',unit: '个' },
        ],
      },
      {
        id: 9,
        name: '仙草冻',
        url: './image/1.jpg',
        remark: '2-5度冰箱保存5天',
        materials: `<strong>材料：</strong>仙草干40克，大米5克，水2200克，食用碱2克。<br>
                    <strong>制作方法：</strong>仙草泡10分钟清洗干净，三样配料放入锅中泡半个小时，用电磁炉开大火把水煮开，再调到800瓦煮40分钟，用勺子打点汤汁，手戳汤汁，接近黏手，(类似洗洁精手感)汤汁就熬好了，过滤二次汤汁，
                    过滤汤汁称重慢慢加入23克黑凉粉(凉粉提前用100克水稀释)。煮沸腾，倒入铁盘上放凉凝固切小块备用。`,
        isCalculator: true,
        detailList: [
          { name: '仙草干',gram: '40',unit: '克' },
          { name: '大米',gram: '5',unit: '克' },
          { name: '水',gram: '2200',unit: '克' },
          { name: '食用碱',gram: '2',unit: '克' },
          { name: '黑凉粉',gram: '23',unit: '克' },
        ],
      },
      {
        id: 10,
        name: '茉莉桂花冻',
        url: './image/1.jpg',
        remark: '2-6度冰箱保存3天',
        materials: `<strong>材料：</strong>水3500克，康师傅茉莉花茶1升1瓶，加入3勺桂花酱(约220克)，烧开直接倒入100克白凉粉，烧开后直接过滤后倒入铁盘，加入少许桂花干点缀，放凉切块。`,
        isCalculator: true,
        detailList: [
          { name: '水',gram: '3500',unit: '克' },
          { name: '茉莉花茶',gram: '1000',unit: '克' },
          { name: '桂花酱',gram: '220',unit: '克' },
          { name: '白凉粉',gram: '100',unit: '克' },
        ],
      },
      {
        id: 11,
        name: '白果',
        url: './image/1.jpg',
        remark: '电饭锅保温保存',
        materials: `白果100克清洗一遍，加入200克水煮沸疼后剥皮，对边切开去心，放清水泡2天，5个小时换一次水。卖不完的放了冰箱第二天要加热才能用,后面吃还要者沸
                    <br><strong>注：</strong>放白果三倍的水,100克冰糖`,
        isCalculator: true,
        detailList: [
          { name: '白果',gram: '100',unit: '克' },
          { name: '水',gram: '300',unit: '克' },
          { name: '冰糖',gram: '100',unit: '克' },
        ],
      },
      {
        id: 12,
        name: '黑糯米',
        url: './image/1.jpg',
        remark: '',
        materials: `200 克黑糯米、60 克白糯米，水 750 克，椰子油 5 克，米清洗干净，加入所有食材入高压锅压 40 分钟，出锅后加入白糖 80 克搅拌均匀。
                    <br><strong>注：</strong>椰子油没有可以放黄油,煮好了再放糖和椰子油（0-5 度保存 2 天）时间久了米会发硬，最好当天卖完。`,
        isCalculator: true,
        detailList: [
          { name: '黑糯米',gram: '200',unit: '克' },
          { name: '白糯米',gram: '60',unit: '克' },
          { name: '水',gram: '750',unit: '克' },
          { name: '椰子油',gram: '5',unit: '克' },
          { name: '白糖',gram: '80',unit: '克' },
        ],
      },
    ],
  },
  {
    title: '新中式奶基底',
    list: [
      {
        id: 1,
        name: '龙眼冰底',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>牛奶100克，淡奶油20克，厚椰乳100克，龙眼肉500克。<br>
                    <strong>制作方法：</strong>取300克龙眼和牛奶料理机打均匀，剩下的200克龙眼肉放一起不锈钢盒子放冰箱急冻过夜，2个小时拿出来搅拌一次成冰沙为主。先牛奶和龙眼打碎再放其他`,
        isCalculator: true,
        detailList: [
          { name: '牛奶',gram: '100',unit: '克' },
          { name: '淡奶油',gram: '20',unit: '克' },
          { name: '厚椰乳',gram: '100',unit: '克' },
          { name: '龙眼肉',gram: '500',unit: '克' },
        ],
      },
      {
        id: 2,
        name: '白雪冰底',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>牛奶165克，安佳奶油50克，糖浆20克，厚椰乳/(冷冻椰乳)30克，冰勃朗20克，椰浆30克<br>
                    <strong>制作方法：</strong>将所有的原材料倒在不锈钢盘中称好，然后搅拌均匀，冰冻2小时后搅拌一次，`,
        isCalculator: true,
        detailList: [
          { name: '牛奶',gram: '165',unit: '克' },
          { name: '安佳奶油',gram: '50',unit: '克' },
          { name: '糖浆',gram: '20',unit: '克' },
          { name: '厚椰乳/(冷冻椰乳)',gram: '30',unit: '克' },
          { name: '冰勃朗',gram: '20',unit: '克' },
          { name: '椰浆',gram: '30',unit: '克' },
        ],
      },
      {
        id: 3,
        name: '椰奶底',
        url: './image/1.jpg',
        remark: '0-5度冰箱保存3天',
        materials: `<strong>材料：</strong>300克糖水，200克椰浆，100克椰乳，300克牛奶，糖15克，炼奶10克，冰勃朗20克(可不加)，椰子粉20克，搅拌均匀`,
        isCalculator: true,
        detailList: [
          { name: '糖水',gram: '300',unit: '克' },
          { name: '椰浆',gram: '200',unit: '克' },
          { name: '牛奶',gram: '300',unit: '克' },
          { name: '糖',gram: '15',unit: '克' },
          { name: '炼奶',gram: '10',unit: '克' },
          { name: '冰勃朗',gram: '20',unit: '克' },
          { name: '椰子粉',gram: '20',unit: '克' },
        ],
      },
      {
        id: 4,
        name: '椰乳基底',
        url: './image/1.jpg',
        remark: '0-5度冰箱保存3天',
        materials: `<strong>材料：</strong>产地椰乳250克，欧可生椰乳250克，高达椰浆200克`,
        isCalculator: true,
        detailList: [
          { name: '产地椰乳',gram: '250',unit: '克' },
          { name: '欧可生椰乳',gram: '250',unit: '克' },
          { name: '高达椰浆',gram: '200',unit: '克' },
        ],
      },
      {
        id: 5,
        name: '鲜牛奶底',
        url: './image/1.jpg',
        remark: '0-5度冰箱保存2天',
        materials: `<strong>材料：</strong>吃甘蔗的水牛奶和鲜奶比列:500克:300克, 二者混合一起加入30克糖浆和50克炼奶增香(可以用朝日唯品水牛奶代替绢珊奶都可以，绢珊奶成本高一些)`,
        isCalculator: true,
        detailList: [
          { name: '吃甘蔗的水牛奶',gram: '500',unit: '克' },
          { name: '鲜奶',gram: '300',unit: '克' },
          { name: '糖浆',gram: '30',unit: '克' },
          { name: '炼奶',gram: '50',unit: '克' },
        ],
      },
      {
        id: 6,
        name: '米麻薯',
        url: './image/1.jpg',
        remark: '常温保存3天',
        materials: `<strong>材料：</strong>10克白糯米泡1小时，加入50克水水蒸熟。200克鲜奶，奶咖25克，5克糯米粉，25克砂糖，22克木薯淀粉，10克生糯米洗净(觉得太浓稠可以减2克)。
        混合打碎至无大粒(破壁机果蔬汁模式150秒)混合浆过筛。
        275克麻薯浆, 60克淡奶油，10克蒸熟的糯米饭，一起搅拌均匀，开中火搅拌用力打搅成糊状, 后加黄油20克再打到拉丝状态
        <br>
        米麻薯可用冰淇淋球勺挖出使用，可搭配冷饮或者冰品食用`,
        isCalculator: true,
        detailList: [
          { name: '白糯米',gram: '10',unit: '克' },
          { name: '水',gram: '50',unit: '克' },
          { name: '鲜奶',gram: '200',unit: '克' },
          { name: '奶咖',gram: '20',unit: '克' },
          { name: '糯米粉',gram: '5',unit: '克' },
          { name: '木薯淀粉',gram: '22',unit: '克' },
          { name: '生糯米',gram: '10',unit: '克' },
          { name: '麻薯浆',gram: '275',unit: '克' },
          { name: '淡奶油',gram: '60',unit: '克' },
        ],
      },
      {
        id: 7,
        name: '榴莲系列基础奶底',
        url: './image/1.jpg',
        remark: '0-5度冰箱保存2天',
        materials: `<strong>材料：</strong>榴莲肉60克，淡奶油20克，奶咖15克，奶100克，生椰乳70克，糖5克，全部材料一起加入料理机打均匀(45秒)。`,
        isCalculator: true,
        detailList: [
          { name: '榴莲肉',gram: '60',unit: '克' },
          { name: '淡奶油',gram: '20',unit: '克' },
          { name: '奶',gram: '100',unit: '克' },
          { name: '奶咖',gram: '15',unit: '克' },
          { name: '生椰乳',gram: '70',unit: '克' },
          { name: '糖',gram: '5',unit: '克' }
        ],
      },
      {
        id: 8,
        name: '榴莲系列基础奶底-榴莲奶油',
        url: './image/1.jpg',
        remark: '0-5度冰箱保存2天',
        materials: `<strong>材料：</strong>奶油150克，8克糖, 榴莲肉15克，料理棒打粘稠，注意不要打太久会油水分离。注:打好后装入裱花袋冷藏。`,
        isCalculator: true,
        detailList: [
          { name: '榴莲肉',gram: '15',unit: '克' },
          { name: '奶油',gram: '150',unit: '克' },
          { name: '糖',gram: '8',unit: '克' }
        ],
      },
      {
        id: 9,
        name: '榴莲系列基础奶底-河粉皮',
        url: './image/1.jpg',
        remark: '-2-2度冰箱保存3天',
        materials: `<strong>材料：</strong>牛奶50克，水250克，白糖25克，椰浆75克，晶冻粉10克。全部搅拌均匀慢火加热沸腾后过筛，一勺的量大概100克左右放入碟子摊凉。`,
        isCalculator: true,
        detailList: [
          { name: '牛奶',gram: '50',unit: '克' },
          { name: '水',gram: '250',unit: '克' },
          { name: '白糖',gram: '25',unit: '克' }
        ],
      },
    ],
  },
  {
    title: '新中式甜品',
    list: [
      {
        id: 1,
        name: '榴莲芒返',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>器皿380毫升，西米3勺，榴莲奶挤2勺，芒果1勺，榴莲球1勺(勺子容量50克1勺)少许椰乳<br>
                    基础底学会就会可以任意搭配不同的产品制作。例如，榴莲捞河，榴莲甘露，榴莲椰子冻，榴莲紫米露芒果黑糯米榴莲捞，榴莲沙冰等。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 2,
        name: '杨枝甘露',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>芒果肉250克，冰块80克，椰子水125克，椰乳50克，糖15克，全部放入料理机搅打均匀。<br>
                    (一定选熟透的芒果榨汁)加入2勺西米，2勺芒果肉，少许金柚点缀<br>
                    杨枝甘露在原有的基础上加入河粉皮和小丸子即可。<br>
                    出餐标准:器皿350-400毫升，西米3勺，芒果酱和河粉皮8条，柚子点缀，淋上2圈椰浆`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 3,
        name: '玫瑰银耳桃胶',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>大马士革玫瑰花2朵，平阴玫瑰1朵。银耳200克，水1200克，石蜂糖30克，冰糖50克<br>。
                    <strong>制作方法：</strong>玫瑰花去掉底部的根部，放入煲汤袋子，所有食材加入高压锅压制15分钟。<br>
                    出餐标准:器皿350-400毫升<br>
                    桃胶2勺，银耳汤3勺，上面点缀少许大马士革玫瑰花瓣。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 4,
        name: '酒酿米麻薯蛋奶',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>鲜奶220克，蛋液80克，酒酿1茶勺，麻薯1勺，桂花少许。<br>
                    <strong>制作方法：</strong>
                    煮的时候不能离人，慢慢搅拌有点粘稠状态关火即可!火候要很控制好，煮久了就变成豆腐渣。卖相口感都不好。奶糊追求口感就是“口甜舌滑”的理念!出餐标准:器皿250-300毫升，碗中加入一勺麻薯，少许桂花点缀。
                    凤凰蛋奶是基础款，凤凰乃至百鸟之王，据称是由鸡演变而来，凤凰蛋奶就是用新鲜的水牛奶和鸡蛋做成的奶糊。然后在它的基础上加入各种小料就呈现不同的款式。<br>
                    <strong>主要食材：</strong>水牛奶底，鸡蛋;器具:铜锅、硅胶勺、卡式炉<br>
                    <strong>牛奶底：</strong>水牛奶500克，糖30克煮沸到80度<br>
                    硅胶勺子80克一勺，三勺奶重量大基本控制在220左右，一勺全蛋鸡蛋液(七八分满)。煮的时候不能离人，慢慢搅拌有点粘稠状态关火即可!器皿300毫升的碗。火候要很控制好，煮久了就变成豆腐渣。卖相口感都不好。奶糊追求口感就是“口甜舌滑”的理念!<br>
                    注:炒奶糊全蛋奶可出9分熟，外卖出八分熟，有添加的则可直接出八分熟的。餐具要提前备好，快速出餐<br>
                    市场比较受欢迎的奶糊种类可以参考一下:<br>
                    1.开心果蛋奶;2.拉丝米麻薯酒酿蛋奶糊;3.椰汁蛋奶;4.麦片蛋奶;5.咖啡蛋奶;6.香芋蛋奶;7.杏仁蛋奶;8.芝麻蛋奶;9.抹茶蛋奶;10.可可蛋奶`,
        isCalculator: false,
        detailList: [],
      },
      
      {
        id: 5,
        name: '绢珊大满贯',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>出餐标准: </strong>碗500毫升，芋圆12粒，莲子12粒，桃胶1勺，草冻10块，红豆一勺，鲜奶100毫升。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 6,
        name: '龙眼马蹄爽',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>马蹄280克，龙眼100克，水1500克，冰糖60克，马蹄粉37克。(如果马蹄不甜的需要加到160克黄冰糖)。<br>
                    <strong>制作方法：</strong><br>
                    A：先把250克马蹄切碎备用，30克切片备用,龙眼肉100克加入500克水料理机打碎备用<br>
                    B：马蹄粉加入80克冷水搅拌均匀备用<br>
                    C：锅中加入1000克水加入糖烧开, 加入A部分马蹄碎和B部份龙眼大火烧开转小火煮2分钟，慢慢倒入C部分即可。<br>
                    <strong>出餐标准: </strong>器皿350-400毫升。龙眼去核放入冰块冰镇出餐备用，6个龙眼加椰乳点缀出餐。<br>
                    <strong>注：</strong>龙眼打碎再加水,马蹄粉最后放`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 7,
        name: '米麻薯莲子榴莲捞奶',
        url: './image/1.jpg',
        remark: '',
        materials: `榴莲奶5分满，加入一勺米麻薯，一勺莲子，西米龙珠一勺，撒上一点椰子碎。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 8,
        name: '椰乳桂花茉莉大满贯',
        url: './image/1.jpg',
        remark: '',
        materials: `器皿容量:500毫升，桂花冻2勺，一勺红豆，莲子8粒，芋圆10粒，倒入椰奶100毫升，椰子片点缀。`,
        isCalculator: false,
        detailList: [],
      },
    ],
  },
  {
    title: '闽南甜汤小料',
    list: [
      {
        id: 1,
        name: '鲜百合',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>新鲜百合洗干净，50克百合，清水300克，冰糖15克。`,
        isCalculator: true,
        detailList: [
          { name: '清水',gram: '300',unit: '克' },
          { name: '百合',gram: '50',unit: '克' },
          { name: '冰糖',gram: '15',unit: '克' },
        ],
      },
      {
        id: 2,
        name: '花生仁',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>花生50克，加入少许水煮开就行.不要泡水, 去掉皮，加入1000克水，红糖粉冰糖各20克，上气后压20分钟。`,
        isCalculator: true,
        detailList: [
          { name: '清水',gram: '1000',unit: '克' },
          { name: '花生',gram: '50',unit: '克' },
          { name: '红糖粉',gram: '20',unit: '克' },
          { name: '冰糖',gram: '20',unit: '克' },
        ],
      },
      {
        id: 3,
        name: '蜜木薯',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>木薯500克，水是1500克，冰糖80克`,
        isCalculator: true,
        detailList: [
          { name: '水',gram: '1500',unit: '克' },
          { name: '木薯',gram: '50',unit: '克' },
          { name: '冰糖',gram: '80',unit: '克' },
        ],
      },
      {
        id: 4,
        name: '蜜莲藕',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>莲藕500克，红糖粉60克，冰糖50克，麦芽糖20克，水850克`,
        isCalculator: true,
        detailList: [
          { name: '水',gram: '850',unit: '克' },
          { name: '莲藕',gram: '500',unit: '克' },
          { name: '红糖粉',gram: '60',unit: '克' },
          { name: '冰糖',gram: '50',unit: '克' },
          { name: '麦芽糖',gram: '20',unit: '克' },
        ],
      },
      {
        id: 5,
        name: '糯薏米',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>薏米50克，冰糖25克。水750克，高压锅上汽后压制20分钟。`,
        isCalculator: true,
        detailList: [
          { name: '水',gram: '750',unit: '克' },
          { name: '薏米',gram: '50',unit: '克' },
          { name: '冰糖',gram: '25',unit: '克' },
        ],
      },
      {
        id: 6,
        name: '蜜绿豆',
        url: './image/1.jpg',
        remark: '放冷藏冰箱保质3天',
        materials: `<strong>材料：</strong>红豆200克，水600克，糖70克将所有材料倒入高压锅压制20分钟即可,时间到自己拔气。`,
        isCalculator: true,
        detailList: [
          { name: '水',gram: '600',unit: '克' },
          { name: '红豆',gram: '200',unit: '克' },
          { name: '糖',gram: '70',unit: '克' },
        ],
      },
      {
        id: 7,
        name: '牛奶麻薯',
        url: './image/1.jpg',
        remark: '常温保存',
        materials: `<strong>材料：</strong>牛奶250克，奶油50克, 白砂糖10克, 一起搅拌均匀, 开中火搅拌用力打，后加12克黄油再打到拉丝状态。
                  <br><strong>注意：</strong>全部融化再开火`,
        isCalculator: true,
        detailList: [
          { name: '牛奶',gram: '250',unit: '克' },
          { name: '奶油',gram: '50',unit: '克' },
          { name: '白砂糖',gram: '10',unit: '克' },
          { name: '黄油',gram: '12',unit: '克' },
        ],
      },
      {
        id: 8,
        name: '姜薯',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>姜薯, 先把水烧开，用刨皮刀刨成片状加入开水中煮到卷起来即可。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 9,
        name: '海石花',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>海石花25克，装入煲汤袋，加入清水1500克, 一勺白醋去腥，加入一小块冰糖去除咸味，盖上盖子煮开到上汽，再转小火煮40分钟。放凉备用
                    <br><strong>注意：</strong>先把海石花清洗干净,泡个2分钟, 海石花煮好就要过滤`,
        isCalculator: true,
        detailList: [
          { name: '百合',gram: '50',unit: '克' },
          { name: '清水',gram: '300',unit: '克' },
          { name: '冰糖',gram: '15',unit: '克' },
        ],
      },
    ],
  },
  {
    title: '闽南甜汤',
    list: [
      {
        id: 1,
        name: '腐竹薏米窝蛋糖水',
        url: './image/1.jpg',
        remark: '0-5度冰箱保存3天',
        materials: `<strong>材料：</strong>桂平腐竹皮4片，水2500克，牛奶150克，燕麦奶200克，无糖豆浆粉120克，黄冰糖120克
                    <br><strong>制作方法：</strong>腐竹皮:清水泡10分钟，再过2次水备用，锅里倒入水烧开后加入豆浆粉，放入发泡好的腐竹皮，用勺子搅拌到开，容易糊底，小火熬30分钟后加入糖，牛奶，燕麦奶即可。
                    出餐标准:器皿350-400毫升，薏米1勺，窝蛋一个，白果12粒，汤汁3勺，腐皮少许。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 2,
        name: '银耳汤',
        url: './image/1.jpg',
        remark: '0-5度冰箱保存2天',
        materials: `<strong>材料：</strong>新鲜银耳200克，马蹄3个，水2000克，石蜂糖60克，黄冰糖80克。
                    <br><strong>制作方法：</strong>新鲜雪耳泡洗干净，剪掉底部，剪碎沥干水份，压力锅倒入所有材料压制15分钟，自动排气开盖后加入1000克热水搅拌均匀。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 3,
        name: '四果汤底',
        url: './image/1.jpg',
        remark: '0-5度冰箱保存4天',
        materials: `水800克，白糖100克，金沙糖100克，黄冰糖100克，全部材料煮沸腾即可加入菠萝50克和蜂蜜50克。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 4,
        name: '冬瓜茶底',
        url: './image/1.jpg',
        remark: '0-5度冰箱保存4天',
        materials: `冬瓜500克切小粒，黄冰糖15克，冬瓜糖120克压碎，红糖粉15克，全部加一起搅拌腌制3个小时，加入700毫升清水煮到冬瓜软烂。过滤出来加入1000克冰块即可。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 5,
        name: '古田银耳烤梨',
        url: './image/1.jpg',
        remark: '-2至5度冰箱保存4天',
        materials: `<strong>品质选砀山梨或贡梨，特点:清甜多汁软糯</strong><br>
                    梨去皮挖梨芯去核，头尾削平(卖相好看)清洗干净<br>
                    <strong>比例:</strong><br>梨5个，水2500克，烧开后加入冰糖80克，红糖粉1勺，大火烧转小火1个小时，加入碎鲜雪耳(约1朵)和秋梨膏15克，再煮20~30分钟，具体时间雪耳煮至出胶，
                    关火后加入红枣片和枸杞盖上盖子焖20分钟即可。如果需要做到烤制部分可以用500毫升的陶瓷器皿装入梨子放入烤箱烤20分钟，出来颜色加深效果好。`,
        isCalculator: false,
        detailList: [],
      },
    ],
  },
  {
    title: '韩国雪花冰',
    list: [
      {
        id: 1,
        name: '雪花冰底',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>牛奶400克，粉30克，冰勃朗60克，生椰乳100克，炼乳60克，淡奶油60克，水150克，果糖30克
                    <br>抹茶冰底:在原基础的冰底550克上加入10克抹茶粉。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 2,
        name: '奶盖',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>奶油奶酪30g，砂糖12g，炼奶12g，牛奶50g，淡奶油90g，玫瑰盐适量
                    <br><strong>制作方法：</strong>除开淡奶油外其他材料放入干净量杯中(先单独打发奶油奶酪)，用料理棒打均匀放入冷藏备用，淡奶油单独打至裱花状，再跟备用的奶酪部分拌均匀即可。`,
        isCalculator: true,
        detailList: [
          { name: '奶油奶酪',gram: '30',unit: '克' },
          { name: '砂糖',gram: '12',unit: '克' },
          { name: '牛奶',gram: '50',unit: '克' },
          { name: '淡奶油',gram: '90',unit: '克' },
        ],
      },
      {
        id: 3,
        name: '万用奶浆',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>淡奶油25g，牛奶113g，炼奶20g
                    <br><strong>制作方法：</strong>所有材料一起用汤勺搅匀即可，冷藏可存2天`,
        isCalculator: true,
        detailList: [
          { name: '淡奶油',gram: '25',unit: '克' },
          { name: '牛奶',gram: '113',unit: '克' },
          { name: '炼奶',gram: '20',unit: '克' },
        ],
      },
      {
        id: 4,
        name: '杏仁片',
        url: './image/1.jpg',
        remark: '',
        materials: `烤箱上层180度，下层180度，烤箱烤12分钟。
                    <br>雪花冰装饰小料:脆波波，蛋卷碎，黄油脆片，杏仁片，西米龙珠，抹茶粉，巧克力粉，奥利奥碎，巧克力豆。
                    <br>1. 海盐奥利奥巧克力冰
                    <br>2. 海盐芝士水果冰
                    <br>3. 海盐抹茶雪球冰
                    <br>4. 海盐芒果冰`,
        isCalculator: false,
        detailList: [],
      },
    ],
  },
  {
    title: '手工冰淇淋',
    list: [
      {
        id: 1,
        name: '草莓雪葩',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>草莓250g,蓝莓100g,覆盆子100g,白砂糖45g,葡萄糖55g,聚葡萄糖22g,海藻糖50g,NH果胶2.5g,柠檬汁5g,伏特加10g,短链菊粉30g,水怡/麦芽糖浆50g,盐0.8g,稳定剂3g,水280g
                    <br><strong>制作方法：</strong>目标设计用水量和所有糖类，菊粉类，水怡类，粉类，吉利丁片等，先混合均质，再小火慢
                    煮或电磁炉定温到70度以上80度以内，稳定几分钟，(可以用蒸汽加热更快速稳定)，待冷却降至常温后冷藏0-4C，水基底液完成。<br><br>
                    厨房秤称重好目标水果用量去籽去核(可提前冷藏冷冻)，用十字刀头手均质机(料理棒)打成果泥，(水果不参与加热过程)再与之前制作的冷藏0-4C水
                    基底混合均质后用硅胶铲配合按压刮筛过筛(40-60目皆可)，如需要粗纤维和粗颗粒可不过筛，完成后均质冷藏至0-4C，雪芭基底完成，入冰淇淋机，
                    设置时间出品，雪芭制作时间随含糖总量和抗冻值变化可能会比gelato时间更长或更短。`,
        isCalculator: true,
        detailList: [
          { name: '草莓',gram: '250',unit: '克' },
          { name: '蓝莓',gram: '100',unit: '克' },
          { name: '覆盆子',gram: '100',unit: '克' },
          { name: '白砂糖',gram: '45',unit: '克' },
          { name: '葡萄糖',gram: '55',unit: '克' },
          { name: '聚葡萄糖',gram: '22',unit: '克' },
          { name: '海藻糖',gram: '50',unit: '克' },
          { name: 'NH果胶',gram: '2.5',unit: '克' },
          { name: '柠檬汁',gram: '5',unit: '克' },
          { name: '伏特加',gram: '10',unit: '克' },
          { name: '短链菊粉',gram: '30',unit: '克' },
          { name: '水怡/麦芽糖浆',gram: '50',unit: '克' },
          { name: '盐',gram: '0.8',unit: '克' },
          { name: '稳定剂',gram: '3',unit: '克' },
          { name: '水',gram: '280',unit: '克' },
        ],
      },
    ],
  },
  {
    title: '饮品系列',
    list: [
      {
        id: 1,
        name: '芭乐气泡水',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>30g芭乐糖浆，5g黄柠檬汁(莫林)，芭乐果肉两片，气泡水200ml
                    <br><strong>制作方法：</strong>雪克壶加冰，加芭乐糖浆，柠檬汁，一片芭乐切成果肉，倒入一点气泡水搅和均匀后倒入出品杯，芭乐片装饰即可`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 2,
        name: '葡萄气泡水',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>葡萄，葡萄汁(nfc)，柠檬糖(莫林)蔗糖，香水柠檬，气泡水
                    <br><strong>制作方法：</strong>雪克壶加入三颗葡萄加冰捶打，加入30ml葡萄汁，5g柠檬糖，10g蔗糖，搅拌均匀后倒入出品杯，气泡水补满，两片柠檬片装饰`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 3,
        name: '经典柠檬茶',
        url: './image/1.jpg',
        remark: '500毫升',
        materials: `<strong>材料：</strong>香水柠檬60g,红茶/茉莉绿茶/鸭屎香200g，果糖25g，柠檬汁(nfc)10g
                    <br><strong>制作方法：</strong>雪克壶中加入香水柠檬，少量冰块捶打出汁，倒入茶汤，果糖，冰到500ml,shake至气泡即可`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 4,
        name: '鲜橙柠檬茶',
        url: './image/1.jpg',
        remark: '500毫升',
        materials: `<strong>材料：</strong>新鲜橙子2片，橙子糖浆20g,香水柠檬2片，柠檬糖浆5g(莫林),茉莉绿茶200g，糖25g
                    <br><strong>制作方法：</strong>雪克壶中加入香水柠檬，香橙少量冰块捶打，倒入茶汤，果糖，冰补满500mlshake即可`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 5,
        name: '黄皮柠檬茶',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>黄皮果肉5颗(热水解冻)，黄皮糖浆20g，香水柠檬2片，茉莉绿茶200g，果糖25g
                    <br><strong>制作方法：</strong>雪克壶中加入黄皮，柠檬，少量冰块，捶打出汁;倒入茶汤糖浆，果糖，冰到500摇匀`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 6,
        name: '芭乐柠檬茶',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>香水柠檬2片，芭乐汁30ml,绿茶200ml，蔗糖5g，柠檬糖5g(莫林)，芭乐果肉2片
                    <br><strong>制作方法：</strong>柠檬两片，雪克杯加适量冰锤加芭乐汁绿茶糖冰摇晃均匀出`,
        isCalculator: false,
        detailList: [],
      },
    ],
  },
  {
    title: '小吃系列',
    list: [
      {
        id: 1,
        name: '酸辣凤爪',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>凤爪5斤的量，双鱼米醋1000克，白醋100克，冰糖碎250克，白糖75克，鸡精100克，蚝油
                    140克，鲜露20克，老抽70克，酱油140克，剁椒酱50克，柠檬1.5个，蒜头3整个，小米辣50克
                    <br><strong>制作方法：</strong>凤爪冷水下锅放入少许桂皮八角香叶，少许盐大火烧开煮10分钟，迅速过冷水，再放入冷水泡
                    半个小时，沥干水份加入以上的材料搅拌均匀。泡10个小时以上`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 2,
        name: '咖喱鱼蛋',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>鱼蛋250克，咖喱胆50克，水500克，椰浆30克。一勺诸侯将，一勺沙茶酱
                    <br><strong>制作方法：</strong>先把洋葱30克和蒜末15克加入少许油炒香后，把所有材料加一起煮沸。`,
        isCalculator: false,
        detailList: [],
      },
      {
        id: 3,
        name: '潮汕酸野',
        url: './image/1.jpg',
        remark: '',
        materials: `<strong>材料：</strong>甘草片:10-15克。咸梅/九制话梅:5-8颗。用咸梅汁更佳，能增加风味层次。
                    白砂糖/冰糖:100-150克。可以根据自己对甜度的喜好调整清水:700毫升。
                    玉米淀粉:6-10克。用来勾芡，让汁水更浓稠，能更好地挂在水果上。灵魂配料:南姜末(也叫沙姜粉)。一定要在甘草汁完全冷却后再加，是潮汕风味的灵魂
                    <br><strong>制作方法：</strong><br>1。煮甘草水:将甘草片清洗两遍，放入锅中，加入500毫升清水，大火煮开后转小火，盖上盖子慢熬20-30分钟，直到水色变深，闻到浓郁的甘草香。
                    <br>2。处理话梅:将咸梅或话梅用热水泡发，然后捞出，把梅肉切碎，梅核扔掉。泡梅的水也别浪费，留着备用。<br>3。加料熬煮:在煮好的甘草水中加入切碎的话梅肉，泡梅水和白砂糖搅拌至糖完全融化。
                    <br>4。勾芡:将玉米淀粉与少量凉白开(约30克)混合成淀粉水。转小火，将淀粉水缓缓倒入锅中，边倒边搅拌，防止结块，直到汤汁变得微微粘稠，透明即可关火。
                    选用新鲜的的水果洗干净切块加入甘草汁，撒上粉料即可。`,
                            isCalculator: false,
        detailList: [],
      }
    ],
  },
]
//当前数据
let currentlyDatail = {}
let demoGeneral_grid = {
  // 初始化事件
  bindEvent: function () {
    // 1. 分类切换
    $('#category_id').on('click', '.category-item', function () {
      $(this).addClass('active').siblings().removeClass('active')
      $('.goods-list').hide()
      // 对应分类显示
      demoGeneral_grid.initRightFn()
    })

    // 返回
    $('#balck_btn').on('click', function () {
      $(this).hide()
      $('#calculator_btn').hide()
      $('.container').show()
      $('.detail').hide()
      $('.title').text('糖水配方')
      $('#calcList2').html("")
      currentlyDatail = {} //清空当前数据
    })
    // 计算器
    $('#calculator_btn').on('click', function (e) {
      e.preventDefault()
      $('#modalOverlay').show()
      $('#bottomModal').addClass('show')
      demoGeneral_grid.calculatorFn(currentlyDatail)
    })

    // 关闭弹窗
    function closeModal() {
      $('#bottomModal').removeClass('show')
      setTimeout(() => {
        $('#modalOverlay').hide()
      }, 300) // 等待动画结束
    }
    $('#closeModal,#modalOverlay').on('click', closeModal)
  },
  init: function () {
    // 初始化左侧数据
    demoGeneral_grid.initLeftFn()
    // 初始化右侧数据
    demoGeneral_grid.initRightFn()
  },
  // 初始化左侧数据
  initLeftFn: function () {
    $('#category_id').empty()
    let html = ''
    $.each(categoryList, function (index, item) {
      if (index == 0) {
        html += `<div class="category-item active" data-target="${item.target}" data-index="${index}">${item.title}</div>`
      } else {
        html += `<div class="category-item" data-target="${item.target}" data-index="${index}">${item.title}</div>`
      }
    })
    $('#category_id').html(html)
  },
  // 初始化右侧数据
  initRightFn: function () {
    let index = $('#category_id')
      .find('.category-item.active')
      .attr('data-index')
    $('#goods_wrap_id').empty()
    let html = ''
    html += `<div class="goods-list"><div class="goods-title">${categoryList[index].title}</div>`
    $.each(categoryList[index].list, function (index, item) {
      html += `<div class="goods-item" onclick="demoGeneral_grid.detailClick(this, ${demoGeneral_grid.escapeData(JSON.stringify(item))})">
                        <img src="${item.url}" class="goods-img" />
                        <div class="goods-info">
                          <div class="goods-name">${item.name}</div>
                          <div class="goods-desc">${item.remark ?? ''}</div>
                        </div>
                      </div>`
    })
    html += `</div>`
    $('#goods_wrap_id').html(html)
  },
  // 点击糖水详情
  detailClick: function (that, obj) {
    currentlyDatail = obj
    $('.container').hide()
    $('.detail').show()
    let names = $(that).find('.goods-name').text()
    $('.title').text(names)
    $('#balck_btn').show()
    if (obj.isCalculator) {
      $('#calculator_btn').show()
    }
    $('.detail').find('.title').text(obj.name)
    $('.detail')
      .find('.remark')
      .text(`${obj.remark ?? ''}`)
    $('.detail').find('p').html(obj.materials)
    $('.detail').find('img').attr('src', obj.url)
  },
  // 计算器
  calculatorFn: function (data) {
    if (data.detailList.length == 0) {
      $('#calcListNew').empty()
      $('#calcList1').empty()
      return false
    }
    let html1 = `<div class="scale-input">`
    html1 += `<label>`
    html1 += `<select id="changeSelect" class="custom-select">`
    data.detailList.map((item, index)=>{
      html1 += `<option value="${index}">${item.name}</option>`
    })
    html1 += `</select>
            </label>
            <input type="text" maxlength="4" onkeyup="this.value=this.value.replace(/\D/g, '')" class="custom-input" oninput="demoGeneral_grid.onInput(this, ${demoGeneral_grid.escapeData(JSON.stringify(data))})" value="" min="1" />
            克
          </div>`
    $('#calcListNew').html(html1)

    let html2 = ''
    $('#calcList1').empty()
    $.each(data.detailList, function (index, item) {
      html2 += `<div>
                      <label>${item.name}：</label>
                      <span >${item.gram} 克</span>
                    </div>`
    })
    $('#calcList1').html(html2)
  },
  // 计算
  onInput: function (that, data) {
    let value = $(that).val()
    let index = $("#changeSelect").val()
    let itemVal = data.detailList[index].gram
    let rate = value / itemVal
    let html3 = ''
    $('#calcList2').empty()
    $.each(data.detailList, function (index, item) {
      html3 += `<div>
                      <label>${item.name}：</label>
                      <span >${Math.ceil(item.gram * rate)} 克</span>
                    </div>`
    })
    $('#calcList2').html(html3)
  },
  /**
   * 转义特殊字符的工具方法
   * @param str 数据
   */
  escapeData: function (str) {
    if (!str) return ''
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
  },
}
$(function () {
  //绑定事件
  demoGeneral_grid.bindEvent()
  // 初始化方法
  demoGeneral_grid.init()
})
