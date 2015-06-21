<html>


<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script src="http://maps.google.com/maps?file=api&v=2&key=AIzaSyDVg4w17bh3LuzjPIOXD-HFoNhm-UUNWsU"
type="text/javascript"><! API金鑰 目前是先打我的帳戶></script>
</head>
<body>
<div id="mymap" style="width: 500px; height: 500px"></div>

<!--以下為控制Google Maps的JavaScript-->
<script type="text/javascript">

//<![CDATA[
var map = new GMap(document.getElementById("mymap"));

//設定要顯示的控制項
map.addControl(new GSmallMapControl());//小地圖用
//map.addControl(new GMapTypeControl()); 大地圖用
//map.addControl(new GSmallZoomControl()); 只有 Zoom Level 的調整，沒有地圖移動控制
//map.addControl(new GMapTypeControl()); 顯示地圖型態切換的控制項

//決定 Google 地圖的中心點位置(經度,緯度)和縮放大小(遠近)
map.setCenter(new GLatLng(22.638214, 120.303039), 16);

//標記在 Google 地圖上的經緯度(Py,Px)
var point = new GLatLng(22.638214, 120.303039);
var marker = new GMarker(point);
map.addOverlay(marker);

//在地圖上放置標點說明
var html = "高雄願景館";
map.openInfoWindowHtml (map.getCenter(), html);

//]]>
</script>


</body>
</html>