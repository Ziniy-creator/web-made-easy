<main>
    <section>
        <?php 
            $sql = "SELECT * FROM settings ORDER BY id desc";
            $result = $conn->query($sql);
            while($row = $result->fetch_array()) {
                echo "<article><h2>".$title."</h2><i>".$date."</i><p>".$text."</p></article>";
            }
        ?>
    </section>
</main>