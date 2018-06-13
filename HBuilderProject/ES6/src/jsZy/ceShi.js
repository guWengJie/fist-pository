esajs.config({
	base:"",//基本路径
	alias:{
		test:"/HBuilderProject/ES6/src/jsZy/js/text.js",
//		ceShiMi:"ceShiMi.js"
	}
})
define(function(require,exports){
	var arr1=require("test");
//	var arr2=require("ceShiMi");
	arr1.say();
//	arr2.say();
})
