<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<?php

    mysql_connect("163.15.192.205","vany","tsoc2014") or die("Could not connect:" . mysql_error());
    mysql_select_db("vany") or die("Could not select database");
    $sql = "SELECT * FROM opendata ";
    mysql_query("SET NAMES UTF8");//更改輸出及輸入設定

    $result =mysql_query($sql) or die("Query failed : " . mysql_error());
	
	$data = Array() ;
	
	while($row = mysql_fetch_array($result))
	{  
	       $data['Name'][] = $row['Name']; 

	}  
	

    mysql_close();//關閉與資料庫連線
	
	print($data['Name'][3]);
?>

