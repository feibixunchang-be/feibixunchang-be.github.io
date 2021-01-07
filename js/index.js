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



//数据渲染
$(function(){
  $.ajax({
    url:"../data/index.json",
    type:"get",
    dateType:"json",
    success:function(json){
      var goodsStr = "";
      $.each(json,function(index,item){
        goodsStr +=`<h1 class="h1Reuse">
        <span>${item.h1ReuseFirst[0]}</span>
        <div class="h1_inner">
          <i>热搜词：</i>
          <a href="./list.html" class="h1_inner_red">${item.h1ReuseFirst[1]}</a>
          <a href="./list.html">${item.h1ReuseFirst[2]}</a>
          <a href="./list.html" class="h1_inner_red">${item.h1ReuseFirst[3]}</a>
          <a href="./list.html" class="h1_inner_red">${item.h1ReuseFirst[4]}</a>
        </div>
        <a href="./list.html" class="h1_a">更多好货></a>
      </h1>
      <div class="main_content_bottom clearfix">
        <div class="main_left_img ">
          <a href="./list.html">
          <img src="${item.left_imgadasasd[0]}" alt="">
          </a>
          <ul>
            <li><a href="#">${item.main_left_imgFirst[0]}</a></li>
            <li><a href="#">${item.main_left_imgFirst[1]}</a></li>
            <li><a href="#">${item.main_left_imgFirst[2]}</a></li>
            <li><a href="#">${item.main_left_imgFirst[3]}</a></li>
            <li><a href="#">${item.main_left_imgFirst[4]}</a></li>
            <li><a href="#">${item.main_left_imgFirst[5]}</a></li>
          </ul>
        </div>
        <ul class="main_content_inner">
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3First[0]}</h3>
              <p>${item.main_content_pFirst[0]}</p>
              <img src="${item.main_content_innerFirst[0]}" alt="">
            </a>
          </li>
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3First[1]}</h3>
              <p>${item.main_content_pFirst[1]}</p>
              <img src="${item.main_content_innerFirst[1]}" alt="">
            </a>
          </li>
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3First[2]}</h3>
              <p>${item.main_content_pFirst[2]}</p>
              <img src="${item.main_content_innerFirst[2]}" alt="">
            </a>
          </li>
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3First[3]}</h3>
              <p>${item.main_content_pFirst[3]}</p>
              <img src="${item.main_content_innerFirst[3]}" alt="">
            </a>
          </li>
        </ul>
        <div class="main_content_right">
          <h3>最新热卖</h3>
          <div class="main_content_right_inner">
            <img src="${item.main_content_imgFirst[0]}" alt="">
            <div>
              <h4>${item.main_content_h4First[0]}</h4>
              <p>${item.main_content_h4pFirst[0]}</p>
              <strong>${item.main_content_strFirst[0]}</strong><span><del>${item.main_content_delFirst[0]}</del></span>
            </div>
          </div>
          <div class="main_content_right_inner">
            <img src="${item.main_content_imgFirst[1]}" alt="">
            <div>
              <h4>${item.main_content_h4First[1]}</h4>
              <p>${item.main_content_h4pFirst[1]}</p>
              <strong>${item.main_content_strFirst[1]}</strong><span><del>${item.main_content_delFirst[1]}</del></span>
            </div>
          </div>
          <div class="main_content_right_inner">
            <img src="${item.main_content_imgFirst[2]}" alt="">
            <div>
              <h4>${item.main_content_h4First[2]}</h4>
              <p>${item.main_content_h4pFirst[2]}</p>
              <strong>${item.main_content_strFirst[2]}</strong><span><del>${item.main_content_delFirst[2]}</del></span>
            </div>
          </div>
          <div class="main_content_right_inner border_bom">
            <img src="${item.main_content_imgFirst[3]}" alt="">
            <div>
              <h4>${item.main_content_h4First[3]}</h4>
              <p>${item.main_content_h4pFirst[3]}</p>
              <strong>${item.main_content_strFirst[3]}</strong><span><del>${item.main_content_delFirst[3]}</del></span>
            </div>
          </div>
        </div>
      </div>
      <div class="main_content_hot">
        <h2>热卖品牌</h2>
        <div class="main_content_hotinner">
          <a href="./list.html"><img src="${item.main_content_hotinnerFirst[0]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerFirst[1]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerFirst[2]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerFirst[3]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerFirst[4]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
        </div>
      </div>`
      })
      $(".first").html(goodsStr)
    }
  })
})


