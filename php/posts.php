<?php
    try {
        $db = new PDO("mysql:host=localhost;port=3306;dbname=donmcgre_netmatters_news", "donmcgre_donmcgregor", "lg7vCzpP0;R,");
        $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    } catch (Exception $e) {
        echo "Unable to connect";
        echo $e->getMessage();
        exit;
    }
    try{
        $results = $db->query('SELECT * FROM posts');
        $posts = $results->fetchAll(PDO::FETCH_ASSOC);
        }
        catch (exception $e) {
            echo $e->getMessage();
        }

foreach($posts as $post) {
    $id = $post['id']; 
    $title = $post['title']; 
    $preview = $post['preview']; 
    $category = $post['category']; 
    $theme = $post['theme']; 
    $link = $post['link']; 
    $img = $post['img']; 
    $author_name = $post['author_name']; 
    $author_img = $post['author_img']; 
    $date = $post['date']; 
    ?>

        <div class="article card <? echo $theme ?>">
            <a class="btn label" href="https://www.netmatters.co.uk/news/<? echo $theme ?>"><? echo $category ?></a>
            <a class="img" href="<? echo $link ?>">
                <img src="<? echo $img ?>" alt=""></a>
            <div class="content">
                <a href="<? echo $link ?>"><h4 class="link"><? echo $title ?></h4></a>
                <p><? echo $preview ?></p>
                <a class="btn" href="<? echo $link ?>">Read More</a>
                <div class="article-writer">
                    <img src="<? echo $author_img ?>" alt="<? echo $author_name ?>">
                    <div>    
                        <span><b>Posted by <? echo $author_name ?></b></span>
                        <br><? echo $date ?>
                    </div>
                </div>
            </div>
        </div>

    <?php
}



?>