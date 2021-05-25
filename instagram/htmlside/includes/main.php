<div id="scrollable">
    <div id="scrollabletop">
        <div>
            <img class="thumbnails" src="https://picsum.photos/seed/picsum02/1920/1080" alt="" />
            <p>titletext</p>
        </div>
        <div>
            <img class="thumbnails" src="https://picsum.photos/seed/picsum02/1920/1080" alt="" />
            <p>titletext</p>
        </div>
        <div>
            <img class="thumbnails" src="https://picsum.photos/seed/picsum02/1920/1080" alt="" />
            <p>titletext</p>
        </div>
        <div>
            <img class="thumbnails" src="https://picsum.photos/seed/picsum02/1920/1080" alt="" />
            <p>titletext</p>
        </div>
        <div>
            <img class="thumbnails" src="https://picsum.photos/seed/picsum02/1920/1080" alt="" />
            <p>titletext</p>
        </div>
        <div>
            <img class="thumbnails" src="https://picsum.photos/seed/picsum02/1920/1080" alt="" />
            <p>titletext</p>
        </div>
    </div>



    <?php

    $sql = "SELECT * FROM `posts`";
    $result = $conn->query($sql);

    while ($row = $result->fetch_assoc()) {

        echo "
    <article class='post'>
    <div>
    <img src='" . $row['img'] . "' alt=''/>
    </div>
    
    <div id='some'>
          <div id='threeicons'>
            <i class='far fa-heart'></i>
            <i class='far fa-heart'></i>
            <i class='far fa-heart'></i>
          </div>
          <i class='fab fa-cloudflare'></i>
        </div>
    <p>" . $row['description'] . "</p>
    <p>" . $row['description'] . "</p>
    </article>
    ";
    }
    ?>
</div>