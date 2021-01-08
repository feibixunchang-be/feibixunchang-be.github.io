
$(function(){
    
    function getCart(){
        var list = localStorage.getItem('cart')||"[]"; //字符串
        return JSON.parse(list);
    }
    function setCart(arr){
        localStorage.setItem('cart',JSON.stringify(arr))
    }
    showList();
    function showList(){
        var productList = getCart();
        if(productList.length<1){
            $('#shopCart').hide();
            $('h1').show();
            return;
        }
        $('.shopInner').empty();

        $('#shopCart').show();
        $('h1').hide();
        
        console.log(productList);

        $.each(productList,function(index,item){
            // console.log(item);
            // console.log(productList.length);
            $('.shopInner').append(`<div class="carts">
            <h3><input type="checkbox"> 自营保税仓</h3>
            <div class="cartsTop">
              <input type="checkbox" >
              <img src="${item.productImg}" alt="">
              <div class="recommend">
                <span>【2件装 3种可选】KUMANO </span>
                <p>${item.productPP}</p>
                <img src="//kaola-haitao.oss.kaolacdn.com/testj43rji7610002.png" alt="">
                <strong>支持30天无忧退货</strong>
              </div>
              <span>${item.productColor}...</span>
              <strong>${item.productPrice}</strong>
              <div class="num">
                <i class="num1">-</i><span class="numSpan">${item.productNum}</span><i class="num2">+</i>
              </div>
              <strong class="RMB">75</strong>
              <i class="del">删除</i>
            </div>
            <div class="cartBottom">
              <div>
                活动优惠：-￥<span>0</span> 商品应付总计：￥<strong>75</strong> 预估税费：￥<i>0</i>
              </div>
            </div>
          </div>`)
        })
    }
})
$(function(){
    $(".shopInner").on('click',".del",function(){
        function getCart(){
            var list = localStorage.getItem('cart')||"[]"; //字符串
            return JSON.parse(list);
        }
        // $('.del').click(function() {
            $(this).parent().parent().remove();
            var index = $(this).parent().parent().index();
            var arr = JSON.parse(localStorage.cart);
            arr.splice(index, 1);
            localStorage.cart = JSON.stringify(arr);
        var productList = getCart();

            if(productList.length<1){
                $('#shopCart').hide();
                $('h1').show();
                return;
            }
        // })

    })
})







