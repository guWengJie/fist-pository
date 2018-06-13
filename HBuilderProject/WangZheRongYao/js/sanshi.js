$(function(){
	$(".sanJiUl>ul>li").click(function(){
		$(".sanJiUl>.saiJi>div").eq($(this).index()).stop().show().siblings().stop().hide();
		$(this).addClass("sanShiLi").siblings().removeClass("sanShiLi");
	})
	
	$(".saiJi>div:nth-of-type(1)>ul>li").click(function(){
		$(".saiJi>div:nth-of-type(1) .acce>div").eq($(this).index()).stop().show().siblings().stop().hide();
		$(this).addClass("abc").siblings().removeClass("abc");
	})
	$(".saiJi>div:nth-of-type(2)>ul>li").click(function(){
		$(".saiJi>div:nth-of-type(2) .acce>div").eq($(this).index()).stop().show().siblings().stop().hide();
		$(this).addClass("abc").siblings().removeClass("abc");
	})
	
	$(".saiJi>div:nth-of-type(3)>ul>li").click(function(){
		$(".saiJi>div:nth-of-type(3) .acce>div").eq($(this).index()).stop().show().siblings().stop().hide();
		$(this).addClass("abc").siblings().removeClass("abc");
	})
	
	$("#janShuo .jie>ul>li").click(function(){
		$(".jieACC>div").eq($(this).index()).stop().show().siblings().stop().hide();
		$(this).addClass("xie03").siblings().removeClass("xie03");
	})
	
	$("#janShuo .jieACC>div:nth-of-type(1)>ul>li").click(function(){
		$(".jieACC>div:nth-of-type(1) .acce>div").eq($(this).index()).stop().show().siblings().stop().hide();
		$(this).addClass("abc").siblings().removeClass("abc");
	})
	$("#janShuo .jieACC>div:nth-of-type(2)>ul>li").click(function(){
		$(".jieACC>div:nth-of-type(2) .acce>div").eq($(this).index()).stop().show().siblings().stop().hide();
		$(this).addClass("abc").siblings().removeClass("abc");
	})
})
