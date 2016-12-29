/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-05 14:27:42
 * @version $Id$
 */
window.onload=function(){
	$("section input").blur(function(){
		var reg=/^\w{6,16}$/;
		if($(this).hasClass('tx1')){
			if(!$(".tx1").val()){
				alert("账号不能为空");return;
			}else if(!reg.test($(".tx1").val())){
				alert("请输入6-16位的数字或字母");return;
			}
		}else if($(this).hasClass('tx2')){
			if(!$(".tx2").val()){
				alert("密码不能为空");return;
			}else if(!reg.test($(".tx2").val())){
				alert("请输入6-16位的数字或字母");return;
			}
		}else if($(this).hasClass('tx3')){
			if($(".tx3").val()!=$(".tx2").val()){
				alert("两次输入的密码不一致");return;
			}
		}	
	});
	$(".btn").tap(function(){
		var reg=/^\w{6,16}$/;
		if(!$(".tx1").val()){
			alert("账号不能为空");return;
		}else if(!reg.test($(".tx1").val())){
			alert("请输入6-16位的数字或字母");return;
		}else if(!$(".tx2").val()){
			alert("密码不能为空");return;
		}else if(!reg.test($(".tx2").val())){
			alert("请输入6-16位的数字或字母");return;
		}else if($(".tx3").val()!=$(".tx2").val()){
			alert("两次输入的密码不一致");return;
		}else{
			$.ajax({
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					status:"register",
					userID:$(".tx1").val(),
					password:$(".tx2").val()
				},
				success:function(data){
					if(data==0){
						alert("该用户名已经被注册");
					}else if(data==1){
						alert("注册成功");
					}else{
						alert("注册出错");
					}
				}
			});
		}
		return false;
	});
	$("header button").tap(function(){
		location.href="login.html";
	});




}
