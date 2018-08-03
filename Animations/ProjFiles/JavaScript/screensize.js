getScreens();
function getScreens()
{
    var x = screen.height;
    var y = screen.width;
}

onAppStartOne();

function onAppStartOne()
{
  var url = "../../LocalFiles/Games";
  var localURL = "ProjFiles/LocalFiles/Games/";
  var obj = { "localURL":url };
  dbParam = JSON.stringify(obj);
  var xobj = new XMLHttpRequest();
    // xobj.overrideMimeType("application/json");
    xobj.onreadystatechange = function () 
    {
      if (xobj.readyState == 4 && xobj.status == 200)
      {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        //callback(xobj.responseText);
        var data = xobj.response;
        var options = JSON.parse(data);
        var optionsHTML="";
        data = "<select id=\"GameSelector\">";
        for(i=0; i<options.all_local_files.length; i++ )
        {
            //localURL+options.all_local_files[i]
            data += "<option value=\""+localURL+options.all_local_files[i]+"\">"+options.all_local_files[i]+"</option>";
          //data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+localURL+options.all_local_files[i]+"\" target=\"_blank\">"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+localURL+options.all_local_files[i]+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
        }
        data += "</select>";
        var y=document.getElementById("GameSelection");
        y.innerHTML = data;
      }
    };
    xobj.open("POST", "./ProjFiles/PHPServices/PHP/ReceiveService.php?userRequest=GetLocalImages", true);
    xobj.setRequestHeader("Content-type", "application/json");
    xobj.send(dbParam);
    // alert(e.dataset.id+"\n"+e.dataset.option);
}

function getGame()
{//application/x-shockwave-flash
    var x=document.getElementById("GameSelector");
    var gameName = x.value;
    var kkk = localStorage;
    // localStorage.setItem("", );
    var xhr = new XMLHttpRequest(),
        blob,
        fileReader = new FileReader();

    var obj = { "localURL": "https://docs.google.com/uc?export=download&id=1cTBASPXUi_WULNRTPoMWykLQ7Ay419Ed" };
    var dbParam = JSON.stringify(obj);
    
    xhr.addEventListener("load", function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            // Create a blob from the response
            blob = new Blob([xhr.response], {type: "application/x-shockwave-flash"});

            // onload needed since Google Chrome doesn't support addEventListener for FileReader
            fileReader.onload = function (evt) {
                // Read out file contents as a Data URL
                var result = evt.target.result;
                // Set image src to Data URL
                //rhino.setAttribute("src", result);
                // Store Data URL in localStorage
                try {
                    localStorage.setItem("rhino", result);
                }
                catch (e) {
                    console.log("Storage failed: " + e);
                }
            };
            // Load blob as Data URL
            fileReader.readAsDataURL(blob);
        }
        else
        {
            console.log("Not Worked");
        }
    }, false);
    xhr.open("GET", "https://doc-0k-88-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/egf13nko8e6locsjmk9lgs15dhgatv51/1533283200000/12442776118689229990/*/1cTBASPXUi_WULNRTPoMWykLQ7Ay419Ed?e=download");
    // xhr.open("POST", "./ProjFiles/PHPServices/PHP/ReceiveService.php?userRequest=GetDataFromRedirectURL", true);
    // Set the responseType to arraybuffer. "blob" is an option too, rendering manual Blob creation unnecessary, but the support for "blob" is not widespread enough yet
    // xobj.setRequestHeader("Content-type", "application/json");
    // xhr.responseType = "arraybuffer";
    // Send XHR
    // xhr.send(dbParam);
    xhr.send();
}

function getData()
{
    var data = localStorage.getItem("rhino");
    var flashBoxHolder = document.getElementById("flashFileHolder");
            flashBoxHolder.height = 1000;
            flashBoxHolder.width = 1000;
    flashBoxHolder.innerHTML = " <embed src=\""+data+"\" id=\"flashFIle\" width=\"1000\" height=\"1000\">";
    var kkk = localStorage.getItem("rhino");
}

//getDimensions();
function getDimensions()
{
    var x=document.getElementById("GameSelector");
    var gameName = x.value;

    var obj = { "fileUrl":"./../../"+gameName};
    // var obj = { "fileUrl":"./../../planerace.swf"};
    dbParam = JSON.stringify(obj);
    var bodyLeftUI = document.getElementById("audioLeftBody");
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var myObj = JSON.parse(this.response);
            // var flashBox = document.getElementById("flashFIle");
            // flashBox.height = myObj.dimensions.height;
            // flashBox.width = myObj.dimensions.width;
            // flashBox.src = gameName;
            var flashBoxHolder = document.getElementById("flashFileHolder");
            flashBoxHolder.height = myObj.dimensions.height;
            flashBoxHolder.width = myObj.dimensions.width;

            flashBoxHolder.innerHTML = " <embed src=\""+gameName+"\" id=\"flashFIle\" width=\""+myObj.dimensions.width+"\" height=\""+myObj.dimensions.height+"\">";
        }
    };///Applications/XAMPP/xamppfiles/htdocs/AllHTMLProjects/FlashWebSample/ProjFiles/PhpFiles/GetSWFDimensions.php

    xmlhttp.open("POST", "./../FlashWebSample/ProjFiles/PHPServices/GetSWFDimensions.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(dbParam);
}
function getDimensionss()
{
    //https://drive.google.com/open?id=1cTBASPXUi_WULNRTPoMWykLQ7Ay419Ed
    //https://drive.google.com/open?id=1uUsMgnYnopAxNGoLVMkm_cX8sl2kA2yW
    //https://drive.google.com/open?id=1Qbmbu5NeqttWmdYUX-l2fu_lN3z0zbwP


    /*
    https://drive.google.com/open?id=1cTBASPXUi_WULNRTPoMWykLQ7Ay419Ed
    https://drive.google.com/file/d/1Qbmbu5NeqttWmdYUX-l2fu_lN3z0zbwP/view?usp=sharing
    https://docs.google.com/uc?export=download&id=0Bwpe9ad5TblvWUQyc3JHSGJ4MUU
    https://docs.google.com/uc?export=download&id=
    https://googledrive.com/host/
    https://googledrive.com/host/1Qbmbu5NeqttWmdYUX-l2fu_lN3z0zbwP
    https://docs.google.com/uc?export=download&id=1cTBASPXUi_WULNRTPoMWykLQ7Ay419Ed
    */

//    <video controls="controls">
//    <source src="https://drive.google.com/uc?export=download&id=1cTBASPXUi_WULNRTPoMWykLQ7Ay419Ed" type='video/mp4'/>
// </video>


// "<object width=\"550\" height=\"400\"> <param name=\"movie\" value=\"https://drive.google.com/uc?export=download&id=1cTBASPXUi_WULNRTPoMWykLQ7Ay419Ed\"> <embed src=\"https://drive.google.com/uc?export=download&id=1cTBASPXUi_WULNRTPoMWykLQ7Ay419Ed\" width=\"550\" height=\"400\"></embed></object>";


}