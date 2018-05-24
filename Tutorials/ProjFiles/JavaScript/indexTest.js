function GetDocData()
{
  var urls="";
  var serviceURL = document.forms["addURLForm"]["serviceURL"].value;
  if(serviceURL == "")
  {
    // serviceURL = "https://script.google.com/macros/s/AKfycbx-jmj_70IEWRP3t5Z2QFSIkWakhYbTYvTMM2uTCCIE3ZXx0loS/exec";
    // serviceURL = "https://script.google.com/macros/s/AKfycbxR_xKju3dN5Wfj7FTLLxCmhOgZOLtv0d7FhUhVh80JtkuJdJI/exec";
    serviceURL = "https://script.google.com/macros/s/AKfycbxaS7U2U4nBYB6dndL7c1CQsLO09T7OuYHKdKKfa-vBANY_RVI/exec";//?Contenttype=application/json&userRequest=GetDocData";
  }
  else
  {

  }
  var obj = {"method_name":"ConvertDocDataToHTML","service_request_data":{"file_name":"TestDocment","folder_id":"1ql0PNnEIh9gyKnhq8GahnbpOxlxGHUUl"}};//{ "name":"labnol", "blog":"ctrlq", "type":"post"  }
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
          var options = JSON.parse(responseData);
          window.alert(responseData);
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