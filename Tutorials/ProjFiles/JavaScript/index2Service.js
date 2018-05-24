function PageStartUp()
{
    var alterPage = document.getElementById('frameAlterLogPages');
    alterPage.src = "ProjFiles/HtmlFiles/SignIn.html";
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