$(function(){
  $.ajax({
    url:"../data/index.json",
    type:"get",
    dateType:"json",
    success:function(json){
      // console.log(json);
      var goodsStr = "";
      $.each(json,function(index,item){
        goodsStr +=`<h1 class="h1Reuse">
        <span>${item.h1ReuseMakeups[0]}</span>
        <div class="h1_inner">
          <i>热搜词：</i>
          <a href="./list.html" class="h1_inner_red">${item.h1ReuseMakeups[1]}</a>
          <a href="./list.html">${item.h1ReuseMakeups[2]}</a>
          <a href="./list.html" class="h1_inner_red">${item.h1ReuseMakeups[3]}</a>
          <a href="./list.html" class="h1_inner_red">${item.h1ReuseMakeups[4]}</a>
        </div>
        <a href="./list.html" class="h1_a">更多好货></a>
      </h1>
      <div class="main_content_bottom clearfix">
        <div class="main_left_img ">
          <a href="./list.html">
          <img src="${item.left_imgadasasd[1]}" alt="">
          </a>
          <ul>
            <li><a href="#">${item.main_left_imgMakeups[0]}</a></li>
            <li><a href="#">${item.main_left_imgMakeups[1]}</a></li>
            <li><a href="#">${item.main_left_imgMakeups[2]}</a></li>
            <li><a href="#">${item.main_left_imgMakeups[3]}</a></li>
            <li><a href="#">${item.main_left_imgMakeups[4]}</a></li>
            <li><a href="#">${item.main_left_imgMakeups[5]}</a></li>
          </ul>
        </div>
        <ul class="main_content_inner">
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3Makeups[0]}</h3>
              <p>${item.main_content_pMakeups[0]}</p>
              <img src="${item.main_content_innerMakeups[0]}" alt="">
            </a>
          </li>
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3Makeups[1]}</h3>
              <p>${item.main_content_pMakeups[1]}</p>
              <img src="${item.main_content_innerMakeups[1]}" alt="">
            </a>
          </li>
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3Makeups[2]}</h3>
              <p>${item.main_content_pMakeups[2]}</p>
              <img src="${item.main_content_innerMakeups[2]}" alt="">
            </a>
          </li>
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3Makeups[3]}</h3>
              <p>${item.main_content_pMakeups[3]}</p>
              <img src="${item.main_content_innerMakeups[3]}" alt="">
            </a>
          </li>
        </ul>
        <div class="main_content_right">
          <h3>最新热卖</h3>
          <div class="main_content_right_inner">
            <img src="${item.main_content_imgMakeups[0]}" alt="">
            <div>
              <h4>${item.main_content_h4Makeups[0]}</h4>
              <p>${item.main_content_h4pMakeups[0]}</p>
              <strong>${item.main_content_strMakeups[0]}</strong><span><del>${item.main_content_delMakeups[0]}</del></span>
            </div>
          </div>
          <div class="main_content_right_inner">
            <img src="${item.main_content_imgMakeups[1]}" alt="">
            <div>
              <h4>${item.main_content_h4Makeups[1]}</h4>
              <p>${item.main_content_h4pMakeups[1]}</p>
              <strong>${item.main_content_strMakeups[1]}</strong><span><del>${item.main_content_delMakeups[1]}</del></span>
            </div>
          </div>
          <div class="main_content_right_inner">
            <img src="${item.main_content_imgMakeups[2]}" alt="">
            <div>
              <h4>${item.main_content_h4Makeups[2]}</h4>
              <p>${item.main_content_h4pMakeups[2]}</p>
              <strong>${item.main_content_strMakeups[2]}</strong><span><del>${item.main_content_delMakeups[2]}</del></span>
            </div>
          </div>
          <div class="main_content_right_inner border_bom">
            <img src="${item.main_content_imgMakeups[3]}" alt="">
            <div>
              <h4>${item.main_content_h4Makeups[3]}</h4>
              <p>${item.main_content_h4pMakeups[3]}</p>
              <strong>${item.main_content_strMakeups[3]}</strong><span><del>${item.main_content_delMakeups[3]}</del></span>
            </div>
          </div>
        </div>
      </div>
      <div class="main_content_hot">
        <h2>热卖品牌</h2>
        <div class="main_content_hotinner">
          <a href="./list.html"><img src="${item.main_content_hotinnerMakeups[0]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerMakeups[1]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerMakeups[2]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerMakeups[3]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerMakeups[4]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
        </div>
      </div>`
      })
      $(".Makeups").html(goodsStr)
    }
  })
})


