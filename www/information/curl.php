<?php




 $ch = curl_init();


curl_setopt($ch, CURLOPT_URL, "http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AV&CaseNo2=1&FileType=1&Lang=C&FolderType=");
// 設定擷取的URL網址
curl_setopt($ch, CURLOPT_HEADER, false);

//將curl_exec()獲取的訊息以文件流的形式返回，而不是直接輸出。
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);

$curl=curl_exec($ch);
// 執行
header('Content-Type: text/plain; charset="UTF-8"');
$result = json_decode($curl,true);//json_decode [將json資料編譯成php陣列](O)
								  //json_encode [將資料編譯成json資料](X)
curl_close($ch);
// 關閉CURL連線



$Id=$result[1]['Id'];                                //寫入資料庫時會跟SQL語法衝突所以另外宣告
$Name=$result[1]['Name'];
$Toldescribe=$result[1]['Toldescribe'];
$Description=$result[1]['Description'];
$Tel=$result[1]['Tel'];
$Address=$result[1]['Add'];                          //原來的名稱Add，有同樣名稱的SQL語法導致辨別欄位失敗，因此欄位改名為Address
$Zipcode=$result[1]['Zipcode'];
$Travellinginfo=$result[1]['Travellinginfo'];
$Opentime=$result[1]['Opentime'];
$Picture1=$result[1]['Picture1'];
$Picdescribe1=$result[1]['Picdescribe1'];
$Px=$result[1]['Px'];
$Py=$result[1]['Py'];

//下面是連結資料庫的語法
    mysql_connect("163.15.192.205","vany","tsoc2014") or die("Could not connect:" . mysql_error());
    mysql_select_db("vany") or die("Could not select database");
    $query="INSERT INTO opendata (Id,Name,Toldescribe,Description,Tel,Address,Zipcode,Travellinginfo,Opentime,Picture1,Picdescribe1,Px,Py) VALUES('$Id','$Name','$Toldescribe','$Description','$Tel','$Address','$Zipcode','$Travellinginfo','$Opentime','$Picture1','$Picdescribe1','$Px','$Py')";
	mysql_query("SET NAMES UTF8");//更改輸出及輸入設定
    mysql_query($query) or die("Query failed : " . mysql_error());
    mysql_close();//關閉與資料庫連線


?>
