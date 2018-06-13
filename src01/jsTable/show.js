define(["../jsTable/daShow.js"],function(require){
	var data=require.getUser();
	data.forEach(function(val){
		console.log(val.userID)
		var tr=document.createElement("tr")
			tr.innerHTML=`
				<td>${val.userID}</td>
				<td>${val.userName}</td>
				<td>${val.userAge}</td>
				<td>${val.userAdd}</td>
				<td><a href="#" class="btn btn-danger" id="${val.userID}">删除</a></td>
			`;
			document.querySelector("#tbo").appendChild(tr);
	})
	
	$("#tbo").on("click","a",function(){
		var id=$(this).context.id;
		var del=require.delUser(id);
		$("#tbo").children("tr").remove();
		
		data.forEach(function(val,i){
			console.log(val.userID)
			var tr=document.createElement("tr")
				tr.innerHTML=`
					<td>${val.userID}</td>
					<td>${val.userName}</td>
					<td>${val.userAge}</td>
					<td>${val.userAdd}</td>
					<td><a href="#" class="btn btn-danger" id="${val.userID}">删除</a></td>
				`;
				document.querySelector("#tbo").appendChild(tr);
		})
	})
	
	
	$("#add").click(function(){
		var obj=[];
		var usid=$("#userID").val();
		var usna=$("#userName").val();
		var usage=$("#userAge").val();
		var usadd=$("#userAdd").val();
			obj.userID=usid;
			obj.userName=usna;
			obj.userAge=usage;
			obj.userAdd=usadd;
		var add=require.addUser(obj);
		$("#tbo").children("tr").remove();

		data.forEach(function(val,i){
			console.log(val.userID)
			var tr=document.createElement("tr")
				tr.innerHTML=`
					<td>${val.userID}</td>
					<td>${val.userName}</td>
					<td>${val.userAge}</td>
					<td>${val.userAdd}</td>
					<td><a href="#" class="btn btn-danger" id="${val.userID}">删除</a></td>
				`;
				document.querySelector("#tbo").appendChild(tr);
		})
	})
})



/*define(["/HBuilderProject/ES6/src01/jsTable/daShow.js","../js/easy.templatejs.js"],function(require,exports){
	var Et=exports;
	var html=$("#table").html();
	var data=require.getUser();
	var rel=Et.template(html,{"list":data});
	document.querySelector("fieldset").innerHTML=rel;
	
	$("fieldset").on("click","a",function(){
		var id=$(this).context.id;
		var del=require.delUser(id);
		$("fieldset").children("table").remove();
		
		var data=require.getUser();
		var rel=Et.template(html,{"list":data});
		document.querySelector("fieldset").innerHTML=rel;
	})
	
	$("#add").click(function(){
		var obj=[];
		var usid=$("#userID").val();
		var usna=$("#userName").val();
		var usage=$("#userAge").val();
		var usadd=$("#userAdd").val();
			obj.userID=usid;
			obj.userName=usna;
			obj.userAge=usage;
			obj.userAdd=usadd;
		var add=require.addUser(obj);
		
		var data=require.getUser();
		var rel=Et.template(html,{"list":data});
		document.querySelector("fieldset").innerHTML=rel;
	})
})

*/