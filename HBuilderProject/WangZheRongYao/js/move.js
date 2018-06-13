$(function(){
	$(".daoHang>ul>li").mouseenter(function(){
		$(".listLi").eq($(this).index()).show().siblings().hide();
		$(this).addClass("active").siblings().removeClass("active");
	})
	
	$(".hero01>ul>li").mouseenter(function(){
		$(this).stop().animate({
			"width":224
		}).siblings().stop().animate({
			"width":76
		})
	});
	$("#click01").click(function(){
		$("#deng").stop().show();
	})
	
	$(".ull>ul>li").mouseenter(function(){
		$(".ull .ol>ol").eq($(this).index()).show().siblings().hide();
		$(this).addClass("pe").siblings().removeClass("pe");
	})
	
	$(".fo .pin").mouseenter(function(){
		$(".fo .pin>p:nth-of-type(5)").show();
	}).mouseleave (function(){
		$(".fo .pin>p:nth-of-type(5)").hide();
	})
	
	$(".fo .pin1").mouseenter(function(){
		$(".fo .pin1>p:nth-of-type(5)").show();
	}).mouseleave (function(){
		$(".fo .pin1>p:nth-of-type(5)").hide();
	})
	
	$(".fo .pin2").mouseenter(function(){
		$(".fo .pin2>p:nth-of-type(5)").show();
	}).mouseleave (function(){
		$(".fo .pin2>p:nth-of-type(5)").hide();
	})
	
	$(".fo .pin3").mouseenter(function(){
		$(".fo .pin3>p:nth-of-type(5)").show();
	}).mouseleave (function(){
		$(".fo .pin3>p:nth-of-type(5)").hide();
	})
	
	$(".fo .pin4").mouseenter(function(){
		$(".fo .pin4>p:nth-of-type(5)").show();
	}).mouseleave (function(){
		$(".fo .pin4>p:nth-of-type(5)").hide();
	})
	
	$(".fo .pin5").mouseenter(function(){
		$(".fo .pin5>p:nth-of-type(5)").show();
	}).mouseleave (function(){
		$(".fo .pin5>p:nth-of-type(5)").hide();
	})
})