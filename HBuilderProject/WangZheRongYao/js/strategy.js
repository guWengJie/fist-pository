$(function(){
	$(".hero01>ul>li").mouseenter(function(){
		console.log(cnt)
		$(this).stop().animate({
			"width":224
		}).siblings().stop().animate({
			"width":76
		})
	});

	$(".hero01>ul>li").mouseleave(function(){
			$(this).stop().animate({
			"width":200
		})
	});	
	
	$(".doLe>ul>li").mouseenter(function(){
		$(".doLe>div>a").eq($(this).index()).show().siblings().hide();
		$(this).addClass("doLeLi").siblings().removeClass("doLeLi");
	});
	var cnt=0;
	setInterval(function(){
		cnt++;
		if(cnt==6){
			cnt=0;
		}
		$(".doLe>div>a").eq(cnt).show().siblings().hide();
		$(".doLe>ul>li").eq(cnt).addClass("doLeLi").siblings().removeClass("doLeLi");
	},2000)
	
	$(".doRi>ol>li").mouseenter(function(){
		$(".doRi02>div").eq($(this).index()).show().siblings().hide();
		$(this).addClass("doRiLi").siblings().removeClass("doRiLi");
	});
	
	$(".doRi>ul>li").mouseenter(function(){
		$(".doRi02>div").eq($(this).index()).show().siblings().hide();
		$(this).addClass("doRiLi01").siblings().removeClass("doRiLi01");
	});
	

	$(".Left ul>li").mouseenter(function(){
		$(".Left .bian>ol").eq($(this).index()).show().siblings().hide();
		$(this).addClass("LIS").siblings().removeClass("LIS");
	});
	
	$(".Right ul>li").mouseenter(function(){
		$(".Right .bian01>div").eq($(this).index()).show().siblings().hide();
		$(this).addClass("LIS").siblings().removeClass("LIS");
	});
	
	$(".DIVCS>ol>li").mouseenter(function(){
		$(".DIVCS>div>a").eq($(this).index()).show().siblings().hide();
		$(this).addClass("cl").siblings().removeClass("cl");
//		$(this).addClass("img").siblings().removeClass("img");
	});


	$("#click01").click(function(){
		$("#deng").stop().show();
	})
	
})