// console.log(1111);


// 吸顶
$(function(){
  // console.log(($(window).width()-1100)/2);
  $(window).scroll(function(){
    // console.log($(window).scrollTop());
    if($(window).scrollTop() > 630){
      $('.SideBarLeft').css({
        top:$(window).scrollTop()- 630
      });
      $('.SideBarRight').css({
        top:$(window).scrollTop()- 630
      });
      
      /* if(($(window).width()-1100)/2 <=114){
        console.log(1111);
        $('.SideBarLeft').css({
          position: 'fixed',
          top:66,
          left:($(window).width()-1100)/2-114
        }); */
    }
    if($(window).scrollTop() < 630){
      $('.SideBarLeft').css({
        top:0
      });
      $('.SideBarRight').css({
        top:0
      }); 
    }
    if($(window).scrollTop() > 51){
      $('.SideBarHead').css({
        display: 'block'
      })
    }
    if($(window).scrollTop() < 51){
      $('.SideBarHead').css({
        display: 'none'
      })
    }
  })
  
})

// 回到顶部
$(function(){
  $('.SideBarRight>ul>li:last-child').click(function(){
    $('html').animate({
      scrollTop:0
    })
  })
})


//轮播图
$(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    //direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,
    effect : 'fade',

    autoplay: {
      delay: 3000,//1秒切换一次
    },
    // 如果需要分页器
    /* pagination: {
      el: '.swiper-pagination',
      clickable :true,
      bulletActiveClass: 'my-bullet-active',
    }, */
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })  
  //鼠标覆盖停止自动切换 
  mySwiper.el.onmouseover = function(){
    mySwiper.autoplay.stop();
  }
  
  //鼠标离开开始自动切换
  mySwiper.el.onmouseout = function(){
    mySwiper.autoplay.start();
  }

  
})






