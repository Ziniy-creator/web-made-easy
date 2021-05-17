<!DOCTYPE html>
<html lang="en">
<?php 
    include("assets/inc/db_conn.php");
    
    $sql = "SELECT * FROM settings";
    $result = $conn->query($sql);
?>
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<?php 
    //Design / theme can be chosen here, and should go to a different stylesheet. For example Bootstrap design. Then it should link to the correct css location.
    while($row = $result->fetch_array()) {
        echo $row['title'];
    } 
?>