$(function(){
	$("#App").mouseenter(function(){
		$("#box .qq>div:nth-of-type(3)").stop().show();
	}).mouseleave(function(){
		$("#box .qq>div:nth-of-type(3)").stop().hide();
	})
})
