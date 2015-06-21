
	$(document).ready(function(){			
		$("#result").append("deviceID = " + localStorage.getItem('deviceID'));		

		//$("#re_account").val('off');
		//$("#re_password").val('off');
		
		if(localStorage.getItem('re_account')=='off'){
			$("#username").val('');
		}else{
			$("#username").val(localStorage.getItem('name'));
			$("#re_account").val("on").flipswitch("refresh");
		}
			
		if(localStorage.getItem('re_password')=='off'){
			$("#psw").val('');	
		}else{
			$("#psw").val(localStorage.getItem('password'));
			$("#re_password").val("on").flipswitch("refresh");
			$("#username").val(localStorage.getItem('name'));
			$("#re_account").val("on").flipswitch("refresh");
		}
		
		//帳號密碼有打開,token有記錄才會保持登入狀態
		if(localStorage.getItem('re_account')=='on' && localStorage.getItem('re_password')=='on' && localStorage.getItem('token')!=''){	
			window.location.replace('menu.html');
		}
		
		//console.log($('#re_account').val());	
		//console.log($('#re_password').val());			
		
		$("#login").click(function(){
			if($("#username").val() == "" || $("#psw").val() == "" ){
				alert( "請輸入完整資料!!");
			}else {
				window.sessionStorage["id"] = $("#username").val();
				$.ajax({
					url: "https://163.15.192.205/vany/index.php/gcm/login",
					type: "POST",	
					cache: false,
					crossDomain: true,
					success: onSuccess,
					error: onError,			
					data: {
						user_id:$("#username").val(),
						password:$("#psw").val()
					},
					contentType: "application/x-www-form-urlencoded; charset=utf-8",
					dataType: "html"
				});	
				
			}
		});	//http://127.0.0.1/nas/index.php/RESTAPI/auth/format/json
		
	});		

		
function debug(a)
{
	console.log(a);	
}

function onError(data, status)
{
	alert("連線異常");
	console.log(data);
} 

function onSuccess(data, status)
{
	res = jQuery.parseJSON(data);
	debug(res);
	if (res['message']!="error")
	{
		for(var key in res['tenants']){
		
			//$('#tenant').append($("<option></option>").attr("value", res['tenants'][key]['id']).text(res['tenants'][key]['name']));
			localStorage.setItem("key", key);
			localStorage.setItem("id"+key, res['tenants'][key]['id']);
			localStorage.setItem("name"+key, res['tenants'][key]['name']);
			localStorage.setItem('token', res['token']);
			//console.log(localStorage.getItem('tenant') + ' ' + key);
		}
		//保存登入狀態
		localStorage.setItem('name',$("#username").val());
		localStorage.setItem('password',$("#psw").val());
		localStorage.setItem('re_account',$('#re_account').val());
		localStorage.setItem('re_password',$('#re_password').val());
		window.location.replace('menu.html');
	}
	else{
		alert("帳號或密碼錯誤");
	}
}
		
		

