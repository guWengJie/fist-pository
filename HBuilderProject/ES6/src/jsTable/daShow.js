define(function(require,exports){
	var data=require("./data.js");
//	console.log(data)
	function User(){
		this.getUser=function(){
			return data;
		}
		this.delUser=function(id){
			data.forEach(function(val,i){
				if(val.userID==id){
					data.splice(i,1)
				}
			})
		}
		this.addUser=function(obj){
			var cnt=0;
			data.forEach(function(val,i){
//				if(obj.userID == null){
//					return "用户ID不能为空";
//				}
//				if(obj.userName == null){
//					return "用户名不能为空";
//				}
//				if(obj.userAdd == null){
//				}
//					return "用户地址不能为空";
				if(val.userID==obj.userID){
					cnt++;
					return;
				}
			})
			if(cnt==0 && obj!=null){
				data.push(obj);
			}else{
				alert("用户ID重复，请重新输入！");
			}
		}
	}
	var user=new User();
	return user;
})

