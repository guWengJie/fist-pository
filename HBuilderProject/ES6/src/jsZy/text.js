define(function(require,exports){
	var arr1=require("../jsZy/text02.js");
	var arr2=require("../jsZy/text03.js");
	setInterval(function(){
		arr1.moveX();
		arr2.moveY();
	},102)
})