$(function(){
  $.ajax({
    url:"../data/index.json",
    type:"get",
    dateType:"json",
    success:function(json){
      // console.log(json);
      var goodsStr = "";
      $.each(json,function(index,item){
        goodsStr +=`<h1 class="h1Reuse">
        <span>${item.h1ReuseClear[0]}</span>
        <div class="h1_inner">
          <i>热搜词：</i>
          <a href="./list.html" class="h1_inner_red">${item.h1ReuseClear[1]}</a>
          <a href="./list.html">${item.h1ReuseClear[2]}</a>
          <a href="./list.html" class="h1_inner_red">${item.h1ReuseClear[3]}</a>
          <a href="./list.html" class="h1_inner_red">${item.h1ReuseClear[4]}</a>
        </div>
        <a href="./list.html" class="h1_a">更多好货></a>
      </h1>
      <div class="main_content_bottom clearfix">
        <div class="main_left_img ">
          <a href="./list.html">
          <img src="${item.left_imgadasasd[2]}" alt="">

          </a>
          <ul>
            <li><a href="#">${item.main_left_imgClear[0]}</a></li>
            <li><a href="#">${item.main_left_imgClear[1]}</a></li>
            <li><a href="#">${item.main_left_imgClear[2]}</a></li>
            <li><a href="#">${item.main_left_imgClear[3]}</a></li>
            <li><a href="#">${item.main_left_imgClear[4]}</a></li>
            <li><a href="#">${item.main_left_imgClear[5]}</a></li>
          </ul>
        </div>
        <ul class="main_content_inner">
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3Clear[0]}</h3>
              <p>${item.main_content_pClear[0]}</p>
              <img src="${item.main_content_innerClear[0]}" alt="">
            </a>
          </li>
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3Clear[1]}</h3>
              <p>${item.main_content_pClear[1]}</p>
              <img src="${item.main_content_innerClear[1]}" alt="">
            </a>
          </li>
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3Clear[2]}</h3>
              <p>${item.main_content_pClear[2]}</p>
              <img src="${item.main_content_innerClear[2]}" alt="">
            </a>
          </li>
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3Clear[3]}</h3>
              <p>${item.main_content_pClear[3]}</p>
              <img src="${item.main_content_innerClear[3]}" alt="">
            </a>
          </li>
        </ul>
        <div class="main_content_right">
          <h3>最新热卖</h3>
          <div class="main_content_right_inner">
            <img src="${item.main_content_imgClear[0]}" alt="">
            <div>
              <h4>${item.main_content_h4Clear[0]}</h4>
              <p>${item.main_content_h4pClear[0]}</p>
              <strong>${item.main_content_strClear[0]}</strong><span><del>${item.main_content_delClear[0]}</del></span>
            </div>
          </div>
          <div class="main_content_right_inner">
            <img src="${item.main_content_imgClear[1]}" alt="">
            <div>
              <h4>${item.main_content_h4Clear[1]}</h4>
              <p>${item.main_content_h4pClear[1]}</p>
              <strong>${item.main_content_strClear[1]}</strong><span><del>${item.main_content_delClear[1]}</del></span>
            </div>
          </div>
          <div class="main_content_right_inner">
            <img src="${item.main_content_imgClear[2]}" alt="">
            <div>
              <h4>${item.main_content_h4Clear[2]}</h4>
              <p>${item.main_content_h4pClear[2]}</p>
              <strong>${item.main_content_strClear[2]}</strong><span><del>${item.main_content_delClear[2]}</del></span>
            </div>
          </div>
          <div class="main_content_right_inner border_bom">
            <img src="${item.main_content_imgClear[3]}" alt="">
            <div>
              <h4>${item.main_content_h4Clear[3]}</h4>
              <p>${item.main_content_h4pClear[3]}</p>
              <strong>${item.main_content_strClear[3]}</strong><span><del>${item.main_content_delClear[3]}</del></span>
            </div>
          </div>
        </div>
      </div>
      <div class="main_content_hot">
        <h2>热卖品牌</h2>
        <div class="main_content_hotinner">
          <a href="./list.html"><img src="${item.main_content_hotinnerClear[0]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerClear[1]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerClear[2]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerClear[3]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerClear[4]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
        </div>
      </div>`
      })
      $(".ReuseClear").html(goodsStr)

    }
  })
})

