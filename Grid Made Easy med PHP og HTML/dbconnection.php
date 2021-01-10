<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
   // $currentdate 0 new DateTime();
   // $curdate = (date("F d, y h:i:s", $currentdate));
    $sql = "SELECT * FROM artikler ORDER BY id desc";
    $result = $conn->query($sql);
?>


<!-- Database opkoblings fil ikke nødvendig. -->