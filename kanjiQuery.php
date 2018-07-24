<html>
    <head>        
        <meta charset="UTF-8">
        <script src="js/toKana.js"></script>
        <title>Kanji page</title>
    </head>
    <body>
        <?php 
            $servername = "localhost";
            $username = "root";
            $password = "sakatak11";
            $db = "kanji";
                   
            $conn = new mysqli($servername, $username, $password, $db);
            
            if($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            
            $sql = "SELECT kanji.kanji, onyomi.reading FROM kanji_onyomi
                    JOIN kanji ON kanji.id = kanji_onyomi.kanji_id
                    JOIN onyomi ON onyomi.id = kanji_onyomi.onyomi_id
                    WHERE kanji.id = 1; ";
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
        <p id="kanji"></p>
        <input type="text" id="katakana" onkeyup="checkChar(true,false)">
        <button onclick="checkOnyomi(katakana.value)">Check</button>
        <p id="kanachar"></p>
        
    </body>
    <script>
            var arrayOfKanjis = <?php echo $json_array; ?>;
            var kanji = arrayOfKanjis[0].kanji;
            var onyomi = arrayOfKanjis[0].reading;
            
            
            document.getElementById("kanji").innerHTML = kanji;
            
            function checkOnyomi(value){
                if(value === onyomi){
                    document.getElementById("kanachar").innerHTML = "correct!";
                }
                else{
                    document.getElementById("kanachar").innerHTML = "try again!";
                }
            }
            
           function checkChar(IMEkatakana, IMEhiragana){
               if(IMEkatakana === true ){
                   var input = document.getElementById("katakana");
                   document.getElementById("katakana").value = toKana(input.value,IMEkatakana,IMEhiragana);
               }
           }
        </script>
</html>

