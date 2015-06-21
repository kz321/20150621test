	var instance_detail=null;
$(document).ready(function(){
	$.ajax({
		url: "https://163.15.192.205/vany/index.php/gcm/monitor",
		type: "POST",	
		cache: false,
		crossDomain: true,
		success: Success03,
		error: Error03,	
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		dataType: "html"					
	});
	
	console.log(localStorage.getItem('ceilmeter'));
	
	instance_detail = JSON.parse(localStorage.getItem('ceilmeter'));
	console.log(instance_detail);	

	for(var i=0;i<instance_detail['instance_number'];i++){
		$("#vm").append('<button id=VM_'+i+' onclick=save_vm(this.id)>'+instance_detail['instance_detail'][i]['display_name']+'</button>');
	}
	$("#set").trigger("create");

});

function save_vm(id)
{
	
	localStorage.setItem('vm', id);
	console.log(id);
	console.log(instance_detail);		
	for (var i=0;i<=instance_detail['instance_number'];i++)
	{
		if (id=="VM_"+i)
		{		
			localStorage.setItem('VM_name',instance_detail['instance_detail'][i]['display_name']);
			localStorage.setItem('VM_vcpus',instance_detail['instance_detail'][i]['vcpus']);
			localStorage.setItem('VM_ram',instance_detail['instance_detail'][i]['ram']);
			localStorage.setItem('VM_disk',instance_detail['instance_detail'][i]['disk']);
			localStorage.setItem('VM_image',instance_detail['instance_detail'][i]['image']);
			localStorage.setItem('VM_status',instance_detail['instance_detail'][i]['status']);	
		}
	}
	
	window.location.replace('vm_detail.html');
	
}



function Success03(data, status){
	//localStorage.setItem('ceilmeterdata',data);
	//console.log(data);
	//localStorage.setItem('VM_data',data);
	//window.location.replace('linechart.html');
	
	
	
	if(data=="Authentication required")
	{
		alert("Timeout!Please login again!");
		window.location.replace('index.html');
	}

}
function Error03(data, status)
{
	console.log(data);
} 
