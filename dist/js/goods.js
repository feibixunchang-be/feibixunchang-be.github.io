"use strict";

//放大镜
(function () {
  var imgmed = $('.middleImg')[0];
  var mask = $('.mask')[0];
  var imgnone = $('.bigImg')[0];
  var img = $('.bigImg img')[0];

  imgmed.onmousemove = function (e) {
    var e = e || event; // 计算msk的定位坐标
    // console.log("11111111");

    var maskLeft = e.pageX - offset(imgmed).left - mask.clientWidth / 2;
    var maskTop = e.pageY - offset(imgmed).top - mask.clientHeight / 2; //  console.log(e.clientY);
    // console.log(offset(imgmed).top);
    // console.log(mask.clientHeight); 

    if (maskLeft < 0) {
      maskLeft = 0;
    }

    if (maskLeft >= imgmed.clientWidth - mask.clientWidth) {
      maskLeft = imgmed.clientWidth - mask.clientWidth;
    }

    if (maskTop < 0) {
      maskTop = 0;
    }

    if (maskTop >= imgmed.clientHeight - mask.clientHeight) {
      maskTop = imgmed.clientHeight - mask.clientHeight;
    }

    mask.style.left = maskLeft + 'px';
    mask.style.top = maskTop + 'px';
    var scaleX = maskLeft / (imgmed.clientWidth - mask.clientWidth);
    var scaleY = maskTop / (imgmed.clientHeight - mask.clientHeight);
    img.style.left = -scaleX * (img.clientWidth - imgnone.clientWidth) + 'px';
    img.style.top = -scaleY * (img.clientHeight - imgnone.clientHeight) + 'px';
  };

  imgmed.onmouseenter = function () {
    mask.style.display = 'block';
    imgnone.style.display = 'block';
  };

  imgmed.onmouseleave = function () {
    mask.style.display = 'none';
    imgnone.style.display = 'none';
  };
})(); // 图片切换


$(function () {
  var mdImg = $('.middleImg img')[0];
  var bigImg = $('.bigImg img')[0];
  var samBox = $('.samllImgBox li ');
  var samImg = $('.samllImgBox li img'); // console.log($('.middleImg img'));
  // console.log(samImg.length);

  var mdImgArr = ['https://kaola-pop.oss.kaolacdn.com/9f0a10ad99874701975fcf905193210b_800_800.jpg?x-oss-process=image/resize,w_800/quality,q_85', 'https://kaola-pop.oss.kaolacdn.com/eef680768aa54f088bb7b0b116141ee7_800_800.jpg?x-oss-process=image/resize,w_800/quality,q_85'];
  var bigImgArr = ['https://kaola-pop.oss.kaolacdn.com/9f0a10ad99874701975fcf905193210b_800_800.jpg?x-oss-process=image/resize,w_800/quality,q_85', 'https://kaola-pop.oss.kaolacdn.com/eef680768aa54f088bb7b0b116141ee7_800_800.jpg?x-oss-process=image/resize,w_800/quality,q_85'];

  for (var i = 0, len = samImg.length; i < len; i++) {
    // console.log(samImg[i]);
    samImg[i].index = i;

    samImg[i].onmouseenter = function () {
      mdImg.src = mdImgArr[this.index];
      bigImg.src = bigImgArr[this.index];
      $(samBox[this.index]).addClass('samllImg').siblings().removeClass('samllImg');
    };
  }
}); //数据渲染

