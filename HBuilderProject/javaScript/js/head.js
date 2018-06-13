//head01
$(function(){
	$(".li").mouseenter(function(){
		$(".li ol").show()
	})
	$(".li").mouseleave(function(){
		$(".li ol").hide()
	})
	
	$(".he02>ul>li").mouseenter(function(){
		$(".he04>div").show()
	})
	$(".he04>div").mouseleave(function(){
		$(".he04>div").hide()
	})

	$(".move>ul>li").mouseenter(function(){
		$(".list").eq($(this).index()).show().siblings().hide();
		$(this).addClass("aaaa").siblings().removeClass("aaaa");
	})
	
})