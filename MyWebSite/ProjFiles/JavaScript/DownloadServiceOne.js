/*
Enum SelectedFileType = object.{
    unknown = "audio/*",
    txt = "text/plain",
    html = "text/html",
    jpg = "image/jpg",
    png = "image/png",
    jpeg = "image/jpeg",
    svg = "image/svg+xml",
    mpeg = "audio/mpeg",
    ogg = "audio/ogg",
    mp3 = "audio/mp3",
    mp4 = "video/mp4",
    mov = "video/mov",
    avi = "video/avi",
    stream = "application/octet-stream",
    form = "multipart/form-data",
    byte = "multipart/byteranges",
    

};
*/

/*
var SizeEnum = {
    unknown = "audio/*",
    txt = "text/plain",
    html = "text/html",
    jpg = "image/jpg",
    png = "image/png",
    jpeg = "image/jpeg",
    mpeg = "audio/mpeg",
    ogg = "audio/ogg",
    mp3 = "audio/mp3",
    mp4 = "video/mp4",
    mov = "video/mov",
    avi = "video/avi",
    stream = "application/octet-stream",

    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
    properties: {
      1: {name: "small", value: 1, code: "S"},
      2: {name: "medium", value: 2, code: "M"},
      3: {name: "large", value: 3, code: "L"}
    }
  };
  */

  var SelectedFileType = 
  {
    "unknown" : "audio/*",
    "txt" : "text/plain",
    "html" : "text/html",
    "jpg" : "image/jpg",
    "png" : "image/png",
    "jpeg" : "image/jpeg",
    "svg" : "image/svg+xml",
    "mpeg" : "audio/mpeg",
    "ogg" : "audio/ogg",
    "mp3" : "audio/mp3",
    "mp4" : "video/mp4",
    "mov" : "video/mov",
    "avi" : "video/avi",
    "stream" : "application/octet-stream",
    "form" : "multipart/form-data",
    "byte" : "multipart/byteranges",
  };

function ValidateDownloadData()
{
    var x = document.forms["downloadForm"]["url"].value;
    var y = document.forms["downloadForm"]["mimeType"].value;
    var z = document.forms["downloadForm"]["fileType"].value;
    downloadData(x);
    //downloadOne(x, y, z);
    // download(x, 'downloadTest', 'image/jpg');
    //downloadFive(x);
    // return null;
}

function downloadData(uri)
{
    var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.setAttribute('download', true);
    
            //Firefox requires the link to be in the body
            document.body.appendChild(link);
    
            //simulate click
            link.click();
    
            //remove the link when done
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
}

function downloadFive(url)
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            var myObj = xmlhttp.response;
            var a = document.createElement('a');
            a.href = window.URL.createObjectURL(xmlhttp.response); // xhr.response is a blob
            a.download = 'testing.jpg';//filename; // Set the file name.
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            delete a;
        }
    };

    xmlhttp.onload = function (oEvent)
    {
        var arrayBuffer = xmlhttp.response; // Note: not xmlhttp.responseText
        if (arrayBuffer)
        {
            var byteArray = new Uint8Array(arrayBuffer);
            for (var i = 0; i < byteArray.byteLength; i++)
            {
                // do something with each byte in the array
            }
        }
    }
    
    xmlhttp.open("GET", url);
    xmlhttp.setRequestHeader("Content-type", "image/jpeg");
    //xmlhttp.overrideMimeType('text\/plain; charset=x-user-defined');
    xmlhttp.send();

    // xmlhttp.open("GET", url, true);
    //xmlhttp.setRequestHeader("Content-type", "application/json");
    //xmlhttp.responseType = 'blob';
    // xmlhttp.send();
}

function downloadFour(url)
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.responseType = 'blob';
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            var myObj = xmlhttp.response;
            var a = document.createElement('a');
            a.href = window.URL.createObjectURL(xmlhttp.response); // xhr.response is a blob
            a.download = 'testing.jpg';//filename; // Set the file name.
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            delete a;
        }
    };
    xmlhttp.open("GET", url, true);
    //xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function downloadOne(url, fName, fType)
{
    var type = SelectedFileType.jpg;
    var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];//y;//"file.*";
    var data = url;//"some data";
    var fileType = url.substring(url.lastIndexOf(".") + 1).split("?")[0];
    var filesDataType = 'image/jpg';
    if(fileType === 'jpg')
    {
        filesDataType = 'image/jpg';
    }
    else
    {
        filesDataType = fType;
    }

    var blob = new Blob([data], { type: filesDataType });
    if(window.navigator.msSaveOrOpenBlob) 
    {
        window.navigator.msSaveBlob(blob, filename);
    }
    else 
    {
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
}

function downloadTwo(url)
{
    // Download a file form a url.
    //function saveFile(url) {
    // Get file name from url.
    var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
      a.download = filename; // Set the file name.
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      delete a;
    };
    xhr.open('GET', url);
    xhr.send();
  //}
}

function downloadThree(uri)//this is working and also downloading image files
{
    // function saveAs(uri) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.setAttribute('download', true);
    
            //Firefox requires the link to be in the body
            document.body.appendChild(link);
    
            //simulate click
            link.click();
    
            //remove the link when done
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
        // var file = 'http://upload.wikimedia.org/wikipedia/commons/b/bb/Wikipedia_wordmark.svg';
        // saveAs(file);
}

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = data;//url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function download(url, fileName) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    xhr.onprogress = function(event) {
        if (event.lengthComputable) {
            var percentComplete = (event.loaded / event.total)*100;
            //yourShowProgressFunction(percentComplete);
        } 
    };

    xhr.onload = function(event) {
        if (this.status == 200) {
            _saveBlob(this.response, fileName);
        }
        else {
            //yourErrorFunction()
        }
    };

    xhr.onerror = function(event){
        //yourErrorFunction()
    };

    xhr.send();
}


function _saveBlob(response, fileName) {
    if(navigator.msSaveBlob){
        //OK for IE10+
        navigator.msSaveBlob(response, fileName);
    }
    else{
        _html5Saver(response, fileName);
    }
}

function _html5Saver(blob , fileName) {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    document.body.removeChild(a);
}