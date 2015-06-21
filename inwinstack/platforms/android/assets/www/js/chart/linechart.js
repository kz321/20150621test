var ceilmeter = jQuery.parseJSON(localStorage.getItem('ceilmeterdata'));

var app = angular.module("nvd3TestApp", ['nvd3ChartDirectives']);
//value[順序,資料量] key顯示於圖中資料框的資料名稱
function ExampleCtrl($scope){
/*
	for(var i=0;i<6;i++){
		console.log(ceilmeter[i]['counter_unit']);
		console.log(ceilmeter[i]['counter_volume']);
		console.log(ceilmeter[i]['recorded_at']);		
	}
*/
	var volume = [];
	for(var i=0;i<6;i++){
		var value = ceilmeter[i]['counter_volume'];	
		console.log((value.toString()).length);
		//slice
		if((value.toString()).length>6)
			console.log((value.toString()).slice(0,-10));
		else
			console.log(value);
		((value.toString()).length>6)?volume[i]=(value.toString()).slice(0,-10):volume[i]=value;
	}

	$scope.exampleData = 
		[{
			"key": ("單位(" + ceilmeter[0]['counter_unit'] + ")"),
			"values": [
				[1,volume[5]],
				[2,volume[4]],
				[3,volume[3]],
				[4,volume[2]],
				[5,volume[1]],
				[6,volume[0]],
			]
		}];
		
	//configuration examples
	$scope.xAxisTickFormat = function(){
		return function(d){
			//console.log(d + '...');
			var detail = (ceilmeter[6-d]['recorded_at']).split('.');		
			return detail[0];
		}
	}
	$('#unit').text('單位(' + ceilmeter[0]['counter_unit'] + ")");
	var time = [];
/*	
	for(var i=0;i<6;i++){
		var a = (ceilmeter[5-i]['recorded_at']).split('.');
		time[i] = a[0]
		console.log(time[i]);
		$('#detail').append('<li>第' + (i+1) + '次抓取值 : ' + volume[i] + ' ' + ceilmeter[0]['counter_unit'] + '</li>').listview('refresh');
	}	
*/	
	//console.log((ceilmeter[0]['recorded_at']));
}