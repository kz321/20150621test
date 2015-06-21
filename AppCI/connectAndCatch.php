<?php

	function catchData()
	{
		include("curl.php");
		
	`   mysql_connect("163.15.192.174","root","0000") or die("Could not connect:" . mysql_error());
		mysql_select_db("opendata") or die("Could not select database");
		$sql = "SELECT * FROM attractions ";
		mysql_query("SET NAMES UTF8");//更改輸出及輸入設定

		$result =mysql_query($sql) or die("Query failed : " . mysql_error());
		
		$data = Array() ;
	
	

		while($row = mysql_fetch_array($result))
		{  
		   $data['Name'][] = $row['Name']; 
		}  
		mysql_close();//關閉與資料庫連線
		for($i=0;$i<=30;$i++)
		{
			echo "<li data-icon='location'><a href='#detail'>" . $data["Name"][$i]. "</a></li>";
		}
	}
	
?>