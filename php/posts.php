<?php
    try {
        $db = new PDO("mysql:host=localhost;port=3306;dbname=donmcgre_netmatters_news", "donmcgre_donmcgregor", "aLnTN1lux{Hx");
        $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    } catch (Exception $e) {
        echo "Unable to connect";
        echo $e->getMessage();
        exit;
    }
?>




<div class="article card telecoms">
    <a class="btn label" href="https://www.netmatters.co.uk/news/telecoms-services">News</a>
    <a class="img" href="https://www.netmatters.co.uk/9-questions-to-ask-when-selecting-a-business-telecoms-provider">
        <img src="images/articles/9-questions-to-3idb.jpg" alt="9 Questions To Ask When Selecting A Business Telecoms Provider"></a>
    <div class="content">
        <a href="https://www.netmatters.co.uk/9-questions-to-ask-when-selecting-a-business-telecoms-provider"><h4 class="link">9 Questions To Ask When Selecting A Business...</h4></a>
        <p>Communication continues to be one of the most important administrative concerns for many busi...</p>
        <a class="btn" href="https://www.netmatters.co.uk/9-questions-to-ask-when-selecting-a-business-telecoms-provider">Read More</a>
        <div class="article-writer">
            <img src="images/articles/writer/james-gulliver-rgmz.jpg" alt="James Gulliver">
            <div>    
                <span><b>Posted by James Gulliver</b></span>
                <br>9th April 2021
            </div>
        </div>
    </div>
</div>