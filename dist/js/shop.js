"use strict";

$(function () {
  function getCart() {
    var list = localStorage.getItem('cart') || "[]"; //字符串

    return JSON.parse(list);
  }

  function setCart(arr) {
    localStorage.setItem('cart', JSON.stringify(arr));
  }

  showList();

  function showList() {
    var productList = getCart();

    if (productList.length < 1) {
      $('#shopCart').hide();
      $('h1').show();
      return;
    }

    $('.shopInner').empty();
    $('#shopCart').show();
    $('h1').hide();
    console.log(productList);
    $.each(productList, function (index, item) {
      // console.log(item);
      // console.log(productList.length);
      $('.shopInner').append("<div class=\"carts\">\n            <h3><input type=\"checkbox\"> \u81EA\u8425\u4FDD\u7A0E\u4ED3</h3>\n            <div class=\"cartsTop\">\n              <input type=\"checkbox\" >\n              <img src=\"".concat(item.productImg, "\" alt=\"\">\n              <div class=\"recommend\">\n                <span>\u30102\u4EF6\u88C5 3\u79CD\u53EF\u9009\u3011KUMANO </span>\n                <p>").concat(item.productPP, "</p>\n                <img src=\"//kaola-haitao.oss.kaolacdn.com/testj43rji7610002.png\" alt=\"\">\n                <strong>\u652F\u630130\u5929\u65E0\u5FE7\u9000\u8D27</strong>\n              </div>\n              <span>").concat(item.productColor, "...</span>\n              <strong>").concat(item.productPrice, "</strong>\n              <div class=\"num\">\n                <i class=\"num1\">-</i><span class=\"numSpan\">").concat(item.productNum, "</span><i class=\"num2\">+</i>\n              </div>\n              <strong class=\"RMB\">75</strong>\n              <i class=\"del\">\u5220\u9664</i>\n            </div>\n            <div class=\"cartBottom\">\n              <div>\n                \u6D3B\u52A8\u4F18\u60E0\uFF1A-\uFFE5<span>0</span> \u5546\u54C1\u5E94\u4ED8\u603B\u8BA1\uFF1A\uFFE5<strong>75</strong> \u9884\u4F30\u7A0E\u8D39\uFF1A\uFFE5<i>0</i>\n              </div>\n            </div>\n          </div>"));
    });
  }
});
$(function () {
  $(".shopInner").on('click', ".del", function () {
    function getCart() {
      var list = localStorage.getItem('cart') || "[]"; //字符串

      return JSON.parse(list);
    } // $('.del').click(function() {


    $(this).parent().parent().remove();
    var index = $(this).parent().parent().index();
    var arr = JSON.parse(localStorage.cart);
    arr.splice(index, 1);
    localStorage.cart = JSON.stringify(arr);
    var productList = getCart();

    if (productList.length < 1) {
      $('#shopCart').hide();
      $('h1').show();
      return;
    } // })

  });
});