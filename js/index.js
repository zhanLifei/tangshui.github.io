// 全部数据
let categoryList = [
  {
    title: '传统糖水基底',
    target: 'hot',
    list: [
      {
        name: '白果',
        url: './image/1.jpg',
        remark: null,
        explain:
          '白果100克清洗一遍，加入200克水煮沸疼后剥皮，对边切开去心，放清水泡2天，5个小时换一次水:卖不完的放了冰箱第二天要加热才能用。',
        isCalculator: false,
        detailList: [],
      },
    ],
  },
  {
    title: '新中式奶基底',
    target: 'rice',
    list: [
      {
        name: '龙眼冰底',
        url: './image/2.jpg',
        remark: null,
        explain: '牛奶100克，淡奶油20克，厚椰乳100克，龙眼肉500克。',
        isCalculator: true,
        detailList: [
          {
            name: '龙眼肉',
            gram: '500',
          },
          {
            name: '牛奶',
            gram: '100',
          },
          {
            name: '淡奶油',
            gram: '20',
          },
          {
            name: '厚椰乳',
            gram: '100',
          },
        ],
      },
      {
        name: '椰乳基底',
        url: './image/3.jpg',
        remark: null,
        explain: '产地椰乳250克，欧可生椰乳250克，高达椰浆200克',
        isCalculator: true,
        detailList: [
          {
            name: '产地椰乳',
            gram: '250',
          },
          {
            name: '欧可生椰乳',
            gram: '250',
          },
          {
            name: '高达椰浆',
            gram: '200',
          },
        ],
      },
      {
        name: '双皮奶',
        url: './image/4.jpg',
        remark: '0-5度冰箱保存3天',
        explain:
          '300克糖水，200克椰浆，100克椰乳，300克牛奶，糖15克，炼奶10克，冰勃朗20克子粉20克，搅拌均匀。',
        isCalculator: true,
        detailList: [
          {
            name: '水',
            gram: '2500',
          },
          {
            name: '桃胶',
            gram: '500',
          },
          {
            name: '石蜂糖',
            gram: '150',
          },
          {
            name: '冰糖',
            gram: '150',
          },
        ],
      },
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
      let target = $(this).data('target')
      $('.goods-list').hide()
      // 对应分类显示
      $('#' + target).show()
      demoGeneral_grid.initRightFn()
    })

    // 返回
    $('#balck_btn').on('click', function () {
      $(this).hide()
      $('#calculator_btn').hide()
      $('.container').show()
      $('.detail').hide()
      $('.title').text('糖水配方')
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
    $('.detail').find('p').text(obj.explain)
    $('.detail').find('img').attr('src', obj.url)
  },
  // 计算器
  calculatorFn: function (data) {
    if (data.detailList.length == 0) {
      $('#calcListNew').empty()
      $('#calcList1').empty()
      return false
    }
    let html1 = `<div class="scale-input">
                      <label>${data.detailList[0].name}：</label>
                      <input type="number" onkeyup="this.value=this.value.replace(/\D/g, '')" oninput="demoGeneral_grid.onInput(this, 0, ${demoGeneral_grid.escapeData(JSON.stringify(data))})" value="${data.detailList[0].gram}" min="1" />
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
  onInput: function (that, index, data) {
    let value = $(that).val()
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
