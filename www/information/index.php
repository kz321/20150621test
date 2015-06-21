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
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css">

        <link rel="stylesheet" href="blueTheme.min.css">
        <link rel="stylesheet" href="jquery.mobile.structure-1.4.5.min.css">

        <script src="jquery-1.8.2.min.js"></script>
        <script src="jquery.mobile-1.4.5.min.js"></script>
        <title>景點資訊</title>


        <style type="text/css">
          html, body, #map-canvas { height: 100%; margin: 0; padding: 0;}
        </style>
        <script type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeBr6cfVRxapzkVSOSHh2qeAW8vi8Xrb8">
        </script>
        <script type="text/javascript">
          function initialize() {
            var mapOptions = {
              center: { lat: -34.397, lng: 150.644},
              zoom: 8
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);
          }
          google.maps.event.addDomListener(window, 'load', initialize);
        </script>


    </head>
    <body>

        <div data-role="page" id="home" data-fullscreen="true">
            <div data-role="header" data-position="fixed" data-inline="true">
                <h1>景點資訊</h1>
                <a href="#" class="ui-btn-right">Setting</a>
            </div>

            <div data-role="content">
                <ul data-role="listview" data-filter="true" data-inset="true">
                    <li data-role="list-divider">熱門景點</li>

                    <?php
                        if ($result)
                        {
                            $row = mysql_fetch_assoc($result);
                            for($i=0;$i<=30;$i++)
                             echo "<li data-icon='location'><a href='#detail'>" . $data["Name"][$i]. "</a></li>";
                            
                        }
                        else 
                        {
                            echo "0 results";
                        }
                        

                    ?>


                </ul>
            </div>
            <div id="map-canvas"></div>
            <div data-role="footer" data-position="fixed" class="ui-bar">
                <small>作者:昶樺,秉軒,宥洋</small>
            </div>
        </div>


        <div data-role="dialog" id="detail" data-add-back-btn="true">
            <div data-role="header"><h1>日月潭</h1></div>
            <div data-role="content">
                <table border="1" style="width: 400px" style="vertical-align: middle">
                    <tr>
                        <td>地址:</td><td>Kaoshung</td>
                    </tr>
                    
                    <tr>
                        <td>Tel:</td><td>02-55588864</td>
                    </tr>
                           
                    <tr>
                        <td>開放時間:</td><td>17:00~22:30</td>
                    </tr>
                    
                    <tr>
                        <td>簡介</td><td>This is Introduction</td>
                    </tr>

                    <tr>
                        <td colspan="2">
                            
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </body>
</html>
