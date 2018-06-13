define(["../jsTable/daShow.js"],function(require){
	$("#tbo").on("click","a",function(){
		var id=$(this).context.id;
		var del=require.delUser(id);
		$("#tbo").children("tr").remove();
		
		require.forEach(function(val,i){
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