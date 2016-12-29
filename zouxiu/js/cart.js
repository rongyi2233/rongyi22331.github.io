/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-29 13:26:09
 * @version $Id$
 */
window.onload=function(){
	$("footer ul li").removeClass("active").eq(2).addClass("active");
	var Html="";
	var Html1="";
	var totleNum=0;
	var money=0;
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getCar.php",
		dataType:"jsonp",
		data:{
			userID:localStorage.getItem("userID"),
		},
		success:function(data){
			if(data){
				
				data.forEach(function(v,k){
					totleNum+=parseInt(v.number);
					money+=v.price*v.number;
					Html1+='<dl><dt><img src="'+v.goodsListImg+'"></dt><dd><span>'+v.goodsName+'</span><b><img src="../img/del.png"></b></dd><dd><span>单价:<b>¥'+v.price+'</b></span><em>L</em></dd><dd><span>数量：</span><em><a href="javascript:;">-</a><input type="text"value="'+v.number+'"><a href="javascript:;">+</a></em></dd></dl>';
				});
				Html='<div class="ititle"><div class="item1">商品数量：<span>'+totleNum+'</span></div><div class="item2">应付总额（不含运费）：<span>¥'+money+'</span></div></div><div class="content"></div>';
				$("section").html(Html);
				$("section .content").html(Html1);
			}else{
				Html='<div class="null"><P>您的购物车空空空~</P><img src="../img/null.png" alt=""><button>去逛逛</button></div>';
				$("section").html(Html);
			}
			
		}
	});
}
