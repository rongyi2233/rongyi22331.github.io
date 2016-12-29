//页面跳转的实现
function switchPage(url){
	mui.openWindow({
	    url:url,
	    id:url,
	    styles:{
	      /*top:newpage-top-position,//新页面顶部位置
	      bottom:newage-bottom-position,//新页面底部位置
	      width:newpage-width,//新页面宽度，默认为100%
	      height:newpage-height,//新页面高度，默认为100%
	      ......*/
	    },
	    extras:{
	      /*.....//自定义扩展参数，可以用来处理页面间传值*/
	    },
	    createNew:false,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
	    show:{
	      autoShow:true,//页面loaded事件发生后自动显示，默认为true
	      aniShow:"slide-in-right",//页面显示动画，默认为”slide-in-right“；
	      duration:100//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
	    },
	    waiting:{
	      autoShow:true,//自动显示等待框，默认为true
	      title:'加载中...',//等待对话框上显示的提示内容
	      /*options:{
	        width:waiting-dialog-widht,//等待框背景区域宽度，默认根据内容自动计算合适宽度
	        height:waiting-dialog-height,//等待框背景区域高度，默认根据内容自动计算合适高度
	        ......
	      }*/
	    }
	});
	/*return false;*/
}
$(function(){
	//底部切换按钮
	$("body").on("touchend",".simulationA",function(){
		var url=$(this).attr("data-url");
		console.dir($(this).attr("data-url"));
		if(url){
			switchPage(url);
		}
	});
	//初始化复选框背景
	$("input[type=checkbox]").each(function(k,v){
		if(v.checked){			
			$(v).parent().find("img")[0].src="../img/xuanze_b@2x.png";
		}else{
			$(v).parent().find("img")[0].src="../img/xuanze@2x.png";
		}
	});
	//复选框点击事件
	$("label").on("touchend",function(){		
		if($(this).find("input")[0].checked){
				$(this).find("img")[0].src="../img/xuanze@2x.png";
			}else{
				$(this).find("img")[0].src="../img/xuanze_b@2x.png";
			}
	});
	//增加和减少按钮的点击事件
	var minNum=5;
	var maxNum=10;
	$("button").on("touchend",function(){
		var nextVal=$(this).next().val();
		var prevVal=$(this).prev().val();
		if(nextVal==minNum){
			$("#remind").html("已是起订量").show(function(){
				setTimeout(function(){
					$("#remind").hide();
				},2000)
			})
		}else if(prevVal==maxNum){
			$("#remind").html("已达到限定").show(function(){
				setTimeout(function(){
					$("#remind").hide();
				},2000)
			})
		}
	})
})
	