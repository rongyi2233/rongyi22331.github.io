/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-27 11:05:38
 * @version $Id$
 */
window.onload=function(){
	/*var deviceWidth=document.documentElement.clientWidth;
	document.documentElement.style.fontSize=deviceWidth/10+"px";*/
	var mySwiper=new Swiper(".swiper-container",{
		loop:true,
		autoplay:2000,
		autoplayDisableOnInteraction:false,
    	pagination: ".swiper-pagination",
	});
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getBanner.php",
		dataType:"jsonp",
		success:function(data){
			$(".banner img")[0].src=JSON.parse(data[3].goodsBenUrl)[0]
			$(".banner img")[1].src=JSON.parse(data[0].goodsBenUrl)[0]
			$(".banner img")[2].src=JSON.parse(data[1].goodsBenUrl)[0]
			$(".banner img")[3].src=JSON.parse(data[2].goodsBenUrl)[0]
			$(".banner img")[4].src=JSON.parse(data[3].goodsBenUrl)[0]
			$(".banner img")[5].src=JSON.parse(data[0].goodsBenUrl)[0]
		}
	});
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		dataType:"jsonp",
		success:function(data){
			var Html="";
			data.forEach(function(v,k){
				if(v.discount==0){
					v.discount=5;
				}
				Html+='<div class="item1"><dl><dt><img src="'+v.goodsListImg+'" alt=""></dt><dd>'+v.goodsName+'</dd><dd><b>￥'+v.price+'</b><span>￥28880</span></dd><dd>'+v.discount+'折</dd></dl><div class="add-cart"><img class="addCart" goodsId="'+v.goodsID+'" src="../img/add-cart.png"title="加入购物车"title="加入购物车"></div></div>'
			});
			$("#content").html(Html);
		}
	});
	$("#content").on("tap",".addCart",function(){
		console.log($(this));
		if(localStorage.getItem("userID")){
			$.ajax({
				url:"http://datainfo.duapp.com/shopdata/updatecar.php",
				data:{
					userID:localStorage.getItem("userID"),
					goodsID:$(this).attr("goodsId"),
					number:1
				},
				success:function(data){
					console.log(data);
					if(data==1){
						alert("加入购物车成功");
					}					
				}
			});			
		}else{
			alert("请登录");
		}
		
	});
}
