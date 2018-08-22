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
            // "<button class=\"submitColorsButton\" style=\"height: 90%; flex: 1; float: left;\" onclick=\"OpenMenu();\">&#62&#62 Close</button>"+
            "<button class=\"submitColorsButton\" style=\"height: 90%; width: 100%; min-Width:50px;\" onclick=\"ClearHistory();\">Clear</button>";//+
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

var lengthOfRGBTextOld=0;
function rgbValueChanged(e)
{
    try 
    {
        var owner = e;
        var ownerValue = owner.value;
        
        var rval=0;
        var gval=0;
        var bval=0;

        var rValue = document.getElementById("rValue");
        var gValue = document.getElementById("gValue");
        var bValue = document.getElementById("bValue");
        var hexValue = document.getElementById("hexValue");

        if(owner.value > 225)
        {
            owner.value = ownerValue.substring(0,(ownerValue.length-1));
            if(owner == rValue)
            {
                window.setTimeout(function ()
                {
                    gValue.focus();
                    gValue.value = ownerValue.substring(ownerValue.length-1, (ownerValue.length));
                    // document.getElementById('mobileno').focus();
                }, 0);
            }
            else if(owner == gValue)
            {
                window.setTimeout(function ()
                {
                    bValue.focus();
                    bValue.value = ownerValue.substring(ownerValue.length-1, (ownerValue.length));
                    // document.getElementById('mobileno').focus();
                }, 0);
            }
            else if(owner == bValue)
            {}
            else
            {}
        }

        if((owner == gValue || owner == bValue) && rValue.value == "")
        {
            window.setTimeout(function ()
            {
                rValue.focus();
                rValue.value = owner.value;
                owner.value="";
            }, 0);
        }
        else if((owner == bValue) && gValue.value == "")
        {
            window.setTimeout(function ()
            {
                gValue.focus();
                gValue.value = owner.value;
                owner.value="";
            }, 0);
        }
        else if(owner != bValue && bValue.value == "")
        {
        }
        else
        {}

        if(owner == rValue)
        {
            rval = rValue.value;
        }
        else if(owner == gValue)
        {
            gval = gValue.value;
        }
        else if(owner == bValue)
        {
            bval = bValue.value;
        }
        else{}

        var response = rgbToHex(rval, gval, bval);
        hexValue.value = response;
        window.setTimeout(function ()
        {
            presentDataDiv.style.backgroundColor = response;
        }, 0);
        
    }
    catch(err) {
        //Block of code to handle errors
    } 
    finally {
        //Block of code to be executed regardless of the try / catch result
    }  
}

function hexValueChanged()
{
    try 
    {
        var hexValue = document.getElementById("hexValue");
        var rValue = document.getElementById("rValue");
        var gValue = document.getElementById("gValue");
        var bValue = document.getElementById("bValue");
        var presentDataDiv = document.getElementById("presentDataDiv");

        var response = hexToRgb(hexValue.value);
        var values = response.split(",");
        rValue.value = values[0];
        gValue.value = values[1];
        bValue.value = values[2];

        window.setTimeout(function ()
        {
            presentDataDiv.style.backgroundColor = "rgb("+values[0]+", "+values[1]+", "+values[2]+")";
        }, 0);

    }
    catch(err) {
        //Block of code to handle errors
    } 
    finally {
        //Block of code to be executed regardless of the try / catch result
    }  
}

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}

function hexToRgbNew(hex) {
    var arrBuff = new ArrayBuffer(4);
    var vw = new DataView(arrBuff);
    vw.setUint32(0,parseInt(hex, 16),false);
    var arrByte = new Uint8Array(arrBuff);
  
    return arrByte[1] + "," + arrByte[2] + "," + arrByte[3];
  }










function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgbToHex1(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb2(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function hexToRgb3(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}








function rgb2hex(red, green, blue) {
    var rgb = blue | (green << 8) | (red << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1)
}

function hex2rgb(hex) {
    // long version
    r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (r) {
            return r.slice(1,4).map(function(x) { return parseInt(x, 16); });
    }
    // short version
    r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (r) {
            return r.slice(1,4).map(function(x) { return 0x11 * parseInt(x, 16); });
    }
    return null;
}