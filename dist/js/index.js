"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// console.log(1111);
// 吸顶
$(function () {
  // console.log(($(window).width()-1100)/2);
  $(window).scroll(function () {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 630) {
      $('.SideBarLeft').css({
        top: $(window).scrollTop() - 630
      });
      $('.SideBarRight').css({
        top: $(window).scrollTop() - 630
      });
      /* if(($(window).width()-1100)/2 <=114){
        console.log(1111);
        $('.SideBarLeft').css({
          position: 'fixed',
          top:66,
          left:($(window).width()-1100)/2-114
        }); */
    }

    if ($(window).scrollTop() < 630) {
      $('.SideBarLeft').css({
        top: 0
      });
      $('.SideBarRight').css({
        top: 0
      });
    }

    if ($(window).scrollTop() > 51) {
      $('.SideBarHead').css({
        display: 'block'
      });
    }

    if ($(window).scrollTop() < 51) {
      $('.SideBarHead').css({
        display: 'none'
      });
    }
  });
}); // 回到顶部

$(function () {
  $('.SideBarRight>ul>li:last-child').click(function () {
    $('html').animate({
      scrollTop: 0
    });
  });
}); //轮播图

$(function () {
  var _Swiper;

  var mySwiper = new Swiper('.swiper-container', (_Swiper = {
    //direction: 'vertical', // 垂直切换选项
    loop: true,
    // 循环模式选项
    autoplay: true,
    effect: 'fade'
  }, _defineProperty(_Swiper, "autoplay", {
    delay: 3000 //1秒切换一次

  }), _defineProperty(_Swiper, "navigation", {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }), _defineProperty(_Swiper, "scrollbar", {
    el: '.swiper-scrollbar'
  }), _Swiper)); //鼠标覆盖停止自动切换 

  mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
  }; //鼠标离开开始自动切换


  mySwiper.el.onmouseout = function () {
    mySwiper.autoplay.start();
  };
}); //数据渲染

