<?php

require_once("UserService.php");
//require_once("ServerStatusService.php");

class RequestHandler// extends ServerStatus
{
    function Request_Handler($userRequest, $data)
    {
        $uServices = new UserServices();
        switch($userRequest)
        {
            case "UserRegistration":
                return $response = $uServices -> Register($data);
                break;
            case"UserLogin":
                return $response = $uServices -> Login($data);
                break;
            case "GetAllMovies":
                return $response = $uServices -> GetMovies();
                break;
            case "AllUsersData":
                return $response = $uServices -> AllUsers($data);
                break;
            case "GetAllSongs":
                return $response = $uServices -> GetSongs($data);
                break;
            case "GetCountriesData":
                return $response = $uServices -> GetCountries();
                break;
            case "GetLocalImages":
                return $response = $uServices -> GetLocalGames($data);
                break;
            case "GetDataFromRedirectURL":
                return $response = $uServices -> GetDataFromRedirectUrl($data);
                break;
            default:
                return $response = $uServices -> FaultMethod($data);
                break;
        }
    }

}

?>
