<?php
header("Access-Control-Allow-Origin: *");

    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "dtmc";

    try {
		
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $statement = $conn->prepare("SELECT * FROM questions");
        $statement->execute();
        
        $result = $statement->fetchAll();
        
        echo json_encode($result);
        
    } catch(PDOException $e) {
		
        echo "<p>" . $e->getMessage() . "</p>";
		
    }

?>
