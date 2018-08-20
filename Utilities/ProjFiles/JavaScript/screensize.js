
function getValues()
{
    /*
    <div class="pgbodyright">
                        <input type="text" id="pocHeight" />
                        <input type="text" id="pocWidth" />

                        <input type="text" id="reqHeight" />
                        <input type="text" id="reqWidth" />
                        
                        <button onclick="getValues();">Submit</button>
                    </div>
    */
    try {
        //Block of code to try
        var pocHeight = document.getElementById("pocHeight");
        var pocWidth = document.getElementById("pocWidth");

        var reqHeight = document.getElementById("reqHeight");
        var reqWidth = document.getElementById("reqWidth");

        var percentHeight = ((reqHeight.value * 100)/pocHeight.value);
        var percentWidth = ((reqWidth.value * 100)/pocWidth.value);

        window.alert(percentHeight.toString() + "\n" + percentWidth.toString());
    }
    catch(err) {
        //Block of code to handle errors
    } 
    finally {
        //Block of code to be executed regardless of the try / catch result
    }
}

// getScreens();
// function getScreens()
// {
//     var x = screen.height;
//     var y = screen.width;
// }

// onAppStartOne();

// function onAppStartOne()
// {
//   var url = "../../LocalFiles/Games";
//   var localURL = "ProjFiles/LocalFiles/Games/";
//   var obj = { "localURL":url };
//   dbParam = JSON.stringify(obj);
//   var xobj = new XMLHttpRequest();
//     // xobj.overrideMimeType("application/json");
//     xobj.onreadystatechange = function () 
//     {
//       if (xobj.readyState == 4 && xobj.status == 200)
//       {
//         // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//         //callback(xobj.responseText);
//         var data = xobj.response;
//         var options = JSON.parse(data);
//         var optionsHTML="";
//         data = "<select id=\"GameSelector\">";
//         for(i=0; i<options.all_local_files.length; i++ )
//         {
//             //localURL+options.all_local_files[i]
//             data += "<option value=\""+localURL+options.all_local_files[i]+"\">"+options.all_local_files[i]+"</option>";
//           //data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+localURL+options.all_local_files[i]+"\" target=\"_blank\">"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+localURL+options.all_local_files[i]+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
//         }
//         data += "</select>";
//         var y=document.getElementById("GameSelection");
//         y.innerHTML = data;
//       }
//     };
//     xobj.open("POST", "./ProjFiles/PHPServices/PHP/ReceiveService.php?userRequest=GetLocalImages", true);
//     xobj.setRequestHeader("Content-type", "application/json");
//     xobj.send(dbParam);
//     // alert(e.dataset.id+"\n"+e.dataset.option);
// }

// //getDimensions();
// function getDimensions()
// {
//     var x=document.getElementById("GameSelector");
//     var gameName = x.value;

//     var obj = { "fileUrl":"./../../"+gameName};
//     // var obj = { "fileUrl":"./../../planerace.swf"};
//     dbParam = JSON.stringify(obj);
//     var bodyLeftUI = document.getElementById("audioLeftBody");
//     xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function()
//     {
//         if (this.readyState == 4 && this.status == 200)
//         {
//             var myObj = JSON.parse(this.response);
//             // var flashBox = document.getElementById("flashFIle");
//             // flashBox.height = myObj.dimensions.height;
//             // flashBox.width = myObj.dimensions.width;
//             // flashBox.src = gameName;
//             var flashBoxHolder = document.getElementById("flashFileHolder");
//             flashBoxHolder.height = myObj.dimensions.height;
//             flashBoxHolder.width = myObj.dimensions.width;

//             flashBoxHolder.innerHTML = " <embed src=\""+gameName+"\" id=\"flashFIle\" width=\""+myObj.dimensions.width+"\" height=\""+myObj.dimensions.height+"\">";
//         }
//     };///Applications/XAMPP/xamppfiles/htdocs/AllHTMLProjects/FlashWebSample/ProjFiles/PhpFiles/GetSWFDimensions.php

//     xmlhttp.open("POST", "./../FlashWebSample/ProjFiles/PHPServices/GetSWFDimensions.php", true);
//     xmlhttp.setRequestHeader("Content-type", "application/json");
//     xmlhttp.send(dbParam);
// }