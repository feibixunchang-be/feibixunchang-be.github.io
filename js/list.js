$(function(){
  $.ajax({
    url:"../data/list.json",
    type:'get',
    dateType:'json',
    success:function(json){
      var goodsStr = '';
      $.each(json,function(index,item){
        console.log(item.main_innerImg.length);
        for(var i = 0,len = item.main_innerImg.length; i < len; i++ ){
            goodsStr +=`<div class="main_inner" id="${item.idlist[i]}">
            <a href="./goods.html" class="LIsta">
            <img src="${item.main_innerImg[i]}" alt="" class="imgBig">
            </a>
            <div class="imgSamll">
              <img src="${item.imgSamll[i]}" alt="" >
            </div>
            <h3>${item.h3[i]}</h3>
            <div class="vip">
              <div class="vipLeft">黑卡价</div>
              <div class="vipRight">${item.vipRight[i]}</div>
              <div class="vipContent"></div>
            </div>
            <a href="./goods.html"">${item.a[i]}</a>
            <div class="removes">
              <div class="removesInner">
                <i>${item.removesInner[i]}</i><i>特价</i>
              </div>
              <div class="serve">
                <span></span><strong>${item.serveStr[i]}</strong><span class="field">${item.field[i]}</span>
              </div>
              <p>${item.p[i]}</p>
            </div>
          </div>`
        }
      })
      $(".mainBig").html(goodsStr)

      $('.main_inner').click(function(){
        console.log($(this).attr('id'));
        document.cookie = "id="+$(this).attr('id');
      })
    } 

  })
})














