//head01
$(function(){
	$(".li").mouseenter(function(){
		$(".li ol").stop().show()
	})
	$(".li").mouseleave(function(){
		$(".li ol").stop().hide()
	})
	
	$(".he02>ul>li").mouseenter(function(){
		$(".he04>div").stop().show()
	})
	
	$(".he04>div").mouseleave(function(){
		$(".he04>div").stop().hide()
	})

	$(".move>ul>li").mouseenter(function(){
		$(".list").eq($(this).index()).stop().show().siblings().stop().hide();
		$(this).addClass("aaaa").siblings().removeClass("aaaa");
	})
	var cnt=0;
	setInterval(function(){
		cnt++;
		if(cnt==5){
			cnt=0;
		}
		$(".list").eq(cnt).show().siblings().hide();
		$(".move>ul>li").eq(cnt).addClass("aaaa").siblings().removeClass("aaaa");
	},3000)
	
	$(".conset>ol>li").click(function(){
		$(".conset>div>.olLi").eq($(this).index()).stop().show().siblings().stop().hide();
		$(this).addClass("aaaa").siblings().removeClass("aaaa");
	})
	
	
	$("#click").click(function(){
		$("#deng").stop().show();
	})
	
	$("#inWX").click(function(){
		$("#delu").stop().show();
		$("#deng").stop().hide();
		$("#denglu").stop().show();
	})
	
	$("#deng .bu").click(function(){
		$("#deng").stop().hide();
	})
	
	
	$("#delu .bu01").click(function(){
		$("#delu").stop().hide();
		$("#denglu").stop().hide();
		$("#deng").stop().show();
	})
	
//	$("#QQ .bu02").click(function(){
//		$("#denglu").stop().show();
//	}
	
	$("#inQQ").click(function(){
		$("#QQ").stop().show();
		$("#denglu").stop().hide();
	})
	
	$("#QQ #butt01").mouseenter(function(){
		$("#QQ #butt02").stop().show(1000);
	}).mouseleave(function(){
		$("#QQ #butt02").stop().hide(1000);
	})
	
	$("#QQ #bu02").click(function(){
		$("#QQ").stop().hide();
	})
	var cnt=0;
	$("#zhang").click(function(){
		if(cnt==0){
			cnt++;
			$("#QQ #form").stop().show();
			$("#QQ #butt01").stop().hide();
			$("#zhang").text("忘了密码？");
			$("#p1").text("帐号密码登录");
			$("#p2").remove()
			$("#p3").stop().show();
			console.log(cnt)
			
		}else{
			cnt=0;
			if($("#zhang").text()=="忘了密码？"){
				$("#zhang").text("帐号密码登录");
				location="wangJi.html";
			}
		
		}
	})
//	console.log(cnt+"4646")
	$("#sub").click(function(){
		alert("登陆ok？");
		location="millde.html";
	})
	
	$("#xia").click(function(){
		$("#xiaZai").slideDown();
	})
	$("#xiaZai button").click(function(){
		$("#xiaZai").slideUp();
	})
	

})