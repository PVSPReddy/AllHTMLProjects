//var json = require('../ProjFiles/LocalFiles/JsonFiles/URLs.json');
// var fs = require('fs');

function myFunction()
{
  var url = "../LocalImages";
  var localURL = "ProjFiles/LocalImages/";
  var obj = { "localURL":url };
  dbParam = JSON.stringify(obj);
  var xobj = new XMLHttpRequest();
    // xobj.overrideMimeType("application/json");
    xobj.onreadystatechange = function () 
    {
      if (xobj.readyState == 4 && xobj.status == 200)
      {
        //onclick="window.open('anotherpage.html', '_blank');"
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        //callback(xobj.responseText);
        var responseData = xobj.response;
        var options = JSON.parse(responseData);
        var optionsHTML="";
        for(i=0; i<options.all_local_files.length; i++ )
        {
          data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+localURL+options.all_local_files[i]+"\" >"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+localURL+options.all_local_files[i]+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
        }
        var y=document.getElementById("listview");
        y.innerHTML = data;
      }
    };
    xobj.open("POST", "./ProjFiles/PHPServices/ReceiveService.php?userRequest=GetLocalImages", true);
    xobj.setRequestHeader("Content-type", "application/json");
    xobj.send(dbParam);
}

onAppStartOne();

function onAppStartOne()
{
  var url = "../LocalImages";
  var localURL = "ProjFiles/LocalImages/";
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
        for(i=0; i<options.all_local_files.length; i++ )
        {
          data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+localURL+options.all_local_files[i]+"\" target=\"_blank\">"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+localURL+options.all_local_files[i]+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
        }
        var y=document.getElementById("listview");
        y.innerHTML = data;
      }
    };
    xobj.open("POST", "./ProjFiles/PHPServices/ReceiveService.php?userRequest=GetLocalImages", true);
    xobj.setRequestHeader("Content-type", "application/json");
    xobj.send(dbParam);
    // alert(e.dataset.id+"\n"+e.dataset.option);
}

// onAppStart();

function onAppStart()
{

  // Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;


if(isIE)
{
  var fso,d, s;
  fso = new ActiveXObject("Scripting.FileSystemObject");
  d = fso.GetDrive("../ProjFiles/LocalFiles/JsonFiles");
  s = d.FileSystem;
  return(s);
}
else
{

}
// v.0.1.2
var path = "";	
var file_type="jpg";
var title="download";
var param_path="../ProjFiles/LocalFiles/JsonFiles";
if(!param_path) {
  var tmp_file = File.openDialog(title, file_type);		
  if(!tmp_file) {exit(); };
  path = tmp_file.path;
}else { path = param_path; };

var my_folder = new Folder(path);
var eee = my_folder.getFiles(file_type);
return eee;
//   fileName = findFirstFile("*.*"); // Find the first file matching the filter 
// while(fileName.length) 
// { 
//     write(fileName); 
//     fileName = findNextFile();  // Find the next file matching the filter 
// }
  // var files = fs.readdirSync('./LocalImages/');
  
}
function ShowFileSystemType(drvPath)
{
var fso,d, s;
fso = new ActiveXObject("Scripting.FileSystemObject");
d = fso.GetDrive(drvPath);
s = d.FileSystem;
return(s);
}


function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
              var data = JSON.parse(httpRequest.responseText);
              if (callback) callback(data);
          }
      }
  };
  httpRequest.open('GET', path);
  httpRequest.send(); 
}

function SubmitURL()
{
  var urls="";
  var x6 = document.forms["addURLForm"]["preDefinedURLs"].value;
  var imageType = document.forms["addURLForm"]["imageTypes"].value;
  var x1 = document.forms["addURLForm"]["url"].value;
  
  urls=x1;
  var x2 = document.forms["addURLForm"]["startIndex"].value;
  var x3 = document.forms["addURLForm"]["endIndex"].value;
  var x4 = document.forms["addURLForm"]["HasZero"].value;
  var data="";
  if(x4 == "1")
  {
    for(var i= x2; i<=x3; i++)
    {
      if(i<10)
      {
        {
          data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+urls+"0"+i+"."+imageType+"\" >"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+urls+"0"+i+"."+imageType+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
        }
      }
      else
      {
        data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+urls+i+"."+imageType+"\" >"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+urls+i+"."+imageType+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
      }
    }
  }
  else
  {
    for(var i= x2; i<=x3; i++)
    {
      if(i<10)
      {
        {
          data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+urls+i+"."+imageType+"\" >"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+urls+i+"."+imageType+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
        }
      }
      else
      {
        data += "<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\""+urls+i+"."+imageType+"\" >"+"\n"+"<img style=\"height : 200px; width : 200px; float:left\"src=\""+urls+i+"."+imageType+"\" />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>";
      }
    }
  }
  var y=document.getElementById("listview");
  y.innerHTML = data;
}

function UpdateURL()
{
}

function UpdateModel()
{
}
