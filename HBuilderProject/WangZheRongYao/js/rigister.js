$(function(){
	var cnt=0;
	setInterval(function(){
		cnt++;
		if(cnt==3){
			cnt=0;
		}
		$("li").eq(cnt).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
		
	},2000)
	
	
})