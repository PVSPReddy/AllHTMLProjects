function GetAllFiles()
{
  var urls="";
  var serviceURL = "https://script.google.com/macros/s/AKfycbxaS7U2U4nBYB6dndL7c1CQsLO09T7OuYHKdKKfa-vBANY_RVI/exec";
  if(serviceURL == "")
  {
    // serviceURL = "https://script.google.com/macros/s/AKfycbx-jmj_70IEWRP3t5Z2QFSIkWakhYbTYvTMM2uTCCIE3ZXx0loS/exec";
    // serviceURL = "https://script.google.com/macros/s/AKfycbxR_xKju3dN5Wfj7FTLLxCmhOgZOLtv0d7FhUhVh80JtkuJdJI/exec";
    serviceURL = "https://script.google.com/macros/s/AKfycbxaS7U2U4nBYB6dndL7c1CQsLO09T7OuYHKdKKfa-vBANY_RVI/exec";//?Contenttype=application/json&userRequest=GetDocData";
  }
  else
  {

  }
  var obj = {"method_name":"GetAllDocumentsInFolder","service_request_data":{}};//{ "name":"labnol", "blog":"ctrlq", "type":"post"  }
  //dbParam = JSON.stringify(obj);
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
        if(responseData != "")
        {
            var data = "";
          var responseObject = JSON.parse(responseData);//responseData;//JSON.parse(responseData);
          var filesList = responseObject.all_files;
          filesList.forEach(element => {
              data += "<p align=\"left\" style=\"width : 75%; cursor:pointer; float:left;\" data-id=\""+element.name+"\" data-option=\""+element.url+"\" onClick=\"getThisTutorial(this)\">"+element.name+"</p>";//"<p>"+element.name+"</p></br>" ;
          });
          var form = document.getElementById('formDynamicData');
          form.innerHTML = data;
          //window.alert(responseData);
          //var y=document.getElementById("listview");
          //y.innerHTML = data;
        }
      }
      else
      {
      }
    };
    var headerObj = "Contenttype=application/json&userRequest=GetDocData" ;
    var dbParam = JSON.stringify(obj);
    // var dbParam = obj;
    //var dbParam = "employeeStatus='Active'&name='Henry'";//this works but sends data to contents in postdata.
    //var serviceURLs = serviceURL + "?" + dbParam;
    // xobj.open("POST", (serviceURL +"?"+ JSON.stringify(headerObj)), true);
    xobj.open("POST", (serviceURL +"?"+ headerObj), true);
    //xobj.setRequestHeader("Content-type", "application/json");
    //xobj.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    // xobj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xobj.send(dbParam);
}


function getThisTutorial(e)
{
  var urls="";
  var serviceURL = "https://script.google.com/macros/s/AKfycbxaS7U2U4nBYB6dndL7c1CQsLO09T7OuYHKdKKfa-vBANY_RVI/exec";
  if(serviceURL == "")
  {
    // serviceURL = "https://script.google.com/macros/s/AKfycbx-jmj_70IEWRP3t5Z2QFSIkWakhYbTYvTMM2uTCCIE3ZXx0loS/exec";
    // serviceURL = "https://script.google.com/macros/s/AKfycbxR_xKju3dN5Wfj7FTLLxCmhOgZOLtv0d7FhUhVh80JtkuJdJI/exec";
    serviceURL = "https://script.google.com/macros/s/AKfycbxaS7U2U4nBYB6dndL7c1CQsLO09T7OuYHKdKKfa-vBANY_RVI/exec";//?Contenttype=application/json&userRequest=GetDocData";
  }
  else
  {

  }
  var obj = {"method_name":"ConvertDocDataToHTML","service_request_data":{"file_name":e.dataset.id,"folder_id":"1ql0PNnEIh9gyKnhq8GahnbpOxlxGHUUl"}};//{ "name":"labnol", "blog":"ctrlq", "type":"post"  }
  //dbParam = JSON.stringify(obj);
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
        if(responseData != "")
        {
          var options = JSON.parse(responseData);//responseData;//JSON.parse(responseData);
          var form = document.getElementById('formDynamicData');
          form.innerHTML = options.html_data;
          //window.alert(responseData);
          //var y=document.getElementById("listview");
          //y.innerHTML = data;
        }
      }
      else
      {
      }
    };
    var headerObj = "Contenttype=application/json&userRequest=GetDocData" ;
    var dbParam = JSON.stringify(obj);
    // var dbParam = obj;
    //var dbParam = "employeeStatus='Active'&name='Henry'";//this works but sends data to contents in postdata.
    //var serviceURLs = serviceURL + "?" + dbParam;
    // xobj.open("POST", (serviceURL +"?"+ JSON.stringify(headerObj)), true);
    xobj.open("POST", (serviceURL +"?"+ headerObj), true);
    //xobj.setRequestHeader("Content-type", "application/json");
    //xobj.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    // xobj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xobj.send(dbParam);
}


