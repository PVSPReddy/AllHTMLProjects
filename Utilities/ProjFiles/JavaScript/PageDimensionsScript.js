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

        if((pocHeight.value !== "" && pocHeight.value > 0 && reqHeight.value !== "" && reqHeight.value > 0) || (pocWidth.value != "" && pocWidth.value > 0 && reqWidth.value != "" && reqWidth.value > 0))
        {
            var pocHeightValue = 0;
            var pocWidthValue = 0;
            var reqHeightValue = 0;
            var reqWidthValue = 0;
            var percentHeight = 0;
            var percentWidth = 0;
            if(pocHeight.value !== "" && pocHeight.value > 0 && reqHeight.value !== "" && reqHeight.value > 0)
            {
                pocHeightValue = pocHeight.value;
                reqHeightValue = reqHeight.value;
                percentHeight = ((reqHeight.value * 100)/pocHeight.value);
            }
            if(pocWidth.value != "" && pocWidth.value > 0 && reqWidth.value != "" && reqWidth.value > 0)
            {
                pocWidthValue = pocWidth.value;
                reqWidthValue = reqWidth.value;
                percentWidth = ((reqWidth.value * 100)/pocWidth.value);
            }

            //var data = "[ {totalheight : , totalwidth : , values : [{ height : , width : , percentheight : , percentwidth :  }]}"
            // var data = "[ {\"totalheight\" : \""+pocHeight.value+"\", \"totalwidth\" : \""+pocWidth.value+"\", \"convertedvalues\" : [{ \"height\" : \""+reqHeight.value+"\", \"width\" : \""+reqWidth.value+"\", \"percentheight\" : \""+percentHeight+"\", \"percentwidth\" : \""+percentWidth+"\" }]}";
            // var data = "currentValue ="+ "{\"totalheight\" : \""+pocHeightValue+"\", \"totalwidth\" : \""+pocWidthValue+"\", \"requiredheight\" : \""+reqHeightValue+"\", \"requiredwidth\" : \""+reqWidthValue+"\", \"percentheight\" : \""+percentHeight+"\", \"percentwidth\" : \""+percentWidth+"\" }, ";
            // var data = "{\"totalheight\" : \""+pocHeightValue+"\", \"totalwidth\" : \""+pocWidthValue+"\", \"requiredheight\" : \""+reqHeightValue+"\", \"requiredwidth\" : \""+reqWidthValue+"\", \"percentheight\" : \""+percentHeight+"\", \"percentwidth\" : \""+percentWidth+"\" }, ";
            var data = { "totalheight" : pocHeightValue, "totalwidth" : pocWidthValue, "requiredheight" : reqHeightValue, "requiredwidth" : reqWidthValue, "percentheight" : percentHeight, "percentwidth" :  percentWidth };
            var jsonString = JSON.stringify(data);
            document.cookie += jsonString + ", ";//"data=savedData";
            
        }

        // window.alert(percentHeight.toString() + "\n" + percentWidth.toString());
    }
    catch(err) {
        //Block of code to handle errors
    } 
    finally {
        //Block of code to be executed regardless of the try / catch result
    }
}

function OpenMenu()
{
    try 
    {
        var pastData = document.getElementById("pastData");
        if(pastData.innerHTML == "")
        {
            var button = "<div style=\" height: 11%; width: 100%; min-width: 100px; \">"+
            // "<button class=\"submitDimensionsButton\" style=\"height: 90%; flex: 1; float: left;\" onclick=\"OpenMenu();\">&#62&#62 Close</button>"+
            "<button class=\"submitDimensionsButton\" style=\"height: 90%; width: 100%; min-Width:50px;\" onclick=\"ClearHistory();\">Clear</button>";//+
            //"</div>";
            var jsonString = document.cookie;
            jsonString = jsonString.substring(0,(jsonString.length-1));
            var htmlData = "";
            if(jsonString != "")
            {
                jsonString = "[" + jsonString + "]";
                var data = JSON.parse(jsonString);
                htmlData = "<div style=\" width:100%; \"><table style=\" width:100%; word-break: break-all; white-space: normal;\" border=\"1\">"+
                "<tr>"+
                "<th>"+"S.No"+"</th>"+
                "<th>"+"Total Height"+"</th>"+
                "<th>"+"Total Width"+"</th>"+
                "<th>"+"Required Height"+"</th>"+
                "<th>"+"Required Width"+"</th>"+
                "<th>"+"Percent Height"+"</th>"+
                "<th>"+"Percent Width"+"</th>"+
                "</tr>";//+
                for(var i = 0; i<data.length; i++ )
                {
                    // { "totalheight" : pocHeightValue, "totalwidth" : pocWidthValue, "requiredheight" : reqHeightValue, "requiredwidth" : reqWidthValue, "percentheight" : percentHeight, "percentwidth" :  percentWidth };
                    j = i+1;
                    htmlData += "<tr>"+
                    "<th>"+j+"</th>"+
                    "<th>"+data[i].totalheight+"</th>"+
                    "<th>"+data[i].totalwidth+"</th>"+
                    "<th>"+data[i].requiredheight+"</th>"+
                    "<th>"+data[i].requiredwidth+"</th>"+
                    "<th>"+data[i].percentheight.toFixed(2)+"</th>"+
                    "<th>"+data[i].percentwidth.toFixed(2)+"</th>"+
                    "</tr>";
                }
                htmlData += "</table></div>";
            }
            // pastData.innerHTML = button + "<p style=\"word-break: break-all; white-space: normal;\">" + jsonString + "</p>" + "</div>";
            pastData.innerHTML = button + htmlData + "</div>";
            // menuDiv.style.visibility = hidden;
            // menuDiv.visibility = hidden;
        }
        else
        {
            pastData.innerHTML = ""
            // menuDiv.style.visibility = visible;
            // menuDiv.visibility = visible;
        }
    }
    catch(err) {
        //Block of code to handle errors
    } 
    finally {
        //Block of code to be executed regardless of the try / catch result
    }   
}

function ClearHistory()
{
    try 
    {
        // window.prompt
        // window.alert
        var shallClear = window.confirm("Shall we clear the entire history of you work ?")
        if(shallClear)
        {
            var pastData = document.getElementById("pastData");
            pastData.innerHTML = "";
            document.cookie = "";
            document.cookie = "expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=."+window.location.host;//window.location.hostname
        }
        else
        {

        }
    }
    catch(err) {
        //Block of code to handle errors
    } 
    finally {
        //Block of code to be executed regardless of the try / catch result
    }   
}

function reqHeightChanged()
{
    try 
    {
        var reqHeightPercent = document.getElementById("reqHeightPercent");
        var pocHeight = document.getElementById("pocHeight");
        var reqHeight = document.getElementById("reqHeight");
        var percentHeight = ((reqHeight.value * 100)/pocHeight.value).toFixed(2);
        reqHeightPercent.innerHTML = percentHeight;
    }
    catch(err) {
        //Block of code to handle errors
    } 
    finally {
        //Block of code to be executed regardless of the try / catch result
    }  
}

function reqWidthChanged()
{
    try 
    {
        var reqWidthPercent = document.getElementById("reqWidthPercent");
        var pocWidth = document.getElementById("pocWidth");
        var reqWidth = document.getElementById("reqWidth");
        var percentWidth = ((reqWidth.value * 100)/pocWidth.value).toFixed(2);
        reqWidthPercent.innerHTML = percentWidth;
    }
    catch(err) {
        //Block of code to handle errors
    } 
    finally {
        //Block of code to be executed regardless of the try / catch result
    }  
}

