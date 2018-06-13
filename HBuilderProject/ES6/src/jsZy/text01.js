define(function(require,exports){
	function pentagram(){
		this.ball=document.querySelector("span");
		this.brWidth=window.innerWidth;
		this.brHeight=window.innerHeight;
		this.Xon=1;
		this.Xpos=0;
		this.Yon=1;
		this.Ypos=0;
		this.speed=20;
	}
	
	
	var ba=new pentagram();
	return ba;
})