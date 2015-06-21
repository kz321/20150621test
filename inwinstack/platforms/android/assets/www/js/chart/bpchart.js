//Instances VCPUs RAM Floating_IPs Security_Groups Volumes Volume_Storage
var totalInstancesUsed = parseInt(localStorage.getItem('totalInstancesUsed'));
var maxTotalInstances = parseInt(localStorage.getItem('maxTotalInstances'));
//VCPUs
var totalCoresUsed = parseInt(localStorage.getItem('totalCoresUsed'));
var maxTotalCores = parseInt(localStorage.getItem('maxTotalCores'));
//RAM
var totalRAMUsed = parseInt(localStorage.getItem('totalRAMUsed'));
var maxTotalRAMSize = parseInt(localStorage.getItem('maxTotalRAMSize'));
//Floating_IPs
var totalFloatingIpsUsed = parseInt(localStorage.getItem('totalFloatingIpsUsed'));
var maxTotalFloatingIps = parseInt(localStorage.getItem('maxTotalFloatingIps'));
//Security_Groups
var totalSecurityGroupsUsed = parseInt(localStorage.getItem('totalSecurityGroupsUsed'));
var maxSecurityGroups = parseInt(localStorage.getItem('maxSecurityGroups'));
//Volumes
var totalVolumesUsed = parseInt(localStorage.getItem('totalVolumesUsed'));
var maxTotalVolumes = parseInt(localStorage.getItem('maxTotalVolumes'));
//Volume_Storage
var totalGigabytesUsed = parseInt(localStorage.getItem('totalGigabytesUsed'));
var maxTotalVolumeGigabytes = parseInt(localStorage.getItem('maxTotalVolumeGigabytes'));			



$(document).ready(function(){ 
	var mySwiper = new Swiper('.swiper-container',{
		pagination: '.pagination',
		loop:false,
		grabCursor: true,
		paginationClickable: true
	})
	
	var bp_detail = [[totalInstancesUsed,maxTotalInstances],[totalCoresUsed,maxTotalCores],[totalRAMUsed,maxTotalRAMSize],
					[totalFloatingIpsUsed,maxTotalFloatingIps],[totalSecurityGroupsUsed,maxSecurityGroups],
					[totalVolumesUsed,maxTotalVolumes],[totalGigabytesUsed,maxTotalVolumeGigabytes]];
	
	var unit1=" 個"; //單位
	for(var i=0;i<7;i++){
		var Used = bp_detail[i][0];
		var Unused = bp_detail[i][1]-bp_detail[i][0];
		var Total = Used + Unused;
		var Percent = ((Used / Total)*100).toFixed(1);	
			if(i==0){      
				setProgress(Percent);
				$('.title').text('Instances');		
				$('#used').text('使用 : '+ Used+unit1);	
				$('#unused').text('剩餘 : '+ Unused+unit1);	
				$('#total').text('總共 : ' + Total+unit1);					
			}
			else if(i==1){
				setProgress2(Percent);
				$('.title2').text('VCPUs');
				$('#used2').text('使用 : '+ Used+unit1);	
				$('#unused2').text('剩餘 : '+ Unused+unit1);	
				$('#total2').text('總共 : ' + Total+unit1);					
			}
			else if(i==2){
				setProgress3(Percent);
				var Unit = 'MB';
				$('.title3').text('RAM');
				$('#used3').text('使用 : '+ Used + ' ' + Unit);	
				$('#unused3').text('剩餘 : '+ Unused + ' ' + Unit);	
				$('#total3').text('總共 : ' + Total + ' ' + Unit);					
			}
			else if(i==3){
				setProgress4(Percent);
				$('.title4').text('Floating IPs');
				$('#used4').text('使用 : '+ Used+unit1);	
				$('#unused4').text('剩餘 : '+ Unused+unit1);	
				$('#total4').text('總共 : ' + Total+unit1);			
			}
			else if(i==4){
				setProgress5(Percent);
				$('.title5').text('Security Groups');
				$('#used5').text('使用 : '+ Used+unit1);	
				$('#unused5').text('剩餘 : '+ Unused+unit1);	
				$('#total5').text('總共 : ' + Total+unit1);		
			}
			else if(i==5){
				setProgress6(Percent);
				$('.title6').text('Volumes');
				$('#used6').text('使用 : '+ Used+unit1);	
				$('#unused6').text('剩餘 : '+ Unused+unit1);	
				$('#total6').text('總共 : ' + Total+unit1);			
			}
			else if(i==6){
				setProgress7(Percent);
				var Unit = 'GB';
				$('.title7').text('Volume Storage');
				$('#used7').text('使用 : '+ Used + ' ' + Unit);	
				$('#unused7').text('剩餘 : '+ Unused + ' ' + Unit);	
				$('#total7').text('總共 : ' + Total + ' ' + Unit);					
			}

		//console.log(Percent+' '+bp_detail[i][0]+' '+bp_detail[i][1]+'\n');
	}
});

function setProgress(progress)
{			
		var progressBarWidth =progress*$(".container").width()/ 100;  
		$(".progressbar").width(progressBarWidth).html(progress + "%&nbsp;");
}

function setProgress2(progress)
{			
		var progressBarWidth2 =progress*$(".container2").width()/ 100;  
		$(".progressbar2").width(progressBarWidth2).html(progress + "%&nbsp;");
}	

function setProgress3(progress)
{			
		var progressBarWidth3 =progress*$(".container3").width()/ 100;  
		$(".progressbar3").width(progressBarWidth3).html(progress + "%&nbsp;");
}

function setProgress4(progress)
{			
		var progressBarWidth4 =progress*$(".container4").width()/ 100;  
		$(".progressbar4").width(progressBarWidth4).html(progress + "%&nbsp;");
}

function setProgress5(progress)
{			
		var progressBarWidth5 =progress*$(".container5").width()/ 100;  
		$(".progressbar5").width(progressBarWidth5).html(progress + "%&nbsp;");
}

function setProgress6(progress)
{			
		var progressBarWidth6 =progress*$(".container6").width()/ 100;  
		$(".progressbar6").width(progressBarWidth6).html(progress + "%&nbsp;");
}

function setProgress7(progress)
{			
		var progressBarWidth7 =progress*$(".container7").width()/ 100;  
		$(".progressbar7").width(progressBarWidth7).html(progress + "%&nbsp;");
}	
