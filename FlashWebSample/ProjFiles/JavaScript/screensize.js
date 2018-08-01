getScreens();
function getScreens()
{
    var x = screen.height;
    var y = screen.width;
}

getDimensions();
function getDimensions()
{
    var obj = { "fileUrl":"./../../planerace.swf"};
    dbParam = JSON.stringify(obj);
    var bodyLeftUI = document.getElementById("audioLeftBody");
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var myObj = JSON.parse(this.response);
            var flashBox = document.getElementById("flashFIle");
            flashBox.height = myObj.dimensions.height;
            flashBox.width = myObj.dimensions.width;
        }
    };///Applications/XAMPP/xamppfiles/htdocs/AllHTMLProjects/FlashWebSample/ProjFiles/PhpFiles/GetSWFDimensions.php
    xmlhttp.open("POST", "./../FlashWebSample/ProjFiles/PhpFiles/GetSWFDimensions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(dbParam);
}