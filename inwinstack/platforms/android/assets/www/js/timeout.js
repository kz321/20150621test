function logout(){ 
	localStorage.setItem('token', '');
	alert("系統已登出!"); 
	location="index.html"; 
} 

function reload(){
	location.reload();
}


function loginSuccess(data, status){
	res = jQuery.parseJSON(data);
	localStorage.setItem('token', res['token']);
}

function loginError(data, status){
	console.log(data);
	localStorage.setItem('token', '');
	window.location.replace('index.html');
}

$.ajax({
	url: "https://163.15.192.205/vany/index.php/gcm/login",
	type: "POST",	
	cache: false,
	crossDomain: true,
	success: loginSuccess,
	error: loginError,			
	data: {
		user_id:localStorage.getItem('name'),
		password:localStorage.getItem('password')
	},
	contentType: "application/x-www-form-urlencoded; charset=utf-8",
	dataType: "html"
});
var re_account = localStorage.getItem('re_account');
var re_password = localStorage.getItem('re_password');
var timing = 10*60*1000;//定時 分鐘*60秒*百毫秒
(re_account=='on'&&re_password=='on')?window.setInterval("reload()",timing,true):window.setInterval("logout()",timing,true); 
//window.setInterval("logout()",1*10*1000); 