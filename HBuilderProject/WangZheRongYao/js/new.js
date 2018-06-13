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