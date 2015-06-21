<?php

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css">

        <link rel="stylesheet" href="myStyle.min.css">
        <link rel="stylesheet" href="jquery.mobile.structure-1.4.5.min.css">

        <script src="jquery-1.8.2.min.js"></script>
        <script src="jquery.mobile-1.4.5.min.js"></script>
        <title></title>
    </head>
    <body>
        <div data-role="page" id="home" data-fullscreen="true">
            <div data-role="header">
                <a href="#login" data-theme="b">登入</a>
                <h1>Mobile Web Create</h1>
                <a href="#setting" data-icon="gear">設定</a>
            </div> 
            <div data-role="content">

                <ul data-role="listview" data-inset="true" data-theme="c">
                    <li data-role="list-divider">主選單</li>
                    <li><a href="#">報名研討會</a></li>
                    <li><a href="#">講師陣容</a></li>
                    <li><a href="#">課程內容</a></li>
                    <li><a href="#">聯絡資訊</a></li>
                </ul>

                <ul data-role="listview" data-inset="true" data-split-icon="arrow-d">
                    <li>
                        <a href="#">Jquery</a>
                        <a href="#"></a>
                    </li>

                    <li>
                        <a href="#">Jquery</a>
                        <a href="#"></a>
                    </li>
                </ul>

                <p>第一次收到私訊點播～有朋友想知道波總到底在說些什麼。這位千勝名教頭的幽默感，就像他的球隊一樣迷人，經過上午緊張的西區大戰，可以看這個來放鬆一下～</p>
                <a href="#register">報名研討會</a>
                <a href="http://voyachi.com.tw/" data-role="button" data-inline="true">課程內容</a>
                <a href="http://google.com.tw/" data-role="button" data-inline="true" data-theme="b">聯絡資訊</a>
            </div>
            <div data-role="footer" class="ui-bar" data-position="fixed">
                <small>producer:Leo_liou</small>
                <a href="#" data-icon="plus">新增</a>
                <a href="#" data-icon="delete">刪除</a>
                <a href="#" data-icon="gear">設定</a>
            </div>              
        </div>

        <div data-role="page" id="register" data-add-back-btn="true" data-back-btn-text="上一頁">
            <div data-role="header">
                <h1>註冊畫面</h1>
            </div>
            <div data-role="content">
                <a href="#login" data-role="button" data-transition="pop" data-icon="plus" data-iconpos="top" data-corners="false">進入登入資訊</a>

                <div class="ui-block-b">
                    <div class="ui-block-a"><a href="#" data-role="button">確定1</a></div>
                    <div class="ui-block-b"><a href="#" data-role="button">取消2</a></div>

                    <div class="ui-block-a"><a href="#" data-role="button">確定3</a></div>
                    <div class="ui-block-b"><a href="#" data-role="button">取消4</a></div>

                    <div data-role="navbar" style="width: fill-available">
                        <ul>
                            <li><a href="#" data-icon="home" class="ui-state-persist">報名研討會</a></li>
                            <li><a href="#" data-icon="search">教師陣容</a></li>
                            <li><a href="#" data-icon="info">課程內容</a></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>

        <div data-role="dialog" id="login">
            <div data-role="header">
                <h1>登入資訊</h1>
            </div>
            <div data-role="content">

                <div data-role="collapsible-set">

                    <div data-role="collapsible">
                        <h3>所有登入資訊</h3>
                        <p>登入者:宥洋<br>時間:2015/5/30<br>電話:0938382341</p>
                    </div>

                    <div data-role="collapsible">
                        <h3>所有登入資訊</h3>
                        <p>登入者:宥洋<br>時間:2015/5/30<br>電話:0938382341</p>
                    </div>

                    <div data-role="collapsible">
                        <h3>所有登入資訊</h3>
                        <p>登入者:宥洋<br>時間:2015/5/30<br>電話:0938382341</p>
                    </div>

                </div>
            </div> 
        </div>





    </body>
</html>
