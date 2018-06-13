define(function(require,exports){
	var Et=require("../js/easy.templatejs.js");
//	console.log(Et);//
	var html=$("#table").html();
	var user=require("./daShow.js");
	var data=user.getUser();
	var rel=Et.template(html,{"list":data});
	document.querySelector("fieldset").innerHTML=rel;
	
	$("fieldset").on("click","a",function(){
		var id=$(this).context.id;
		var del=user.delUser(id);
		$("fieldset").children("table").remove();
		var data=user.getUser();
		var rel=Et.template(html,{"list":data});
		document.querySelector("fieldset").innerHTML=rel;
	})
	
	$("#add").click(function(){
		var obj=[];
		var usid=$("#userID").val();
		var usna=$("#userName").val();
		var usage=$("#userAge").val();
		var usadd=$("#userAdd").val();
//		console.log($("#userID").val());
			obj.userID=usid;
			obj.userName=usna;
			obj.userAge=usage;
			obj.userAdd=usadd;
		var add=user.addUser(obj);
		
		var data=user.getUser();
		var rel=Et.template(html,{"list":data});
		document.querySelector("fieldset").innerHTML=rel;
	})
})

