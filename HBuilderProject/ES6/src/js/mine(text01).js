define(function(require,exports){
//	var arr=[];
//	var obj={
//		addArr:function(obj){
//			arr.push(obj);
//		},
//		showArr:function(){
//			for (var i=0;i<=arr.length;i++) {
//				console.log(arr[i]);
//			}
//		},
//		sizeArr:function(){
//			console.log(arr.length);
//		}
//		
//	}
	
	function User(){
		this.arr=[];
		this.addArr=function(obj){
			arr.push(obj);
		};
		
	}
	var user=new User();
	return user;
	
})