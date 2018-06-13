define(function(require,exports){
	var penta=require("../jsZy/text01.js");
	penta.__proto__.moveY=function(){
		this.ball.style.top=this.Ypos+"px";
		if(this.Yon==1){
			this.Ypos+=this.speed;
		}else{
			this.Ypos-=this.speed;
		}
		if(this.Ypos+this.ball.offsetHeight>this.brHeight){
			this.Yon=0;
			this.Ypos=this.brHeight-this.ball.offsetHeight;
		}
		if(this.Ypos<0){
			this.Yon=1; 
			this.Ypos=0;
		}

	}
	return penta;
})