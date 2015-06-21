$(document).ready(function(){
	$.ajax({
					url: "https://163.15.192.205/vany/index.php/gcm/list_server",
					type: "POST",	
					cache: false,
					crossDomain: true,
					success: Success01,
					error: Error01,	
					contentType: "application/x-www-form-urlencoded; charset=utf-8",
					dataType: "html"				
					
	});
});

function Success01(data, status)
{	
	var Server_name=JSON.parse(data);
	//alert(Server_name.length);
	console.log(Server_name);
	//console.log(Server_name["server_name"][1]);
	for (var i=0;i<Server_name.length;i++)
	{
		//$("#server").append('<li><h1><class="server_list">'+Server_name[i]["server_name"]+'</h1></li>');
		$("#server").append('<button id='+Server_name[i]["server_name"]+' onclick="save_name(this.id)">'+Server_name[i]["server_name"]+'</button>');
	}
	$('#server').trigger('create');
	
	
	if(data=="Authentication required")
	{
		alert("Timeout!Please login again!");
		window.location.replace('index.html');
	}
}
function Error01(data, status)
{
	alert(data);
}

function save_name(id)
{
	//alert(id);
	localStorage.setItem('servername', id);
	//document.location.href="server_detail.html";
	window.location.replace('server_detail.html');
}