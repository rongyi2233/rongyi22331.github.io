/**
 * Created by Administrator on 2016/9/23.
 */
jQuery.noConflict();
(function($){
    $(function(){
        $("#header .title").css("display","none");
        $("#header .list").on({
            mouseenter:function(){
                $("#header .title").css("display","block")
            },
            mouseleave:function(){
                $("#header .title").css("display","none");
            }
        });
        $(".left-top dt").click(function(){
            $(".left-top").toggleClass("left-top1")
        });
        $(".brand p").click(function(){
            if($(this).text()=="收起"){
                $(this).text("更多");
            }else if($(this).text()=="更多"){
                $(this).text("收起");
            }
            $(this).toggleClass("p-active");
            $(".right-mid").toggleClass("right-mid-active");
            $(".brand dd").toggleClass("dd-active");
        });
        $(".brand dd a").click(function(){
            $(".brand dd a").removeClass("active1");
            $(this).addClass("active1");
        });
        var lis=$(".address li");
        lis.eq(0).find("a").click(function(){
            $(".city").css("display","none");
            $(".province").css("display","block");
            $(".div1>a span").text($(this).text());

        });
        lis.eq(1).find("a").click(function(){
            $(".city").css("display","block");
            $(".province").css("display","none");
            $(".div1>a b").text($(this).text());
        });
        $(".div1").on({
            mouseenter:function(){
                $(".address").css("display","block");
            },
            mouseleave:function(){
                $(".address").css("display","none");
            }
        });
        $(".bot li a").on({
            mouseenter:function(){
                $(".bot li a").removeClass("a-active");
                $(this).addClass("a-active");
            },
            mouseleave:function(){
                $(this).removeClass("a-active");
            },
            click:function(){
                $(".bot li a").removeClass("a-active1");
                $(this).addClass("a-active1");
            }
        });














    });
})(jQuery)