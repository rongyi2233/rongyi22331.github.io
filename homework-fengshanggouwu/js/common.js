/**
 * Created by Administrator on 2016/9/20.
 */
(function($){
    $(function(){
        $("#my-fs").on({
            mouseenter:function(){
                $("#my-fs ul").css("display","block").stop(true).animate({height:160});
            },
            mouseleave:function() {
                $("#my-fs ul").animate({height:0},function(){
                    $(this).css("display","none");
                });
            }
        });
        var a=function () {
            iIndex=-1;
            $.ajax({
                dataType: "jsonp",
                jsonp: "callback",
                data: {
                    q: $(this).val()
                },
                url: "https://suggest.taobao.com/sug?code=utf-8&_ksTS=1474439154503_1904&k=1&area=c2c&bucketid=1",
                success: function (data) {
                    var Html = "";
                    for (var i = 0; i < data.result.length; i++) {
                        Html += "<li>" + data.result[i][0] + "</li>"
                    }
                    $("#prompt")[0].innerHTML = Html;
                }
            })
        }
        var iIndex=-1;
        $("#header .tx").bind({
            input:a,
            propertychange:a,
            focus:function(){
                if(this.value==this.defaultValue){
                    this.value="";
                }
                $("#prompt").css("display","block");
            },
            blur:function(){
                if(this.value==""){
                    this.value=this.defaultValue;
                }
                $("#prompt").css("display","none")
            },
            keydown:function(evt){

                var event=evt||window.event;
                if(event.keyCode==38){
                    iIndex--;
                    if(iIndex<0){
                        iIndex=$("#prompt li").length-1;
                    }
                    $("#prompt li").removeClass("active").eq(iIndex).addClass("active");
                    this.value=$("#prompt li").eq(iIndex).text();
                    return false;
                }
                if(event.keyCode==40){
                    iIndex++;
                    if(iIndex==$("#prompt li").length){
                        iIndex=0;
                    }
                    $("#prompt li").removeClass("active").eq(iIndex).addClass("active");
                    this.value=$("#prompt li").eq(iIndex).text();
                    return false;
                }

            }
        });
        $("#prompt li").on("mouseenter",function(){
            console.log(1);
            $("#header .tx")[0].value=$(this).text();
        }
        )
        $(".lista>ul").children().on({
            mouseenter:function(){
                $(this).css({
                    background:'#A70000 url(../img/bg.jpg) no-repeat 190px center'
                });
                $(".list-content").eq($(this).index()).css("display","block");
            },
            mouseleave:function(){
                $(this).css({
                    background:""
                });
                $(".list-content").css("display","none");
            }
        })
        $(".foot-top input").on({
            focus:function(){
                $(this).css("color","#000");
                if(this.value==this.defaultValue){
                    this.value="";
                }
            },
            blur:function(){
                if(this.value==""){
                    this.value=this.defaultValue;
                    $(this).css("color","#666");
                }
            }
        });

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
})(jQuery)
