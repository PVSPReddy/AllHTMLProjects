<?php

$servername = "den1.mysql1.gear.host";
$username = "countriesdb";
$password = "Siv@123";
$dbName = "countriesdb";
$host = 3306;
$conn = new PDO("mysql:host=$servername;dbname=$dbName", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try
{
    header("Content-Type: application/json; charset=UTF-8");
    //$obj = json_decode($_POST["x"], false);
    $conn = new PDO("mysql:host=$servername;dbname=$dbName", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT * from countriesdb.allcountriesTemporarydata";
    $res_data = $conn->prepare($sql);
    $res_data->execute();
    
    // set the resulting array to associative
    $_response = $res_data->setFetchMode(PDO::FETCH_ASSOC);
    $response_ = $res_data->fetchAll();
    $countries_data = $response_;
    $response = array("message"=>"Service is successful","code"=>"1","country_details"=>$countries_data);
    $conn = null;
    echo json_encode($response);
    //return $response;
}
catch(PDOException $e)
{
  echo 'Exception -> ';
    var_dump($e->getMessage());
}
?>
