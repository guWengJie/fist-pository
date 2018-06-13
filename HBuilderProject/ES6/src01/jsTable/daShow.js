define(["../jsTable/data.js"],function(data){
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
	var us=new User();
	return us;
})