$(function(){
  $.ajax({
    url:"../data/index.json",
    type:"get",
    dateType:"json",
    success:function(json){
      // console.log(json);
      var goodsStr = "";
      $.each(json,function(index,item){
        goodsStr +=`<h1 class="h1Reuse">
        <span>${item.h1ReuseLuxury[0]}</span>
        <div class="h1_inner">
          <i>热搜词：</i>
          <a href="./list.html" class="h1_inner_red">${item.h1ReuseLuxury[1]}</a>
          <a href="./list.html">${item.h1ReuseLuxury[2]}</a>
          <a href="./list.html" class="h1_inner_red">${item.h1ReuseLuxury[3]}</a>
          <a href="./list.html" class="h1_inner_red">${item.h1ReuseLuxury[4]}</a>
        </div>
        <a href="./list.html" class="h1_a">更多好货></a>
      </h1>
      <div class="main_content_bottom clearfix">
        <div class="main_left_img ">
          <a href="./list.html">
            <img src="${item.left_imgadasasd[3]}" alt="">
          </a>
          <ul>
            <li><a href="#">${item.main_left_imgLuxury[0]}</a></li>
            <li><a href="#">${item.main_left_imgLuxury[1]}</a></li>
            <li><a href="#">${item.main_left_imgLuxury[2]}</a></li>
            <li><a href="#">${item.main_left_imgLuxury[3]}</a></li>
            <li><a href="#">${item.main_left_imgLuxury[4]}</a></li>
            <li><a href="#">${item.main_left_imgLuxury[5]}</a></li>
          </ul>
        </div>
        <ul class="main_content_inner">
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3Luxury[0]}</h3>
              <p>${item.main_content_pLuxury[0]}</p>
              <img src="${item.main_content_innerLuxury[0]}" alt="">
            </a>
          </li>
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3Luxury[1]}</h3>
              <p>${item.main_content_pLuxury[1]}</p>
              <img src="${item.main_content_innerLuxury[1]}" alt="">
            </a>
          </li>
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3Luxury[2]}</h3>
              <p>${item.main_content_pLuxury[2]}</p>
              <img src="${item.main_content_innerLuxury[2]}" alt="">
            </a>
          </li>
          <li>
            <a href="./list.html">
              <h3>${item.main_content_h3Luxury[3]}</h3>
              <p>${item.main_content_pLuxury[3]}</p>
              <img src="${item.main_content_innerLuxury[3]}" alt="">
            </a>
          </li>
        </ul>
        <div class="main_content_right">
          <h3>最新热卖</h3>
          <div class="main_content_right_inner">
            <img src="${item.main_content_imgLuxury[0]}" alt="">
            <div>
              <h4>${item.main_content_h4Luxury[0]}</h4>
              <p>${item.main_content_h4pLuxury[0]}</p>
              <strong>${item.main_content_strLuxury[0]}</strong><span><del>${item.main_content_delLuxury[0]}</del></span>
            </div>
          </div>
          <div class="main_content_right_inner">
            <img src="${item.main_content_imgLuxury[1]}" alt="">
            <div>
              <h4>${item.main_content_h4Luxury[1]}</h4>
              <p>${item.main_content_h4pLuxury[1]}</p>
              <strong>${item.main_content_strLuxury[1]}</strong><span><del>${item.main_content_delLuxury[1]}</del></span>
            </div>
          </div>
          <div class="main_content_right_inner">
            <img src="${item.main_content_imgLuxury[2]}" alt="">
            <div>
              <h4>${item.main_content_h4Luxury[2]}</h4>
              <p>${item.main_content_h4pLuxury[2]}</p>
              <strong>${item.main_content_strLuxury[2]}</strong><span><del>${item.main_content_delLuxury[2]}</del></span>
            </div>
          </div>
          <div class="main_content_right_inner border_bom">
            <img src="${item.main_content_imgLuxury[3]}" alt="">
            <div>
              <h4>${item.main_content_h4Luxury[3]}</h4>
              <p>${item.main_content_h4pLuxury[3]}</p>
              <strong>${item.main_content_strLuxury[3]}</strong><span><del>${item.main_content_delLuxury[3]}</del></span>
            </div>
          </div>
        </div>
      </div>
      <div class="main_content_hot">
        <h2>热卖品牌</h2>
        <div class="main_content_hotinner">
          <a href="./list.html"><img src="${item.main_content_hotinnerLuxury[0]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerLuxury[1]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerLuxury[2]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerLuxury[3]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
          <a href="./list.html"><img src="${item.main_content_hotinnerLuxury[4]}" alt=""><span class="iconfont icon-guanzhu"></span></a>
        </div>
      </div>`
      })
      $(".Luxury").html(goodsStr)
    }
  })
})
$(function(){
  $.ajax({
    url:"../data/index.json",
    type:"get",
    dateType:"json",
    success:function(json){
      var goodsStr = "";
      $.each(json,function(index,item){
        console.log(item.info);
        goodsStr +=`<h1 class="h1Reuse">
        <span>热门品牌</span>
        <div class="h1_inner">
          <i>全球精选，一网打尽</i>
        </div>
        <a href="#" class="h1_a">换一批></a>
      </h1>
      <div class="hotBrand_img">
        <div class="hotBrand_img_left">
          <img src="${item.info[8]}" alt="">
          <div>
            <h5>Kao 花王</h5>
            <p>日本高人气日化品牌</p>
          </div>
        </div>
        <ul class="hotBrand_img_right">
          <li>
            <img src="${item.info[0]}" alt="">
            <p>${item.infoinner[0]}</p>
            <strong>+关注</strong>
            <span>${item.infoNum[0]}人关注该品牌</span>
            <a href="#">进入品牌</a>
          </li>
          <li>
            <img src="${item.info[1]}" alt="">
            <p>${item.infoinner[1]}</p>
            <strong>+关注</strong>
            <span>${item.infoNum[1]}人关注该品牌</span>
            <a href="#">进入品牌</a>
          </li>
          <li>
            <img src="${item.info[2]}" alt="">
            <p>${item.infoinner[2]}</p>
            <strong>+关注</strong>
            <span>${item.infoNum[2]}人关注该品牌</span>
            <a href="#">进入品牌</a>
          </li>
          <li>
            <img src="${item.info[3]}" alt="">
            <p>${item.infoinner[3]}</p>
            <strong>+关注</strong>
            <span>${item.infoNum[3]}人关注该品牌</span>
            <a href="#">进入品牌</a>
          </li>
          <li>
            <img src="${item.info[4]}" alt="">
            <p>${item.infoinner[4]}</p>
            <strong>+关注</strong>
            <span>${item.infoNum[4]}人关注该品牌</span>
            <a href="#">进入品牌</a>
          </li>
          <li>
            <img src="${item.info[5]}" alt="">
            <p>${item.infoinner[5]}</p>
            <strong>+关注</strong>
            <span>${item.infoNum[5]}人关注该品牌</span>
            <a href="#">进入品牌</a>
          </li>
          <li>
            <img src="${item.info[6]}" alt="">
            <p>${item.infoinner[6]}</p>
            <strong>+关注</strong>
            <span>${item.infoNum[6]}人关注该品牌</span>
            <a href="#">进入品牌</a>
          </li>
          <li>
            <img src="${item.info[7]}" alt="">
            <p>${item.infoinner[7]}</p>
            <strong>+关注</strong>
            <span>${item.infoNum[7]}人关注该品牌</span>
            <a href="#">进入品牌</a>
          </li>
        </ul>
      </div>`
      })
      $(".pooHot").html(goodsStr)
    }
  })
})