function PageStartUp(urlData)
{
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("text/html");
    //xobj.open('GET', './ProjFiles/HtmlFiles/SignIn.html', true); // Replace 'my_data' with the path to your file
    xobj.open('GET', urlData, true); 
    xobj.onreadystatechange = function () 
    {
      if (xobj.readyState == 4 && xobj.status == 200)
      {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        //callback(xobj.responseText);
        var data = xobj.response;
        var form = document.getElementById('formDynamicData');
        form.innerHTML = data;
        // var options = JSON.parse(data);
        // var option = document.getElementById('URLOptions');
        var optionsHTML="";
        // for(i=0; i<options.length; i++ )
        // {
        //   optionsHTML = optionsHTML+"<option value="+options[i].url+">"+options[i].name+"</option>";
        // }
        // option.innerHTML = option.innerHTML+optionsHTML;
      }
    };
    xobj.send();
    //xobj.send(null);  
 }


// function PageStartUp()
// {
    // var alterPage = document.getElementById('frameAlterLogPages');
    // alterPage.src = "ProjFiles/HtmlFiles/SignIn.html";
// }

function OnSignInClicked()
{
    PageStartUp('./ProjFiles/HtmlFiles/SignIn.html');
}

function OnSignUpClicked()
{  
    PageStartUp('./ProjFiles/HtmlFiles/SignUp.html');  
}

/*
function listMenuScrollItems()
{
    var parent = document.getElementById("listTopicsMenu");

    for(var i=0; i<100; i++)
    {
        parent.innerHTML += "<div style=\"height:90%;width:10%;\">"+
        "<img style=\"height:100px;width:50px;float:left;\" src=\"HTML/ProjFiles/Assets/NextIcon.png\">"+
        "</div>";
    }
}
*/

/* original post
// (function() {
//     function scrollHorizontally(e) {
//         e = window.event || e;
//         var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//         document.getElementById('yourDiv').scrollLeft -= (delta*40); // Multiplied by 40
//         e.preventDefault();
//     }
//     if (document.getElementById('yourDiv').addEventListener) {
//         // IE9, Chrome, Safari, Opera
//         document.getElementById('yourDiv').addEventListener("mousewheel", scrollHorizontally, false);
//         // Firefox
//         document.getElementById('yourDiv').addEventListener("DOMMouseScroll", scrollHorizontally, false);
//     } else {
//         // IE 6/7/8
//         document.getElementById('yourDiv').attachEvent("onmousewheel", scrollHorizontally);
//     }
// })();
*/

/*
(function() {
    var _parent = parent;
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        parent.scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if (parent.addEventListener) {
        // IE9, Chrome, Safari, Opera
        parent.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        parent.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        parent.attachEvent("onmousewheel", scrollHorizontally);
    }
})();
*/

/* original post
var mouseWheelEvt = function (event) {
    if (document.body.doScroll)
        document.body.doScroll(event.wheelDelta>0?"left":"right");
    else if ((event.wheelDelta || event.detail) > 0)
        document.body.scrollLeft -= 10;
    else
        document.body.scrollLeft += 10;

    return false;
}
document.body.addEventListener("mousewheel", mouseWheelEvt);
*/

var mouseWheelEvt = function (event) {
    if (parent.doScroll)
    {
        parent.doScroll(event.wheelDelta>0?"left":"right");
    }
    else if ((event.wheelDelta || event.detail) > 0)
    {
        parent.scrollLeft -= 10;
    }
    else
    {
        parent.scrollLeft += 10;
    }
    //event.preventDefault();

    return false;
}
parent.addEventListener("mousewheel", mouseWheelEvt);
