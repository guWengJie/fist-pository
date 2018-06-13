$(function(){
	$(".daoHang>ul>li").mouseenter(function(){
		$(".listLi").eq($(this).index()).show().siblings().hide();
		$(this).addClass("active").siblings().removeClass("active");
	})
	$(".dao>ul>li").mouseenter(function(){
		$(".lll").eq($(this).index()).show().siblings().hide();
		$(this).addClass("active").siblings().removeClass("active");
	})
	var cnt=0;
	$(".ol>ul>li").mouseenter(function(){
		$(".KPLB").eq($(this).index()).show().siblings().hide();
//		$("#aa>li").eq($(this).index()).css("background-image","url(../王者/赛事中心/3.jpg)");
		$(this).addClass("spac").show().siblings().removeClass("spac").show();
	})
	
})