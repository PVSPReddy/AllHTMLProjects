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

function OpenMenu()
{
    try 
    {
        var pastData = document.getElementById("pastData");
        if(pastData.innerHTML == "")
        {
            pastData.innerHTML = "<p>HelloWorld</p><br/><p>HelloWorld</p><br/><p>HelloWorld</p><br/><p>HelloWorld</p>";
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