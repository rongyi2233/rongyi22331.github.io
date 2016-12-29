/**
 * Created by Administrator on 2016/9/26.
 */
window.onload=function(){
    var reg2=/^\w{6,20}$/;
    $("#oinp1").blur(function(){
        if($(this).val()==""){
            $(".login-right .item1 span").text("不能为空").css("color","#f00");return;
        }else{
            $(".login-right .item1 span").text("OK").css("color","#0f0")
        }

    });
    $("#oinp2").blur(function(){
        if($(this).val()==""){
            $(".login-right .item2 span").text("不能为空").css("color","#f00");return;
        };
        if(!reg2.test($(this).val())){
            $(".login-right .item2 span").text("请输入6-20位密码").css("color","#f00");return;
        }else{
            $(".login-right .item2 span").text("OK").css("color","#0f0")
        }

    });
    $("#land").click(function(){
        if($("#oinp1").val()==getCookie("username")&&$("#oinp2").val()==getCookie("password")){
            alert("登陆成功");
            window.location.href="index.html";
        }else{
            alert("账号或密码错误")
        }
    });











}
