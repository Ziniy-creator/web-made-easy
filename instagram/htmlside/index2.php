<?php

$host = "127.0.0.1";
$user = "root";
$password = "";
$dbname = "instagram";

$con = new mysqli($host, $user, $password, $dbname);

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Opgaver</title>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>

<body>
    <h1>Instagram<h1>

            <section id="instagram-feed">
                <?php

                $sql = "SELECT * FROM `posts`";
                $result = $con->query($sql);

                while ($row = $result->fetch_assoc()) {

                    echo "
<div class='post'>
<img src='" . $row['img'] . "' alt=''>
<p>" . $row['username'] . "</p>
<img src='" . $row['img'] . "' alt='' />
<p>" . $row['description'] . "</p>
</div>";
                }


                ?>



            </section>
</body>

</html>x