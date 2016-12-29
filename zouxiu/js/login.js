/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-29 17:45:46
 * @version $Id$
 */
    window.onload=function(){
        $("footer ul li").removeClass("active").eq(3).addClass("active");
        $(".btn").tap(function(){
		$.ajax({
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					status:"login",
					userID:$(".tx1").val(),
					password:$(".tx2").val()
				},
				success:function(data){
					console.log(data);
					if(data==0){
						alert("该用户名不存在");
					}else if(data==2){
						alert("用户名和密码不符");
					}else{
						localStorage.setItem("userID",$(".tx1").val());
						alert("登录成功");
					}
				}
			});	
		});





    }