$(function () {
  $.ajax({
    url: "../data/index.json",
    type: "get",
    dateType: "json",
    success: function success(json) {
      var goodsStr = "";
      $.each(json, function (index, item) {
        goodsStr += "<h1 class=\"h1Reuse\">\n        <span>".concat(item.h1ReuseFirst[0], "</span>\n        <div class=\"h1_inner\">\n          <i>\u70ED\u641C\u8BCD\uFF1A</i>\n          <a href=\"./list.html\" class=\"h1_inner_red\">").concat(item.h1ReuseFirst[1], "</a>\n          <a href=\"./list.html\">").concat(item.h1ReuseFirst[2], "</a>\n          <a href=\"./list.html\" class=\"h1_inner_red\">").concat(item.h1ReuseFirst[3], "</a>\n          <a href=\"./list.html\" class=\"h1_inner_red\">").concat(item.h1ReuseFirst[4], "</a>\n        </div>\n        <a href=\"./list.html\" class=\"h1_a\">\u66F4\u591A\u597D\u8D27></a>\n      </h1>\n      <div class=\"main_content_bottom clearfix\">\n        <div class=\"main_left_img \">\n          <a href=\"./list.html\">\n          <img src=\"").concat(item.left_imgadasasd[0], "\" alt=\"\">\n          </a>\n          <ul>\n            <li><a href=\"#\">").concat(item.main_left_imgFirst[0], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgFirst[1], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgFirst[2], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgFirst[3], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgFirst[4], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgFirst[5], "</a></li>\n          </ul>\n        </div>\n        <ul class=\"main_content_inner\">\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3First[0], "</h3>\n              <p>").concat(item.main_content_pFirst[0], "</p>\n              <img src=\"").concat(item.main_content_innerFirst[0], "\" alt=\"\">\n            </a>\n          </li>\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3First[1], "</h3>\n              <p>").concat(item.main_content_pFirst[1], "</p>\n              <img src=\"").concat(item.main_content_innerFirst[1], "\" alt=\"\">\n            </a>\n          </li>\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3First[2], "</h3>\n              <p>").concat(item.main_content_pFirst[2], "</p>\n              <img src=\"").concat(item.main_content_innerFirst[2], "\" alt=\"\">\n            </a>\n          </li>\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3First[3], "</h3>\n              <p>").concat(item.main_content_pFirst[3], "</p>\n              <img src=\"").concat(item.main_content_innerFirst[3], "\" alt=\"\">\n            </a>\n          </li>\n        </ul>\n        <div class=\"main_content_right\">\n          <h3>\u6700\u65B0\u70ED\u5356</h3>\n          <div class=\"main_content_right_inner\">\n            <img src=\"").concat(item.main_content_imgFirst[0], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4First[0], "</h4>\n              <p>").concat(item.main_content_h4pFirst[0], "</p>\n              <strong>").concat(item.main_content_strFirst[0], "</strong><span><del>").concat(item.main_content_delFirst[0], "</del></span>\n            </div>\n          </div>\n          <div class=\"main_content_right_inner\">\n            <img src=\"").concat(item.main_content_imgFirst[1], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4First[1], "</h4>\n              <p>").concat(item.main_content_h4pFirst[1], "</p>\n              <strong>").concat(item.main_content_strFirst[1], "</strong><span><del>").concat(item.main_content_delFirst[1], "</del></span>\n            </div>\n          </div>\n          <div class=\"main_content_right_inner\">\n            <img src=\"").concat(item.main_content_imgFirst[2], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4First[2], "</h4>\n              <p>").concat(item.main_content_h4pFirst[2], "</p>\n              <strong>").concat(item.main_content_strFirst[2], "</strong><span><del>").concat(item.main_content_delFirst[2], "</del></span>\n            </div>\n          </div>\n          <div class=\"main_content_right_inner border_bom\">\n            <img src=\"").concat(item.main_content_imgFirst[3], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4First[3], "</h4>\n              <p>").concat(item.main_content_h4pFirst[3], "</p>\n              <strong>").concat(item.main_content_strFirst[3], "</strong><span><del>").concat(item.main_content_delFirst[3], "</del></span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"main_content_hot\">\n        <h2>\u70ED\u5356\u54C1\u724C</h2>\n        <div class=\"main_content_hotinner\">\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerFirst[0], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerFirst[1], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerFirst[2], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerFirst[3], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerFirst[4], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n        </div>\n      </div>");
      });
      $(".first").html(goodsStr);
    }
  });
});
$(function () {
  $.ajax({
    url: "../data/index.json",
    type: "get",
    dateType: "json",
    success: function success(json) {
      // console.log(json);
      var goodsStr = "";
      $.each(json, function (index, item) {
        goodsStr += "<h1 class=\"h1Reuse\">\n        <span>".concat(item.h1ReuseMakeups[0], "</span>\n        <div class=\"h1_inner\">\n          <i>\u70ED\u641C\u8BCD\uFF1A</i>\n          <a href=\"./list.html\" class=\"h1_inner_red\">").concat(item.h1ReuseMakeups[1], "</a>\n          <a href=\"./list.html\">").concat(item.h1ReuseMakeups[2], "</a>\n          <a href=\"./list.html\" class=\"h1_inner_red\">").concat(item.h1ReuseMakeups[3], "</a>\n          <a href=\"./list.html\" class=\"h1_inner_red\">").concat(item.h1ReuseMakeups[4], "</a>\n        </div>\n        <a href=\"./list.html\" class=\"h1_a\">\u66F4\u591A\u597D\u8D27></a>\n      </h1>\n      <div class=\"main_content_bottom clearfix\">\n        <div class=\"main_left_img \">\n          <a href=\"./list.html\">\n          <img src=\"").concat(item.left_imgadasasd[1], "\" alt=\"\">\n          </a>\n          <ul>\n            <li><a href=\"#\">").concat(item.main_left_imgMakeups[0], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgMakeups[1], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgMakeups[2], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgMakeups[3], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgMakeups[4], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgMakeups[5], "</a></li>\n          </ul>\n        </div>\n        <ul class=\"main_content_inner\">\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3Makeups[0], "</h3>\n              <p>").concat(item.main_content_pMakeups[0], "</p>\n              <img src=\"").concat(item.main_content_innerMakeups[0], "\" alt=\"\">\n            </a>\n          </li>\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3Makeups[1], "</h3>\n              <p>").concat(item.main_content_pMakeups[1], "</p>\n              <img src=\"").concat(item.main_content_innerMakeups[1], "\" alt=\"\">\n            </a>\n          </li>\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3Makeups[2], "</h3>\n              <p>").concat(item.main_content_pMakeups[2], "</p>\n              <img src=\"").concat(item.main_content_innerMakeups[2], "\" alt=\"\">\n            </a>\n          </li>\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3Makeups[3], "</h3>\n              <p>").concat(item.main_content_pMakeups[3], "</p>\n              <img src=\"").concat(item.main_content_innerMakeups[3], "\" alt=\"\">\n            </a>\n          </li>\n        </ul>\n        <div class=\"main_content_right\">\n          <h3>\u6700\u65B0\u70ED\u5356</h3>\n          <div class=\"main_content_right_inner\">\n            <img src=\"").concat(item.main_content_imgMakeups[0], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4Makeups[0], "</h4>\n              <p>").concat(item.main_content_h4pMakeups[0], "</p>\n              <strong>").concat(item.main_content_strMakeups[0], "</strong><span><del>").concat(item.main_content_delMakeups[0], "</del></span>\n            </div>\n          </div>\n          <div class=\"main_content_right_inner\">\n            <img src=\"").concat(item.main_content_imgMakeups[1], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4Makeups[1], "</h4>\n              <p>").concat(item.main_content_h4pMakeups[1], "</p>\n              <strong>").concat(item.main_content_strMakeups[1], "</strong><span><del>").concat(item.main_content_delMakeups[1], "</del></span>\n            </div>\n          </div>\n          <div class=\"main_content_right_inner\">\n            <img src=\"").concat(item.main_content_imgMakeups[2], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4Makeups[2], "</h4>\n              <p>").concat(item.main_content_h4pMakeups[2], "</p>\n              <strong>").concat(item.main_content_strMakeups[2], "</strong><span><del>").concat(item.main_content_delMakeups[2], "</del></span>\n            </div>\n          </div>\n          <div class=\"main_content_right_inner border_bom\">\n            <img src=\"").concat(item.main_content_imgMakeups[3], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4Makeups[3], "</h4>\n              <p>").concat(item.main_content_h4pMakeups[3], "</p>\n              <strong>").concat(item.main_content_strMakeups[3], "</strong><span><del>").concat(item.main_content_delMakeups[3], "</del></span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"main_content_hot\">\n        <h2>\u70ED\u5356\u54C1\u724C</h2>\n        <div class=\"main_content_hotinner\">\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerMakeups[0], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerMakeups[1], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerMakeups[2], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerMakeups[3], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerMakeups[4], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n        </div>\n      </div>");
      });
      $(".Makeups").html(goodsStr);
    }
  });
});
$(function () {
  $.ajax({
    url: "../data/index.json",
    type: "get",
    dateType: "json",
    success: function success(json) {
      // console.log(json);
      var goodsStr = "";
      $.each(json, function (index, item) {
        goodsStr += "<h1 class=\"h1Reuse\">\n        <span>".concat(item.h1ReuseClear[0], "</span>\n        <div class=\"h1_inner\">\n          <i>\u70ED\u641C\u8BCD\uFF1A</i>\n          <a href=\"./list.html\" class=\"h1_inner_red\">").concat(item.h1ReuseClear[1], "</a>\n          <a href=\"./list.html\">").concat(item.h1ReuseClear[2], "</a>\n          <a href=\"./list.html\" class=\"h1_inner_red\">").concat(item.h1ReuseClear[3], "</a>\n          <a href=\"./list.html\" class=\"h1_inner_red\">").concat(item.h1ReuseClear[4], "</a>\n        </div>\n        <a href=\"./list.html\" class=\"h1_a\">\u66F4\u591A\u597D\u8D27></a>\n      </h1>\n      <div class=\"main_content_bottom clearfix\">\n        <div class=\"main_left_img \">\n          <a href=\"./list.html\">\n          <img src=\"").concat(item.left_imgadasasd[2], "\" alt=\"\">\n\n          </a>\n          <ul>\n            <li><a href=\"#\">").concat(item.main_left_imgClear[0], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgClear[1], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgClear[2], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgClear[3], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgClear[4], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgClear[5], "</a></li>\n          </ul>\n        </div>\n        <ul class=\"main_content_inner\">\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3Clear[0], "</h3>\n              <p>").concat(item.main_content_pClear[0], "</p>\n              <img src=\"").concat(item.main_content_innerClear[0], "\" alt=\"\">\n            </a>\n          </li>\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3Clear[1], "</h3>\n              <p>").concat(item.main_content_pClear[1], "</p>\n              <img src=\"").concat(item.main_content_innerClear[1], "\" alt=\"\">\n            </a>\n          </li>\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3Clear[2], "</h3>\n              <p>").concat(item.main_content_pClear[2], "</p>\n              <img src=\"").concat(item.main_content_innerClear[2], "\" alt=\"\">\n            </a>\n          </li>\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3Clear[3], "</h3>\n              <p>").concat(item.main_content_pClear[3], "</p>\n              <img src=\"").concat(item.main_content_innerClear[3], "\" alt=\"\">\n            </a>\n          </li>\n        </ul>\n        <div class=\"main_content_right\">\n          <h3>\u6700\u65B0\u70ED\u5356</h3>\n          <div class=\"main_content_right_inner\">\n            <img src=\"").concat(item.main_content_imgClear[0], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4Clear[0], "</h4>\n              <p>").concat(item.main_content_h4pClear[0], "</p>\n              <strong>").concat(item.main_content_strClear[0], "</strong><span><del>").concat(item.main_content_delClear[0], "</del></span>\n            </div>\n          </div>\n          <div class=\"main_content_right_inner\">\n            <img src=\"").concat(item.main_content_imgClear[1], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4Clear[1], "</h4>\n              <p>").concat(item.main_content_h4pClear[1], "</p>\n              <strong>").concat(item.main_content_strClear[1], "</strong><span><del>").concat(item.main_content_delClear[1], "</del></span>\n            </div>\n          </div>\n          <div class=\"main_content_right_inner\">\n            <img src=\"").concat(item.main_content_imgClear[2], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4Clear[2], "</h4>\n              <p>").concat(item.main_content_h4pClear[2], "</p>\n              <strong>").concat(item.main_content_strClear[2], "</strong><span><del>").concat(item.main_content_delClear[2], "</del></span>\n            </div>\n          </div>\n          <div class=\"main_content_right_inner border_bom\">\n            <img src=\"").concat(item.main_content_imgClear[3], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4Clear[3], "</h4>\n              <p>").concat(item.main_content_h4pClear[3], "</p>\n              <strong>").concat(item.main_content_strClear[3], "</strong><span><del>").concat(item.main_content_delClear[3], "</del></span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"main_content_hot\">\n        <h2>\u70ED\u5356\u54C1\u724C</h2>\n        <div class=\"main_content_hotinner\">\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerClear[0], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerClear[1], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerClear[2], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerClear[3], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerClear[4], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n        </div>\n      </div>");
      });
      $(".ReuseClear").html(goodsStr);
    }
  });
});
$(function () {
  $.ajax({
    url: "../data/index.json",
    type: "get",
    dateType: "json",
    success: function success(json) {
      // console.log(json);
      var goodsStr = "";
      $.each(json, function (index, item) {
        goodsStr += "<h1 class=\"h1Reuse\">\n        <span>".concat(item.h1ReuseLuxury[0], "</span>\n        <div class=\"h1_inner\">\n          <i>\u70ED\u641C\u8BCD\uFF1A</i>\n          <a href=\"./list.html\" class=\"h1_inner_red\">").concat(item.h1ReuseLuxury[1], "</a>\n          <a href=\"./list.html\">").concat(item.h1ReuseLuxury[2], "</a>\n          <a href=\"./list.html\" class=\"h1_inner_red\">").concat(item.h1ReuseLuxury[3], "</a>\n          <a href=\"./list.html\" class=\"h1_inner_red\">").concat(item.h1ReuseLuxury[4], "</a>\n        </div>\n        <a href=\"./list.html\" class=\"h1_a\">\u66F4\u591A\u597D\u8D27></a>\n      </h1>\n      <div class=\"main_content_bottom clearfix\">\n        <div class=\"main_left_img \">\n          <a href=\"./list.html\">\n            <img src=\"").concat(item.left_imgadasasd[3], "\" alt=\"\">\n          </a>\n          <ul>\n            <li><a href=\"#\">").concat(item.main_left_imgLuxury[0], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgLuxury[1], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgLuxury[2], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgLuxury[3], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgLuxury[4], "</a></li>\n            <li><a href=\"#\">").concat(item.main_left_imgLuxury[5], "</a></li>\n          </ul>\n        </div>\n        <ul class=\"main_content_inner\">\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3Luxury[0], "</h3>\n              <p>").concat(item.main_content_pLuxury[0], "</p>\n              <img src=\"").concat(item.main_content_innerLuxury[0], "\" alt=\"\">\n            </a>\n          </li>\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3Luxury[1], "</h3>\n              <p>").concat(item.main_content_pLuxury[1], "</p>\n              <img src=\"").concat(item.main_content_innerLuxury[1], "\" alt=\"\">\n            </a>\n          </li>\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3Luxury[2], "</h3>\n              <p>").concat(item.main_content_pLuxury[2], "</p>\n              <img src=\"").concat(item.main_content_innerLuxury[2], "\" alt=\"\">\n            </a>\n          </li>\n          <li>\n            <a href=\"./list.html\">\n              <h3>").concat(item.main_content_h3Luxury[3], "</h3>\n              <p>").concat(item.main_content_pLuxury[3], "</p>\n              <img src=\"").concat(item.main_content_innerLuxury[3], "\" alt=\"\">\n            </a>\n          </li>\n        </ul>\n        <div class=\"main_content_right\">\n          <h3>\u6700\u65B0\u70ED\u5356</h3>\n          <div class=\"main_content_right_inner\">\n            <img src=\"").concat(item.main_content_imgLuxury[0], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4Luxury[0], "</h4>\n              <p>").concat(item.main_content_h4pLuxury[0], "</p>\n              <strong>").concat(item.main_content_strLuxury[0], "</strong><span><del>").concat(item.main_content_delLuxury[0], "</del></span>\n            </div>\n          </div>\n          <div class=\"main_content_right_inner\">\n            <img src=\"").concat(item.main_content_imgLuxury[1], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4Luxury[1], "</h4>\n              <p>").concat(item.main_content_h4pLuxury[1], "</p>\n              <strong>").concat(item.main_content_strLuxury[1], "</strong><span><del>").concat(item.main_content_delLuxury[1], "</del></span>\n            </div>\n          </div>\n          <div class=\"main_content_right_inner\">\n            <img src=\"").concat(item.main_content_imgLuxury[2], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4Luxury[2], "</h4>\n              <p>").concat(item.main_content_h4pLuxury[2], "</p>\n              <strong>").concat(item.main_content_strLuxury[2], "</strong><span><del>").concat(item.main_content_delLuxury[2], "</del></span>\n            </div>\n          </div>\n          <div class=\"main_content_right_inner border_bom\">\n            <img src=\"").concat(item.main_content_imgLuxury[3], "\" alt=\"\">\n            <div>\n              <h4>").concat(item.main_content_h4Luxury[3], "</h4>\n              <p>").concat(item.main_content_h4pLuxury[3], "</p>\n              <strong>").concat(item.main_content_strLuxury[3], "</strong><span><del>").concat(item.main_content_delLuxury[3], "</del></span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"main_content_hot\">\n        <h2>\u70ED\u5356\u54C1\u724C</h2>\n        <div class=\"main_content_hotinner\">\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerLuxury[0], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerLuxury[1], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerLuxury[2], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerLuxury[3], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n          <a href=\"./list.html\"><img src=\"").concat(item.main_content_hotinnerLuxury[4], "\" alt=\"\"><span class=\"iconfont icon-guanzhu\"></span></a>\n        </div>\n      </div>");
      });
      $(".Luxury").html(goodsStr);
    }
  });
});
$(function () {
  $.ajax({
    url: "../data/index.json",
    type: "get",
    dateType: "json",
    success: function success(json) {
      var goodsStr = "";
      $.each(json, function (index, item) {
        console.log(item.info);
        goodsStr += "<h1 class=\"h1Reuse\">\n        <span>\u70ED\u95E8\u54C1\u724C</span>\n        <div class=\"h1_inner\">\n          <i>\u5168\u7403\u7CBE\u9009\uFF0C\u4E00\u7F51\u6253\u5C3D</i>\n        </div>\n        <a href=\"#\" class=\"h1_a\">\u6362\u4E00\u6279></a>\n      </h1>\n      <div class=\"hotBrand_img\">\n        <div class=\"hotBrand_img_left\">\n          <img src=\"".concat(item.info[8], "\" alt=\"\">\n          <div>\n            <h5>Kao \u82B1\u738B</h5>\n            <p>\u65E5\u672C\u9AD8\u4EBA\u6C14\u65E5\u5316\u54C1\u724C</p>\n          </div>\n        </div>\n        <ul class=\"hotBrand_img_right\">\n          <li>\n            <img src=\"").concat(item.info[0], "\" alt=\"\">\n            <p>").concat(item.infoinner[0], "</p>\n            <strong>+\u5173\u6CE8</strong>\n            <span>").concat(item.infoNum[0], "\u4EBA\u5173\u6CE8\u8BE5\u54C1\u724C</span>\n            <a href=\"#\">\u8FDB\u5165\u54C1\u724C</a>\n          </li>\n          <li>\n            <img src=\"").concat(item.info[1], "\" alt=\"\">\n            <p>").concat(item.infoinner[1], "</p>\n            <strong>+\u5173\u6CE8</strong>\n            <span>").concat(item.infoNum[1], "\u4EBA\u5173\u6CE8\u8BE5\u54C1\u724C</span>\n            <a href=\"#\">\u8FDB\u5165\u54C1\u724C</a>\n          </li>\n          <li>\n            <img src=\"").concat(item.info[2], "\" alt=\"\">\n            <p>").concat(item.infoinner[2], "</p>\n            <strong>+\u5173\u6CE8</strong>\n            <span>").concat(item.infoNum[2], "\u4EBA\u5173\u6CE8\u8BE5\u54C1\u724C</span>\n            <a href=\"#\">\u8FDB\u5165\u54C1\u724C</a>\n          </li>\n          <li>\n            <img src=\"").concat(item.info[3], "\" alt=\"\">\n            <p>").concat(item.infoinner[3], "</p>\n            <strong>+\u5173\u6CE8</strong>\n            <span>").concat(item.infoNum[3], "\u4EBA\u5173\u6CE8\u8BE5\u54C1\u724C</span>\n            <a href=\"#\">\u8FDB\u5165\u54C1\u724C</a>\n          </li>\n          <li>\n            <img src=\"").concat(item.info[4], "\" alt=\"\">\n            <p>").concat(item.infoinner[4], "</p>\n            <strong>+\u5173\u6CE8</strong>\n            <span>").concat(item.infoNum[4], "\u4EBA\u5173\u6CE8\u8BE5\u54C1\u724C</span>\n            <a href=\"#\">\u8FDB\u5165\u54C1\u724C</a>\n          </li>\n          <li>\n            <img src=\"").concat(item.info[5], "\" alt=\"\">\n            <p>").concat(item.infoinner[5], "</p>\n            <strong>+\u5173\u6CE8</strong>\n            <span>").concat(item.infoNum[5], "\u4EBA\u5173\u6CE8\u8BE5\u54C1\u724C</span>\n            <a href=\"#\">\u8FDB\u5165\u54C1\u724C</a>\n          </li>\n          <li>\n            <img src=\"").concat(item.info[6], "\" alt=\"\">\n            <p>").concat(item.infoinner[6], "</p>\n            <strong>+\u5173\u6CE8</strong>\n            <span>").concat(item.infoNum[6], "\u4EBA\u5173\u6CE8\u8BE5\u54C1\u724C</span>\n            <a href=\"#\">\u8FDB\u5165\u54C1\u724C</a>\n          </li>\n          <li>\n            <img src=\"").concat(item.info[7], "\" alt=\"\">\n            <p>").concat(item.infoinner[7], "</p>\n            <strong>+\u5173\u6CE8</strong>\n            <span>").concat(item.infoNum[7], "\u4EBA\u5173\u6CE8\u8BE5\u54C1\u724C</span>\n            <a href=\"#\">\u8FDB\u5165\u54C1\u724C</a>\n          </li>\n        </ul>\n      </div>");
      });
      $(".pooHot").html(goodsStr);
    }
  });
});