/**
 * Created by Administrator on 2016/9/26.
 */
window.onload=function(){
    var reg1=/^1[3,5,7,8][0-9]{9}$/;
    var reg3=/^[0-9a-zA-Z]{1,}@[0-9a-zA-Z]{1,}$/;
    var reg4=/^\w{6,20}$/;
    $("#inp1").blur(function(){
        if($(this).val()==""){
            $(".reg-right .item1 span").text("手机号码不能为空").css("color","#f00");return;
        };
        if(!reg1.test($(this).val())){
            $(".reg-right .item1 span").text("请输入正确的手机号码").css("color","#f00");return;
        }else{
            $(".reg-right .item1 span").text("手机号码输入正确").css("color","#0f0");
        }
    });

    $("#inp2").blur(function(){
        if($(this).val()==""){
            $(".reg-right .item2 span").text("验证码不能为空").css("color","#f00");return;
        }else{
            $(".reg-right .item2 span").text("验证码输入正确").css("color","#0f0");
        }
    });



    $("#inp3").blur(function(){
        if($(this).val()==""){
            $(".reg-right .item3 span").text("邮箱不能为空").css("color","#f00");return;
        };
        if(!reg3.test($(this).val())){
            $(".reg-right .item3 span").text("请输入正确格式的邮箱").css("color","#f00");return;
        }else{
            $(".reg-right .item3 span").text("邮箱输入正确").css("color","#0f0");
        }
    });



    $("#inp4").blur(function(){
        if($(this).val()==""){
            $(".reg-right .item4 span").text("密码不能为空").css("color","#f00");return;
        };
        if(!reg4.test($(this).val())){
            $(".reg-right .item4 span").text("请输入6-20位的密码").css("color","#f00");return;
        }else{
            $(".reg-right .item4 span").text("密码输入正确").css("color","#0f0");
        }
    });

    $("#inp5").blur(function(){
        if($(this).val()==""){
            $(".reg-right .item5 span").text("密码不能为空").css("color","#f00");return;
        };
        if($(this).val()!=$("#inp4").val()){
            $(".reg-right .item5 span").text("两次密码输入不一致").css("color","#f00");return;
        }else{
            $(".reg-right .item5 span").text("密码输入一致").css("color","#0f0");
        }
    });


    $("#submit").click(function(){
        if($("#inp1").val()==""){
            $(".reg-right .item1 span").text("手机号码不能为空").css("color","#f00");return;
        };
        if(!reg1.test($("#inp1").val())){
            $(".reg-right .item1 span").text("请输入正确的手机号码").css("color","#f00");return;
        };

        if($("#inp2").val()==""){
            $(".reg-right .item2 span").text("验证码不能为空").css("color","#f00");return;
        };

        if($("#inp3").val()==""){
            $(".reg-right .item3 span").text("邮箱不能为空").css("color","#f00");return;
        };
        if(!reg3.test($("#inp3").val())){
            $(".reg-right .item3 span").text("请输入正确格式的邮箱").css("color","#f00");return;
        };
        if($("#inp4").val()==""){
            $(".reg-right .item4 span").text("密码不能为空").css("color","#f00");return;
        };
        if(!reg4.test($("#inp4").val())){
            $(".reg-right .item4 span").text("请输入6-20位的密码").css("color","#f00");return;
        };
        if($("#inp5").val()==""){
            $(".reg-right .item5 span").text("密码不能为空").css("color","#f00");return;
        };
        if($("#inp5").val()!=$("#inp4").val()){
            $(".reg-right .item5 span").text("两次密码输入不一致").css("color","#f00");return;
        };
        if(!$("#inp6")[0].checked){
            alert("您必须同意协议后才可注册为新用户")
        }
        else{
            setCookie("username",$("#inp1").val(),7,"/");
            setCookie("password",$("#inp4").val(),7,"/");
            alert("恭喜您，注册成功");
        }

    });
}

