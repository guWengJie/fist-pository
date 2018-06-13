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
	
	$(".da01>ul>li").click(function(){
		$(".list01>div").eq($(this).index()).show().siblings().hide();
		$(this).addClass("datalist").siblings().removeClass("datalist");
	});
	
	$(".ra01").click(function(){
		$(".list01>div:nth-of-type(1) .dao02>div").eq($(this).index()).show().siblings().hide();
	});
	
	$(".ra02").click(function(){
		$(".list01>div:nth-of-type(2) .dao02>div").eq($(this).index()).show().siblings().hide();
	});
	
	$(".imgLeft>ul>li").click(function(){
		$(".imgRight>a").eq($(this).index()).show().siblings().hide();
	});
	
//	$(".ra01").click(function(){
//		$(".list01>div:nth-of-type(2) .dao02>div").eq($(this).index()).show().siblings().hide();
//	});

	
})