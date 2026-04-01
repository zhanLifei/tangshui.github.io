$(function(){
  // ========== 配置 ==========
  const PWD = '178182';       // 6位数字密码
  const EXPIRE_HOUR = 2;     // 免登录时长（小时）
  const PWD_LENGTH = 6;      // 密码位数

  let input = '';

  // 生成键盘
  const keys = [1,2,3,4,5,6,7,8,9,'',0,'del'];
  let html = '';
  keys.forEach(k => {
    if(k === ''){
      html += '<div></div>';
    }else{
      let cls = k === 'del' ? 'key del' : 'key';
      let text = k === 'del' ? '删除' : k;
      html += `<button class="${cls}" data-key="${k}">${text}</button>`;
    }
  });
  $('#keyboard').html(html);

  // 点击按键
  $(document).on('click', '.key', function(){
    let val = $(this).data('key');
    if(val === 'del'){
      input = input.substring(0, input.length - 1);
    }else{
      if(input.length < PWD_LENGTH) input += val;
    }
    renderDot();
    checkPwd();
  });

  // 渲染密码圆点
  function renderDot(){
    $('.dot').each(function(i){
      $(this).toggleClass('active', i < input.length);
    });
  }

  // 校验密码
  function checkPwd(){
    if(input.length === PWD_LENGTH){
      if(input === PWD){
        $(".paswword-tisp").text('密码正确~').hide().fadeIn(300).css('color', '#279b2a')
        setTimeout(() => {
          setLoginStatus();
          showMain();
        }, 1000)
      }else{
        setTimeout(() => {
          input = '';
          renderDot();
          let arr = ['你再好好想想~', '你记性太差啦', '哎! 这都能忘记', '你不会是偷手机的人吧?', '密码错啦~', 'I have no words~', '你肯定不是手机本人!'];
          let randomItem = arr[Math.floor(Math.random() * arr.length)];
          $(".paswword-tisp").text(randomItem).hide().fadeIn(300)
        }, 200);
      }
    }
  }

  // 记录登录时间（2小时免登录）
  function setLoginStatus(){
    localStorage.setItem('login_time', Date.now());
  }

  // 检查是否在有效期内
  function checkLogin(){
    let t = localStorage.getItem('login_time');
    if(!t){
      $('#mask').removeClass('hide');
      return false
    };
    return Date.now() < Number(t) + EXPIRE_HOUR * 60 * 60 * 1000;
  }

  // 显示已登录页面
  function showMain(){
    $('#mask').addClass('hide');
  }

  // 页面加载时检查登录状态
  if(checkLogin()) showMain();
});