define(function(require,exports){
	var penta=require("../jsZy/text01.js");
	penta.__proto__.moveX=function(){
		this.ball.style.left=this.Xpos+"px";
		if(this.Xon==1){
			this.Xpos+=this.speed;
		}else{
			this.Xpos-=this.speed;
		}
		if(this.Xpos+this.ball.offsetWidth>this.brWidth){
			this.Xon=0;
			this.Xpos=this.brWidth-this.ball.offsetWidth;
		}
		if(this.Xpos<0){
			this.Xon=1; 
			this.Xpos=0;
		}
	}
	
	return penta;
})