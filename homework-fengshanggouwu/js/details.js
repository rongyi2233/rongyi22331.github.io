/**
 * Created by Administrator on 2016/9/26.
 */
jQuery.noConflict();
(function($){
    window.onload=function(){
        $("#header .title").css("display","none");
        $("#header .list").on({
            mouseenter:function(){
                $("#header .title").css("display","block")
            },
            mouseleave:function(){
                $("#header .title").css("display","none");
            }
        });
        var scale=927/$(".small .div1 img").outerWidth();
        $(".small .div1").on({
            mouseenter:function(){
                $(".move").css("display","block");
                $(".big").css("display","block");
            },
            mouseleave:function(){
                $(".move").css("display","none");
                $(".big").css("display","none");
            },
            mousemove:function(evt){
                var event=evt||window.event;
                var maxx=$(this).width()-$(".move").outerWidth();
                var maxy=$(this).height()-$(".move").outerHeight();
                var x=event.pageX-$(this).offset().left-$(".move").width()/2;
                var y=event.pageY-$(this).offset().top-$(".move").height()/2;
                if(x<0){
                    x=0;
                }
                if(x>maxx){
                    x=maxx;
                }
                if(y<0){
                    y=0;
                }
                if(y>maxy){
                    y=maxy;
                }
                $(".move").css({
                    left:x,
                    top:y
                });
                $(".big img").css({
                    left:-scale*x,
                    top:-scale*y
                });
            }
        });
        $(".small .div2 li").click(function(){
            $(".small .div2 li").removeClass("li-active").eq($(this).index()).addClass("li-active");
            $(".small .div1 img")[0].src="../img/small"+($(this).index()+1)+".png";
            $(".big img")[0].src="../img/big"+($(this).index()+1)+".png"
        });
        $(".bot-right a").click(function(){
            $(".bot-right a").removeClass("a-active");
            $(this).addClass("a-active");
        });
        $(".bot-right li").click(function(){
            $(".bot-right-content>div").css("display","none").eq($(this).index()).css("display","block");
        });
        for(var i=0;i<$(".addCart").length;i++){
            $(".addCart").click(function(){
                alert("加入购车成功");
                var btnOn=true;
                var sGoods=getCookie("sGoods");
                if(sGoods==undefined||sGoods==""){
                    var aGoods=[];
                }else{
                    var aGoods=JSON.parse(sGoods);
                }
                var igoodsId=this.getAttribute("goodsId"),
                    igoodsTitle=this.getAttribute("goodsTitle"),
                    igoodsPrice=this.getAttribute("goodsPrice"),
                    igoodsImg=this.getAttribute("goodsImg");
                for(var j=0;j<aGoods.length;j++){
                    if(igoodsId==aGoods[j].goodsId){
                        aGoods[j].goodsNum+=parseInt($("#number1").val());
                        btnOn=false;
                    }
                        }
                if(btnOn){
                    var oGoods={
                        goodsId:igoodsId,
                        goodsTitle:igoodsTitle,
                        goodsPrice:igoodsPrice,
                        goodsImg:igoodsImg,
                        goodsNum:parseInt($("#number1").val())
                    };
                    aGoods.push(oGoods);
                }

                setCookie("sGoods",JSON.stringify(aGoods),"7","/");
                var sGoods=getCookie("sGoods");
                var num=0;
                if(sGoods!=undefined&&sGoods!='') {
                    var aGoods = JSON.parse(sGoods);
                    //遍历cookie，把数据加入购物车
                    for (var i = 0; i < aGoods.length; i++) {
                        num += aGoods[i].goodsNum;
                    };
                };
                $("#num").text(num);
            });

        }

















    };
})(jQuery);