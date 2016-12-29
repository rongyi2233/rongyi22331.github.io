/**
 * Created by Administrator on 2016/9/28.
 */

window.onload=function(){
    var sGoods=getCookie("sGoods");
    var Html="";
    var allPrice=0;
    if(sGoods!=undefined&&sGoods!='') {
        var aGoods = JSON.parse(sGoods);
        //遍历cookie，把数据加入购物车
        for (var i = 0; i < aGoods.length; i++) {
            allPrice += aGoods[i].goodsPrice * aGoods[i].goodsNum;
            Html += '<tr class="tr2"> <td class="td1"> <dl> <dt><a href="javascript:;"><img src="' + aGoods[i].goodsImg + '" alt=""></a></dt> <dd class="dd1"><a href="details.html">'+aGoods[i].goodsTitle+'</a></dd> <dd><span>商品编号：'+aGoods[i].goodsId+'</span><em>颜色：无</em><b> 规格：L</b></dd> </dl> </td> <td class="td2">¥'+aGoods[i].goodsPrice+'</td> <td class="td3">'+aGoods[i].goodsNum+'</td> <td class="td4">有货</td> </tr>'
        }
        $("#order-main tbody").html(Html);
        $("#order-main .bot .li1 em").text("￥"+allPrice);
        $("#order-main .bot .p2 em").text("￥"+allPrice);
    }
    $("#newAdd").click(function(){
        $("#order-main .div1").animate({
            height:320
        })
    });
    $("#no").click(function(){
        $("#order-main .div1").animate({
            height:68
        })
    });
    $("#order-main .mid .div1 input").keydown(function(){
        if(this.value==this.defaultValue){
            this.value="";
            $(this).css("color","#000")
        }
    });
    $("#order-main .mid .div1 input").blur(function(){
        if(this.value==""){
            this.value=this.defaultValue;
            $(this).css("color","#999")
        }
    });
    $(".favor h3").click(function(){
        $(".favor .wrap").eq($(this).index("h3")).toggleClass("div-active");
    });





}
