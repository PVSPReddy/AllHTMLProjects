<?php

//require_once("ConnectionService.php");
require_once("ServerStatusService.php");

class UserServices extends ServerStatus 
{
    //$getConnService = new GetConnectionService();
    //$conn = $getConnService -> getConnection();
    
    function Register($data)
    {
        try
        {
            echo ($data);
            exit;
            
            $servername = "mysql3.gear.host";
            $username = "webhostdb";
            $password = "siva_123456";
            $dbName = "webhostdb";
            $host = 3306;
            
            $conn = new PDO("mysql:host=$servername;dbname=$dbName", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            $sql = "INSERT INTO webhostdb.userinfo (uname, password, first_name, last_name, mobile_no, email_id, profile_pic ) VALUES ( '$uName', '$uPwd', '$uFName', '$uLName', '$uMobileNo', '$uEmailId', 'no pic' )";
            
            $connn->exec($sql);
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
        
    }
    
    function Login($data)
    {
        try
        {
            echo ($data);
            exit;
            
            $servername = "mysql3.gear.host";
            $username = "webhostdb";
            $password = "siva_123456";
            $dbName = "webhostdb";
            $host = 3306;
            
            $conn = new PDO("mysql:host=$servername;dbname=$dbName", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            $sql = "SELECT * from webhostdb.userinfo WHERE uname="."\"".$_POST["logUName"]."\"";
            
            // prepare sql and bind parameters
            $res_data = $connn->prepare($sql);
            $res_data->execute();
            
            // set the resulting array to associative
            $_response = $res_data->setFetchMode(PDO::FETCH_ASSOC); 
            $response = $res_data->fetchAll();
            
            
            if($response[0]['password'] == $_POST["logUPwd"])
            {
                print_r('user Login is valid');
            }
            else
            {
                print_r('user Login is not valid');
            }
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
    }
    
    function AllUsers($data)
    {
        
    }
    
    function FaultMethod($data)
    {
        
    }
    
    function DataBaseService($sql)
    {
        
    }
    
}

?>