<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            $servername = "localhost";
            $username = "root";
            $password = "";
            $db = "kanji";
                   
            $conn = new mysqli($servername, $username, $password, $db);
            
            if($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            
            $sql = "SELECT kanji.kanji, onyomi.reading FROM kanji_onyomi 
                    JOIN kanji ON kanji.id = kanji_onyomi.kanji_id
                    JOIN onyomi ON onyomi.id = kanji_onyomi.onyomi_id; ";
            $result = $conn->query($sql);
            $array = Array();
            
            if($result->num_rows > 0){
                while($row = $result->fetch_assoc()){
                    $array[] = $row; 
                }
            } else {
                echo '0 results';
            }
            $conn->close();
            $json_array = json_encode($array);
        ?>
                <p id="demo"></p>
        <script>
            var arrayOfKanjis = <?php echo $json_array; ?>;
            var i;
            var text = "";
            for(i = 0; i < arrayOfKanjis.length; i++){
                text += arrayOfKanjis[i].kanji + " " + arrayOfKanjis[i].reading + "<br>";
            }
            document.getElementById("demo").innerHTML = text;
        </script>
        

    
    </body>
</html>
