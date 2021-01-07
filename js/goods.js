
//放大镜
(function(){
var imgmed = $('.middleImg')[0];
var mask = $('.mask')[0];
var imgnone = $('.bigImg')[0];
var img = $('.bigImg img')[0];

imgmed.onmousemove = function(e){
  var e = e || event;
  // 计算msk的定位坐标
// console.log("11111111");
  var maskLeft = e.pageX - offset(imgmed).left - mask.clientWidth/2;
  var maskTop = e.pageY - offset(imgmed).top - mask.clientHeight/2 ;
  //  console.log(e.clientY);
  // console.log(offset(imgmed).top);
  // console.log(mask.clientHeight); 
  if (maskLeft < 0) {
    maskLeft = 0
  }
  if (maskLeft >= (imgmed.clientWidth-mask.clientWidth)) {
    maskLeft = imgmed.clientWidth-mask.clientWidth
  }
  if (maskTop < 0) {
    maskTop = 0
  }
  if (maskTop >= (imgmed.clientHeight-mask.clientHeight)) {
    maskTop = imgmed.clientHeight-mask.clientHeight
  }
  mask.style.left = maskLeft + 'px'
  mask.style.top = maskTop + 'px'
  var scaleX = maskLeft/(imgmed.clientWidth-mask.clientWidth)
  var scaleY = maskTop/(imgmed.clientHeight-mask.clientHeight)

  img.style.left = -scaleX*(img.clientWidth-imgnone.clientWidth) + 'px'
  img.style.top = -scaleY*(img.clientHeight-imgnone.clientHeight) + 'px'

}
imgmed.onmouseenter = function (){
  mask.style.display = 'block'
  imgnone.style.display = 'block'
}
imgmed.onmouseleave = function (){
  mask.style.display = 'none'
  imgnone.style.display = 'none'
}
})()

// 图片切换
$(function(){
  var mdImg = $('.middleImg img')[0];
  var bigImg = $('.bigImg img')[0];
  var samBox = $('.samllImgBox li ');
  var samImg = $('.samllImgBox li img');
  // console.log($('.middleImg img'));
  // console.log(samImg.length);
  var mdImgArr = ['https://kaola-pop.oss.kaolacdn.com/9f0a10ad99874701975fcf905193210b_800_800.jpg?x-oss-process=image/resize,w_800/quality,q_85','https://kaola-pop.oss.kaolacdn.com/eef680768aa54f088bb7b0b116141ee7_800_800.jpg?x-oss-process=image/resize,w_800/quality,q_85'];
  var bigImgArr = ['https://kaola-pop.oss.kaolacdn.com/9f0a10ad99874701975fcf905193210b_800_800.jpg?x-oss-process=image/resize,w_800/quality,q_85','https://kaola-pop.oss.kaolacdn.com/eef680768aa54f088bb7b0b116141ee7_800_800.jpg?x-oss-process=image/resize,w_800/quality,q_85'];
  for(var i = 0,len = samImg.length; i < len; i++ ){
    // console.log(samImg[i]);
    samImg[i].index = i;
    samImg[i].onmouseenter = function(){
      mdImg.src = mdImgArr[this.index];
      bigImg.src = bigImgArr[this.index];
      $(samBox[this.index]).addClass('samllImg').siblings().removeClass('samllImg')
    }
  }
})




