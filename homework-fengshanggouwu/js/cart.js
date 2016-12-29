/**
 * Created by Administrator on 2016/9/26.
 */

window.onload=function(){
    (function($){

        var sGoods=getCookie("sGoods");
        var Html="";
        var Html1="";
        var allPrice=0;
        if(sGoods!=undefined&&sGoods!=''){
            var aGoods=JSON.parse(sGoods);
            //遍历cookie，把数据加入购物车
                for(var i=0;i<aGoods.length;i++){
                    allPrice+=aGoods[i].goodsPrice*aGoods[i].goodsNum
                    Html+='<tr class="a'+i+'"> <td class="td1"> <dl> <dt><img src="'+aGoods[i].goodsImg+'" alt=""></dt> <dd class="dd1"><a href="details.html">'+aGoods[i].goodsTitle+'</a></dd> <dd class="dd2"> <span>商品编号：'+aGoods[i].goodsId+' </span> <b>颜色：无</b> <em>规格：无</em> </dd> </dl> </td> <td class="td2">￥'+aGoods[i].goodsPrice+'</td> <td class="td3">有货</td> <td class="td4"> <div> <a class="minus" href="javascript:;">-</a><input type="text"name=""value="'+aGoods[i].goodsNum+'"><a class="add" href="javascript:;">+</a> </div> </td> <td class="td5">￥'+aGoods[i].goodsPrice*aGoods[i].goodsNum+'</td> <td class="td6"><p><a href="javascript:;">收藏</a><a class="remove" href="javascript:;">删除</a></p></td> </tr>'
                };
                Html1='<tr class="tr1"> <td class="td1" colspan="3"><a id="clear" href="javascript:;">清空购物车</a></td> <td class="td2"> <span>总计：</span><br/> <em>促销折扣：</em> </td> <td class="td3" colspan="2"> <span>￥'+allPrice+'</span><br/> <em>-￥0</em> </td> </tr> <tr class="tr2"> <td class="td1" colspan="3">您可获积分：￥8:00</td> <td class="td2">总计（不含运费）：</td> <td class="td3" colspan="2">¥'+allPrice+'</td> </tr>'
                $("#cart-main tbody").html(Html);
                $("#cart-main tfoot").html(Html1);

            var val=1;
            var tbodyTr=$("#cart-main tbody tr");
            //点击增加商品数量
            $(".add").click(function(){
                val=parseInt(tbodyTr.eq($(this).index(".add")).find("input").val());
                tbodyTr.eq($(this).index(".add")).find("input").val(val+1);
                val=parseInt(tbodyTr.eq($(this).index(".add")).find("input").val());
                $("#cart-main tbody .td5").eq($(this).index(".add")).text("￥"+val*aGoods[$(this).index(".add")].goodsPrice);
                allPrice+=parseInt(aGoods[$(this).index(".add")].goodsPrice);
                $("#cart-main tfoot .td3").eq(0).find("span").text("￥"+allPrice);
                $("#cart-main tfoot .td3").eq(1).text("￥"+allPrice);
                aGoods[$(this).index(".add")].goodsNum=val;
                setCookie("sGoods",JSON.stringify(aGoods),"7","/")
            });
            //点击减少商品数量
            $(".minus").click(function(){
                val=parseInt(tbodyTr.eq($(this).index(".minus")).find("input").val());
                tbodyTr.eq($(this).index(".minus")).find("input").val(val-1);
                val=parseInt(tbodyTr.eq($(this).index(".minus")).find("input").val());
                if(val<1){
                    tbodyTr.eq($(this).index(".minus")).find("input").val(1);
                }else{
                    allPrice-=aGoods[$(this).index(".minus")].goodsPrice;
                }
                val=parseInt(tbodyTr.eq($(this).index(".minus")).find("input").val());
                $("#cart-main tbody .td5").eq($(this).index(".minus")).text("￥"+val*aGoods[$(this).index(".minus")].goodsPrice);
                $("#cart-main tfoot .td3").eq(0).find("span").text("￥"+allPrice);
                $("#cart-main tfoot .td3").eq(1).text("￥"+allPrice);
                aGoods[$(this).index(".minus")].goodsNum=val;
                setCookie("sGoods",JSON.stringify(aGoods),"7","/")
            });
            //用输入的方式改变商品数量
            $("#cart-main tbody input").on("blur",function(){
                aGoods[$(this).index("input")].goodsNum=$(this).val();
                setCookie("sGoods",JSON.stringify(aGoods),"7","/");
                $("#cart-main tbody .td5").eq($(this).index("input")).text("￥"+$(this).val()*aGoods[$(this).index("input")].goodsPrice);
                allPrice=0;
                for(var k=0;k<aGoods.length;k++){
                    allPrice+=aGoods[k].goodsPrice*aGoods[k].goodsNum;
                }
                $("#cart-main tfoot .td3").eq(0).find("span").text("￥"+allPrice);
                $("#cart-main tfoot .td3").eq(1).text("￥"+allPrice);
            });
            //删除购物车的个别东西
            $("#cart-main .remove").click(function(){
                aGoods.splice([$(this).index(".remove")],1);
                $(this).parent().parent().parent().remove();


                setCookie("sGoods",JSON.stringify(aGoods),"7","/");
                allPrice=0;
                for(var k=0;k<aGoods.length;k++){
                    allPrice+=aGoods[k].goodsPrice*aGoods[k].goodsNum;
                }
                $("#cart-main tfoot .td3").eq(0).find("span").text("￥"+allPrice);
                $("#cart-main tfoot .td3").eq(1).text("￥"+allPrice);
                if(aGoods.length==0){
                    $("#cart-main tfoot").html("<tr><td style='text-align: center;line-height:40px;font-size: 22px;' colspan='6'>购物车空空如也，快去购物吧~</td></td></tr>");
                }
            });
            $("#clear").click(function(){
                setCookie("sGoods","","-1","/");
                tbodyTr.remove();
                $("#cart-main tfoot").html("<tr><td style='text-align: center;line-height:40px;font-size: 22px;' colspan='6'>购物车空空如也，快去购物吧~</td></td></tr>");
            });





        }else{
            $("#cart-main tfoot").html("<tr><td style='text-align: center;line-height:40px;font-size: 22px;' colspan='6'>购物车空空如也，快去购物吧~</td></td></tr>");
        };
        if(aGoods!=undefined&&aGoods.length==0){
            $("#cart-main tfoot").html("<tr><td style='text-align: center;line-height:40px;font-size: 22px;' colspan='6'>购物车空空如也，快去购物吧~</td></td></tr>");
        }






    })(jQuery)
}
