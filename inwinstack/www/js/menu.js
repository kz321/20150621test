//var HostURL = "http://163.15.192.205/~hlg1988/app_login.php";
//var HostURL = "https://163.15.192.205/vany/index.php/gcm/login";

	$(document).ready(function(){	
	
		console.log(localStorage.getItem('token'));
		console.log(localStorage.getItem('key'));
		if(localStorage.getItem('token')=='')
			window.location.replace('index.html');
		
		console.log(localStorage.getItem('login'));
		
		var key = localStorage.getItem('key');
		for(var i=0;i<=key;i++){
			var id = localStorage.getItem(('id'+i));
			var name = localStorage.getItem(('name'+i));
//				console.log(localStorage.getItem(('id'+i)) + " " +localStorage.getItem(('name'+i)));
			console.log(id + " " + name);					
			
			$('#tenant').append($("<option></option>").attr("value", id).text(name));
			
		}
		$('#tenant').selectmenu("refresh", true);
		
		var request = $.ajax({
				url: "https://163.15.192.205/vany/index.php/gcm/login",
				type: "POST",	
				cache: false,
				crossDomain: true,
				success: onSuccess2,
				error: onError,			
				data: {
					tenants_Name:$("#tenant").find(":selected").text(),
					tenants_Id:$("#tenant").find(":selected").val(),
					token:localStorage.getItem('token')
				},
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				dataType: "html"
		});

		if(localStorage.getItem('name')){
			$("#username").val(localStorage.getItem('name'));
			$("#psw").val(localStorage.getItem('password'));
		}
		
		
		$("#tenant").change(function(){
	
			var request = $.ajax({
				url: "https://163.15.192.205/vany/index.php/gcm/login",
				type: "POST",	
				cache: false,
				crossDomain: true,
				success: onSuccess2,
				error: onError,			
				data: {
					tenants_Name:$("#tenant").find(":selected").text(),
					tenants_Id:$("#tenant").find(":selected").val(),
					token:localStorage.getItem('token')
				},
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				dataType: "html"
			});				
		
		});
		
		$("#vm_info").click(function(){
	
			var request = $.ajax({
				url: "https://163.15.192.205/vany/index.php/gcm/monitor",
				type: "POST",	
				cache: false,
				crossDomain: true,
				success: onSuccess3,
				error: onError,			
				data: {
					token:localStorage.getItem('token'),
					tenants_Name:$("#tenant").find(":selected").text()
				},
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				dataType: "html"
			});				
		});
		
		$("#ceilmeter").click(function(){
	
			var request = $.ajax({
				url: "https://163.15.192.205/vany/index.php/gcm/monitor",
				type: "POST",	
				cache: false,
				crossDomain: true,
				success: onSuccess4,
				error: onError,			
				data: {
					token:localStorage.getItem('token'),
					tenants_Name:$("#tenant").find(":selected").text()
				},
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				dataType: "html"
			});				
		});
		
		
		$("#callAjaxForm").submit(function(){
	//		alert("#callAjaxForm");
			select();
			return false;
		});
		
		$('#out').click(function(){
			
			if (localStorage.getItem('re_account')='on')
			{
				localStorage.setItem('token','');
				localStorage.setItem('re_account','on');
				localStorage.setItem('password','');
			}
			if (localStorage.getItem('re_password')='on')
			{
				localStorage.setItem('token','');
				localStorage.setItem('re_account','on');
				localStorage.setItem('re_password','on');
			}
			
		});
	});

function debug(a)
{
	console.log(a);	
}

function onError(data, status)
{
	console.log(data);
} 


function onSuccess2(data, status){
	debug(data);
	localStorage.setItem('totalInstancesUsed', jQuery.parseJSON(data)['compute_limits']['totalInstancesUsed']);
	localStorage.setItem('totalCoresUsed', jQuery.parseJSON(data)['compute_limits']['totalCoresUsed']);
	localStorage.setItem('totalRAMUsed', jQuery.parseJSON(data)['compute_limits']['totalRAMUsed']);
	localStorage.setItem('totalFloatingIpsUsed', jQuery.parseJSON(data)['compute_limits']['totalFloatingIpsUsed']);
	localStorage.setItem('totalSecurityGroupsUsed', jQuery.parseJSON(data)['compute_limits']['totalSecurityGroupsUsed']);
	
	localStorage.setItem('maxTotalInstances', jQuery.parseJSON(data)['compute_limits']['maxTotalInstances']);
	localStorage.setItem('maxTotalCores', jQuery.parseJSON(data)['compute_limits']['maxTotalCores']);
	localStorage.setItem('maxTotalRAMSize', jQuery.parseJSON(data)['compute_limits']['maxTotalRAMSize']);
	localStorage.setItem('maxTotalFloatingIps', jQuery.parseJSON(data)['compute_limits']['maxTotalFloatingIps']);
	localStorage.setItem('maxSecurityGroups', jQuery.parseJSON(data)['compute_limits']['maxSecurityGroups']);
	
	localStorage.setItem('totalVolumesUsed', jQuery.parseJSON(data)['blockstorage_limits']['totalVolumesUsed']);
	localStorage.setItem('totalGigabytesUsed', jQuery.parseJSON(data)['blockstorage_limits']['totalGigabytesUsed']);
	
	localStorage.setItem('maxTotalVolumes', jQuery.parseJSON(data)['blockstorage_limits']['maxTotalVolumes']);
	localStorage.setItem('maxTotalVolumeGigabytes', jQuery.parseJSON(data)['blockstorage_limits']['maxTotalVolumeGigabytes']);
	
}
function onSuccess3(data, status){
	debug(data);
	if(data=='NoData'){
		alert('NoData');
	}else{
		localStorage.setItem('ceilmeter',data);
		window.location.replace('vm_info.html');
	}
}

function onSuccess4(data, status){
	debug(data);
	if(data=='NoData'){
		alert('NoData');
	}else{
		localStorage.setItem('ceilmeter',data);
		window.location.replace('ceilmeter.html');
	}
}