//数据渲染
$(function(){
  // console.log(getCookie('id'));
  if(getCookie('id')==1){
    $.ajax({
      url:'../data/goods.json',
      type:'get',
      dateType:'json',
      success:function(json){
        var goodsStr = '';
        $.each(json,function(index,item){
          // console.log(item);
          goodsStr +=`<div class="mainRightTop">
          <img src="https://kaola-haitao.oss.kaolacdn.com/iczukrul93.JPG?x-oss-process=image/resize,w_48/quality,q_85" alt="">
          <span>中国 | 仁和</span>
          </div>
          <h4>${item.h4[0]}</h4>
          <p>${item.p[0]}</p>
          <div class="minute">
            <dt>售价</dt>
            <dd>
              <p>${item.minuteP[0]}<span>特价</span><span>包邮</span></p>
              <div>
                <strong>${item.strong[0]}</strong>
                <span>${item.span[0]}</span>
                <a href="#">立即开卡</a>
              </div>
            </dd>
          </div>
          <div class="freight">
            <strong>运费</strong>
            <span>无锡</span><i>至</i>
            <select name="" id="" >
              <option value="">广东/深圳市/龙华区</option>
            </select>
            <span>免运费</span>
          </div>
          <div class="serve clearfix">
            <strong>服务</strong>    
            <div>
              <span>本商品由</span><i>${item.i[0]}</i><span>发货</span>
              <p>付款后，48小时内发货</p>
            </div>
          </div>
          <div class="num clearfix">
            <strong>数量</strong>    
            <div>
              <i class="num1">-</i><span class="numSpan">1</span><i class="num2">+</i>
            </div>
          </div>
          <div class="declare">
            <strong>说明</strong>    
            <div>
              <span>正品保障</span>
              <span>7天无理由退货</span>
              <span>赠运费险</span>  
            </div>
          </div>
          <div class="shopping">
            <div class="buyNow">立即购买</div>
            <div class="shoppingCart" shopImg="${item.shopImg[1]}"  shopPP="${item.shopPP[1]}" shopColor="${item.shopColor[1]}"  Price="${item.dataPrice[1]}" num="1" id="1">加入购物车</div>
            <a href="#">收藏</a>
          </div>`
        })
        $(".mainRight").html(goodsStr)
      }
    })
  }else{
    $.ajax({
      url:'../data/goods.json',
      type:'get',
      dateType:'json',
      success:function(json){
        var goodsStr = '';
        $.each(json,function(index,item){
          // console.log(item);
          goodsStr +=`<div class="mainRightTop">
          <img src="https://kaola-haitao.oss.kaolacdn.com/iczukrul93.JPG?x-oss-process=image/resize,w_48/quality,q_85" alt="">
          <span>中国 | 仁和</span>
          </div>
          <h4>${item.h4[1]}</h4>
          <p>${item.p[1]}</p>
          <div class="minute">
            <dt>售价</dt>
            <dd>
              <p>${item.minuteP[1]}<span>特价</span><span>包邮</span></p>
              <div>
                <strong>${item.strong[1]}</strong>
                <span>${item.span[1]}</span>
                <a href="#">立即开卡</a>
              </div>
            </dd>
          </div>
          <div class="freight">
            <strong>运费</strong>
            <span>无锡</span><i>至</i>
            <select name="" id="" >
              <option value="">广东/深圳市/龙华区</option>
            </select>
            <span>免运费</span>
          </div>
          <div class="serve clearfix">
            <strong>服务</strong>    
            <div>
              <span>本商品由</span><i>${item.i[1]}</i><span>发货</span>
              <p>付款后，48小时内发货</p>
            </div>
          </div>
          <div class="num clearfix">
            <strong>数量</strong>    
            <div>
            <i class="num1">-</i><span class="numSpan">1</span><i class="num2">+</i>
            </div>
          </div>
          <div class="declare">
            <strong>说明</strong>    
            <div>
              <span>正品保障</span>
              <span>7天无理由退货</span>
              <span>赠运费险</span>  
            </div>
          </div>
          <div class="shopping">
            <div class="buyNow">立即购买</div>
            <div class="shoppingCart" shopImg="${item.shopImg[1]}"  shopPP="${item.shopPP[1]}" shopColor="${item.shopColor[1]}"  Price="${item.dataPrice[1]}" num="1" id="2">加入购物车</div>
            <a href="#">收藏</a>
          </div>`
        })
        $(".mainRight").html(goodsStr);
      }
    })
  }
  
})



$(function(){
  // console.log($(".mainRight")[0]);
  var cont =1
  $(".mainRight").on('click',".num1",function(){
    // console.log($('.mainRight .numSpan')[0].innerText);
    if ($('.mainRight .numSpan').text() <=1) {
    // console.log();
      $('.mainRight .numSpan').text(1)
      $('.mainRight .shoppingCart').attr('num',cont)
      // shoppingCart
    }else{
      cont--;
      $('.mainRight .numSpan').text(cont)
      $('.mainRight .shoppingCart').attr('num',cont)
    }
  })
  $(".mainRight").on('click',".num2",function(){
    cont++;
    $('.mainRight .numSpan').text(cont)
    $('.mainRight .shoppingCart').attr('num',cont)
    // console.log($('.mainRight .shoppingCart').attr('data-num'));
  })
  
  
})


//加入购物车
$(function(){
  function getCart(){
    var list = localStorage.getItem('cart')||"[]"; //字符串
    return JSON.parse(list);
  }
  function setCart(arr){
    localStorage.setItem('cart',JSON.stringify(arr))
  }
  
  $(".mainRight").on('click',".shoppingCart",function(){
    var newProduct = {
      productImg:$('.shoppingCart').attr('shopImg'),
      productPP:$('.shoppingCart').attr('shopPP'),
      productColor:$('.shoppingCart').attr('shopColor'),
      productPrice:$('.shoppingCart').attr('Price'),
      productNum:$('.shoppingCart').attr('num'),
      productId:$('.shoppingCart').attr('id'),
    }
    // console.log($('.shoppingCart').attr('num'));
    for(var i = 0,len = $('.shoppingCart').attr('num'); i < len; i++ ){
      var productList = getCart();
      productList.push(newProduct  );
      setCart(productList)
    }


    /* var productList = getCart();
    productList.push(newProduct  );
    setCart(productList) */
    // console.log(productList);
  })
})

