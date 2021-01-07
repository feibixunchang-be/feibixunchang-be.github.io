"use strict";

$(function () {
  $.ajax({
    url: "../data/list.json",
    type: 'get',
    dateType: 'json',
    success: function success(json) {
      var goodsStr = '';
      $.each(json, function (index, item) {
        console.log(item.main_innerImg.length);

        for (var i = 0, len = item.main_innerImg.length; i < len; i++) {
          goodsStr += "<div class=\"main_inner\" id=\"".concat(item.idlist[i], "\">\n            <a href=\"./goods.html\" class=\"LIsta\">\n            <img src=\"").concat(item.main_innerImg[i], "\" alt=\"\" class=\"imgBig\">\n            </a>\n            <div class=\"imgSamll\">\n              <img src=\"").concat(item.imgSamll[i], "\" alt=\"\" >\n            </div>\n            <h3>").concat(item.h3[i], "</h3>\n            <div class=\"vip\">\n              <div class=\"vipLeft\">\u9ED1\u5361\u4EF7</div>\n              <div class=\"vipRight\">").concat(item.vipRight[i], "</div>\n              <div class=\"vipContent\"></div>\n            </div>\n            <a href=\"./goods.html\"\">").concat(item.a[i], "</a>\n            <div class=\"removes\">\n              <div class=\"removesInner\">\n                <i>").concat(item.removesInner[i], "</i><i>\u7279\u4EF7</i>\n              </div>\n              <div class=\"serve\">\n                <span></span><strong>").concat(item.serveStr[i], "</strong><span class=\"field\">").concat(item.field[i], "</span>\n              </div>\n              <p>").concat(item.p[i], "</p>\n            </div>\n          </div>");
        }
      });
      $(".mainBig").html(goodsStr);
      $('.main_inner').click(function () {
        console.log($(this).attr('id'));
        document.cookie = "id=" + $(this).attr('id');
      });
    }
  });
});