var meter = "<ul data-role='listview' ><li><a herf='#' class='meter' id='cpu_util'>平均CPU使用率</a></li><li><a herf='#' id='disk.read.requests'>硬碟讀取數</a></li><li><a herf='#' id='disk.read.requests.rate'>硬碟平均讀取率</a></li><li><a herf='#' id='disk.write.requests'>硬碟寫入數</a></li><li><a herf='#' id='disk.write.requests.rate'>硬碟平均寫入率</a></li><li><a herf='#' id='disk.read.bytes'>硬碟讀取速度</a></li><li><a herf='#' id='disk.read.bytes.rate'>硬碟平均讀取速度</a></li><li><a herf='#' id='disk.write.bytes'>硬碟寫入速度</a></li><li><a herf='#' id='disk.write.requests.rate'>硬碟平均寫入速度</a></li><li><a herf='#' id='network.incoming.bytes'>網路接收流量</a></li><li><a herf='#' id='network.incoming.bytes.rate'>平均網路接收流量</a></li><li><a herf='#' id='network.outgoing.bytes'>網路傳輸流量</a></li><li><a herf='#' id='network.outgoing.bytes.rate'>平均網路傳輸流量</a></li><li><a herf='#' id='network.incoming.packets'>網路接收封包數</a></li><li><a herf='#' id='network.incoming.packets.rate'>平均網路接收封包數</a></li><li><a herf='#' id='network.outgoing.packets'>網路傳輸封包數</a></li><li><a herf='#' id='network.outgoing.packets.rate'>平均網路傳輸封包數</a></li></ul>";

$(document).ready(function(){

	var instance_detail = jQuery.parseJSON(localStorage.getItem('ceilmeter'));
	console.log(instance_detail);				
	for(var i=0;i<instance_detail['instance_number'];i++){
		if(instance_detail['instance_detail'][i]['status']=="active"){	
			var content = "<div data-role='collapsible' data-collapsed-icon='false' id='"+i+"'><h3><img src='css/Img/green.PNG' width='20' height='20'> "+instance_detail['instance_detail'][i]['display_name']+"</h3><p>"+meter+"</p></div>";
		}
		else{
			var content = "<div data-role='collapsible' data-collapsed-icon='false' id='"+i+"'><h3><img src='css/Img/red.PNG' width='20' height='20'>"+instance_detail['instance_detail'][i]['display_name']+"</h3></div>"
		}
		$("#set").append( content );										
	}
	$("#set").trigger("create");
	/*$("li>a").click(function(){
		console.log($(this).attr('id')+" "+$(this).parents("div").parents("div").attr('id'));		

	});*/	
	
	$("li>a").click(function(){		
		//onsole.log($(this).text());
		localStorage.setItem('ceilmeter_title',$(this).text());
		var request = $.ajax({
					//url: 'http://163.15.192.205/~hlg1988/ceilmeter.php',
					url: "https://163.15.192.205/vany/index.php/gcm/monitor",
					type: "POST",	
					cache: false,
					crossDomain: true,
					success: onSuccess,
					error: onError,			
					data: {
						meter:$(this).attr('id'),
						resource_id:instance_detail['instance_detail'][$(this).parents("div").parents("div").attr('id')]['resource_id'],
						tenantToken:instance_detail['tenantToken'],						
					},
					contentType: "application/x-www-form-urlencoded; charset=utf-8",
					dataType: "html"				
					
				});				
	}); 
});
function onSuccess(data, status){
	localStorage.setItem('ceilmeterdata',data);
	//console.log(data+'...');
	window.location.replace('linechart.html');
	
	
	if(data=="Authentication required")
	{
		alert("Timeout!Please login again!");
		window.location.replace('index.html');
	}

}
function onError(data, status)
{
	console.log(data);
} 