$(function () {
  // console.log(getCookie('id'));
  if (getCookie('id') == 1) {
    $.ajax({
      url: '../data/goods.json',
      type: 'get',
      dateType: 'json',
      success: function success(json) {
        var goodsStr = '';
        $.each(json, function (index, item) {
          // console.log(item);
          goodsStr += "<div class=\"mainRightTop\">\n          <img src=\"https://kaola-haitao.oss.kaolacdn.com/iczukrul93.JPG?x-oss-process=image/resize,w_48/quality,q_85\" alt=\"\">\n          <span>\u4E2D\u56FD | \u4EC1\u548C</span>\n          </div>\n          <h4>".concat(item.h4[0], "</h4>\n          <p>").concat(item.p[0], "</p>\n          <div class=\"minute\">\n            <dt>\u552E\u4EF7</dt>\n            <dd>\n              <p>").concat(item.minuteP[0], "<span>\u7279\u4EF7</span><span>\u5305\u90AE</span></p>\n              <div>\n                <strong>").concat(item.strong[0], "</strong>\n                <span>").concat(item.span[0], "</span>\n                <a href=\"#\">\u7ACB\u5373\u5F00\u5361</a>\n              </div>\n            </dd>\n          </div>\n          <div class=\"freight\">\n            <strong>\u8FD0\u8D39</strong>\n            <span>\u65E0\u9521</span><i>\u81F3</i>\n            <select name=\"\" id=\"\" >\n              <option value=\"\">\u5E7F\u4E1C/\u6DF1\u5733\u5E02/\u9F99\u534E\u533A</option>\n            </select>\n            <span>\u514D\u8FD0\u8D39</span>\n          </div>\n          <div class=\"serve clearfix\">\n            <strong>\u670D\u52A1</strong>\u2002  \u2002\n            <div>\n              <span>\u672C\u5546\u54C1\u7531</span><i>").concat(item.i[0], "</i><span>\u53D1\u8D27</span>\n              <p>\u4ED8\u6B3E\u540E\uFF0C48\u5C0F\u65F6\u5185\u53D1\u8D27</p>\n            </div>\n          </div>\n          <div class=\"num clearfix\">\n            <strong>\u6570\u91CF</strong>\u2002  \u2002\n            <div>\n              <i class=\"num1\">-</i><span class=\"numSpan\">1</span><i class=\"num2\">+</i>\n            </div>\n          </div>\n          <div class=\"declare\">\n            <strong>\u8BF4\u660E</strong>\u2002  \u2002\n            <div>\n              <span>\u6B63\u54C1\u4FDD\u969C</span>\n              <span>7\u5929\u65E0\u7406\u7531\u9000\u8D27</span>\n              <span>\u8D60\u8FD0\u8D39\u9669</span>  \n            </div>\n          </div>\n          <div class=\"shopping\">\n            <div class=\"buyNow\">\u7ACB\u5373\u8D2D\u4E70</div>\n            <div class=\"shoppingCart\" shopImg=\"").concat(item.shopImg[1], "\"  shopPP=\"").concat(item.shopPP[1], "\" shopColor=\"").concat(item.shopColor[1], "\"  Price=\"").concat(item.dataPrice[1], "\" num=\"1\" id=\"1\">\u52A0\u5165\u8D2D\u7269\u8F66</div>\n            <a href=\"#\">\u6536\u85CF</a>\n          </div>");
        });
        $(".mainRight").html(goodsStr);
      }
    });
  } else {
    $.ajax({
      url: '../data/goods.json',
      type: 'get',
      dateType: 'json',
      success: function success(json) {
        var goodsStr = '';
        $.each(json, function (index, item) {
          // console.log(item);
          goodsStr += "<div class=\"mainRightTop\">\n          <img src=\"https://kaola-haitao.oss.kaolacdn.com/iczukrul93.JPG?x-oss-process=image/resize,w_48/quality,q_85\" alt=\"\">\n          <span>\u4E2D\u56FD | \u4EC1\u548C</span>\n          </div>\n          <h4>".concat(item.h4[1], "</h4>\n          <p>").concat(item.p[1], "</p>\n          <div class=\"minute\">\n            <dt>\u552E\u4EF7</dt>\n            <dd>\n              <p>").concat(item.minuteP[1], "<span>\u7279\u4EF7</span><span>\u5305\u90AE</span></p>\n              <div>\n                <strong>").concat(item.strong[1], "</strong>\n                <span>").concat(item.span[1], "</span>\n                <a href=\"#\">\u7ACB\u5373\u5F00\u5361</a>\n              </div>\n            </dd>\n          </div>\n          <div class=\"freight\">\n            <strong>\u8FD0\u8D39</strong>\n            <span>\u65E0\u9521</span><i>\u81F3</i>\n            <select name=\"\" id=\"\" >\n              <option value=\"\">\u5E7F\u4E1C/\u6DF1\u5733\u5E02/\u9F99\u534E\u533A</option>\n            </select>\n            <span>\u514D\u8FD0\u8D39</span>\n          </div>\n          <div class=\"serve clearfix\">\n            <strong>\u670D\u52A1</strong>\u2002  \u2002\n            <div>\n              <span>\u672C\u5546\u54C1\u7531</span><i>").concat(item.i[1], "</i><span>\u53D1\u8D27</span>\n              <p>\u4ED8\u6B3E\u540E\uFF0C48\u5C0F\u65F6\u5185\u53D1\u8D27</p>\n            </div>\n          </div>\n          <div class=\"num clearfix\">\n            <strong>\u6570\u91CF</strong>\u2002  \u2002\n            <div>\n            <i class=\"num1\">-</i><span class=\"numSpan\">1</span><i class=\"num2\">+</i>\n            </div>\n          </div>\n          <div class=\"declare\">\n            <strong>\u8BF4\u660E</strong>\u2002  \u2002\n            <div>\n              <span>\u6B63\u54C1\u4FDD\u969C</span>\n              <span>7\u5929\u65E0\u7406\u7531\u9000\u8D27</span>\n              <span>\u8D60\u8FD0\u8D39\u9669</span>  \n            </div>\n          </div>\n          <div class=\"shopping\">\n            <div class=\"buyNow\">\u7ACB\u5373\u8D2D\u4E70</div>\n            <div class=\"shoppingCart\" shopImg=\"").concat(item.shopImg[1], "\"  shopPP=\"").concat(item.shopPP[1], "\" shopColor=\"").concat(item.shopColor[1], "\"  Price=\"").concat(item.dataPrice[1], "\" num=\"1\" id=\"2\">\u52A0\u5165\u8D2D\u7269\u8F66</div>\n            <a href=\"#\">\u6536\u85CF</a>\n          </div>");
        });
        $(".mainRight").html(goodsStr);
      }
    });
  }
});
$(function () {
  // console.log($(".mainRight")[0]);
  var cont = 1;
  $(".mainRight").on('click', ".num1", function () {
    // console.log($('.mainRight .numSpan')[0].innerText);
    if ($('.mainRight .numSpan').text() <= 1) {
      // console.log();
      $('.mainRight .numSpan').text(1);
      $('.mainRight .shoppingCart').attr('num', cont); // shoppingCart
    } else {
      cont--;
      $('.mainRight .numSpan').text(cont);
      $('.mainRight .shoppingCart').attr('num', cont);
    }
  });
  $(".mainRight").on('click', ".num2", function () {
    cont++;
    $('.mainRight .numSpan').text(cont);
    $('.mainRight .shoppingCart').attr('num', cont); // console.log($('.mainRight .shoppingCart').attr('data-num'));
  });
}); //加入购物车

$(function () {
  function getCart() {
    var list = localStorage.getItem('cart') || "[]"; //字符串

    return JSON.parse(list);
  }

  function setCart(arr) {
    localStorage.setItem('cart', JSON.stringify(arr));
  }

  $(".mainRight").on('click', ".shoppingCart", function () {
    var newProduct = {
      productImg: $('.shoppingCart').attr('shopImg'),
      productPP: $('.shoppingCart').attr('shopPP'),
      productColor: $('.shoppingCart').attr('shopColor'),
      productPrice: $('.shoppingCart').attr('Price'),
      productNum: $('.shoppingCart').attr('num'),
      productId: $('.shoppingCart').attr('id')
    }; // console.log($('.shoppingCart').attr('num'));

    for (var i = 0, len = $('.shoppingCart').attr('num'); i < len; i++) {
      var productList = getCart();
      productList.push(newProduct);
      setCart(productList);
    }
    /* var productList = getCart();
    productList.push(newProduct  );
    setCart(productList) */
    // console.log(productList);

  });
});