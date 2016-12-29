
(function($){
    $(function(){
        //轮播图
        var iIndex=0;
        function move(){//运动到当前下标的位置
            $(".banner-content li").animate({opacity:0},function(){
                $(this).css("display","none")
            }).eq(iIndex).stop(true).css("display","block").animate({opacity:1});
            $(".num a").removeClass("active").eq(iIndex).addClass("active");
        }
        //鼠标覆盖下面数字按钮的事件
       $(".num a").mouseenter(function(){
           iIndex=$(this).index();
           move();
       });
        //自动向左运动
        var iTimer=setInterval(function(){
            iIndex++;
            if(iIndex==$(".banner-content li").length){
                iIndex=0;
            }
            move();
        },2000);
        //鼠标覆盖图片上时停止运动，离开后继续运动
        $(".banner-content").on({
            mouseenter:function(){
                clearInterval(iTimer);
            },
            mouseleave:function(){
                iTimer=setInterval(function(){
                    iIndex++;
                    if(iIndex==$(".banner-content li").length){
                        iIndex=0;
                    }
                    move();
                },2000)
            }
        });
        //主页main里面左侧的内容轮播
        var iIndex1=1;
        $(".demo a").eq(1).click(function(){
            iIndex1++;
            if(iIndex1==3){
                $(".demo .div2").css("left","0");
                iIndex1=1
            }
            $(".demo .div2").stop(true).animate({
                left:-iIndex1*208
            });
        });
        $(".demo a").eq(0).click(function(){
            iIndex1--;
            if(iIndex1==0){
                $(".demo .div2").css("left",-3*208);
                iIndex1=2
            }
            $(".demo .div2").stop(true).animate({
                left:-iIndex1*208
            });
        });
        var iTimer1=setInterval(function(){
            iIndex1++;
            if(iIndex1==3){
                $(".demo .div2").css("left","0");
                iIndex1=1
            }
            $(".demo .div2").stop(true).animate({
                left:-iIndex1*208
            });
        },2000);
        $(".demo").on({
            mouseenter:function(){
                clearInterval(iTimer1);
            },
            mouseleave:function(){
                iTimer1=setInterval(function(){
                    iIndex1++;
                    if(iIndex1==3){
                        $(".demo .div2").css("left","0");
                        iIndex1=1
                    }
                    $(".demo .div2").stop(true).animate({
                        left:-iIndex1*208
                    });
                },2000)
            }
        });

        //中间的轮播部分
        var iIndex2=1;
        $(".direction .prev").click(
            function(){
                iIndex2--;
                if(iIndex2==0){
                    $(".mid2 .mid2-wrap").css("left",-5040);
                    iIndex2=$(".mid2 li").length-2
                }
                $(".mid2 .mid2-wrap").stop(true).animate({
                    left:-iIndex2*720
                });
            }
        );
        $(".direction .next").click(
            function(){
                iIndex2++;
                if(iIndex2==$(".mid2 li").length-1){
                    $(".mid2 .mid2-wrap").css("left","0");
                    iIndex2=1
                }
                $(".mid2 .mid2-wrap").stop(true).animate({
                    left:-iIndex2*720
                });
            }
        );
        var iTimer2=setInterval(function(){
            iIndex2++;
            if(iIndex2==$(".mid2 li").length-1){
                $(".mid2 .mid2-wrap").css("left","0");
                iIndex2=1
            }
            $(".mid2 .mid2-wrap").stop(true).animate({
                left:-iIndex2*720
            });
        },2000);
        $(".mid2").on({
            mouseenter:function(){
                clearInterval(iTimer2);
            },
            mouseleave:function(){
                iTimer2=setInterval(function(){
                    iIndex2++;
                    if(iIndex2==$(".mid2 li").length-1){
                        $(".mid2 .mid2-wrap").css("left","0");
                        iIndex2=1
                    }
                    $(".mid2 .mid2-wrap").stop(true).animate({
                        left:-iIndex2*720
                    });
                },2000);
            }
        });












    });
})(jQuery)