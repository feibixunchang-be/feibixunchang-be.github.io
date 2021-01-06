
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
  // console.log(mdImg);
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










