Tutorial();

/*

*/
function Tutorial()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
       
    }
    else
    {

    }
}

/*
An example on arc method to draw circular arcs usinf arcTo method
*/
function TutorialTwoSix()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        // ctx.arc()
        var endAngle = Math.PI;//this is taken in radians not in degrees;
        ctx.moveTo(50,50);
        // ctx.lineTo(75,50);
        ctx.arcTo(100,50,100,100,30);
        ctx.lineTo(150,150);
        ctx.stroke();
    }
    else
    {

    }
}


/*
An example on arc method to draw circular arcs usinf arc method
*/
function TutorialTwoFive()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        // ctx.arc()
        var endAngle = Math.PI;//this is taken in radians not in degrees;
        ctx.arc(75, 75, 75, 0, endAngle, false);//(x,y,radius,start angle,end angle,cloclwisedirection)
        //x,y center of the circluar arc
        //start angle and end angle in radians not in degrees from positive x-axis
        //true = draw in clocl wise direction, false = draw in anticlockwise direction.
        ctx.stroke();
    }
    else
    {

    }
}


/*
An example to draw flled and stroked diagrams
*/
function TutorialTwoFour()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        // Filled triangle
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        // Stroked triangle
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
    }
    else
    {

    }
}


/*
this is very good example to understand the moveTo command.
*/
function TutorialTwoThree()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
    }
    else
    {

    }
}


/*
drawing line diagrams using path
*/
function TutorialTwoTwo()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        ctx.beginPath();//cursor at (0,0) on coordinate system
        ctx.moveTo(75,50);//cursor moved to (75,50) without drawing anything on coordinate system
        ctx.lineTo(100,75);//cursor draws a line from (75,50) to (100,75) on the coordinate system
        ctx.lineTo(100,25);
        ctx.fill();//now the cursor deaws a line from current position to the path where it started drawing the line to create a closed diagram, and fills all the closed path created by the lines above
        //to manually close the path we have to use ctx.closePath();
    }
    else
    {

    }
}

/*
different kinds of available rectangles in clear, filled, stroked.
*/
function TutorialTwoOne()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);


    }
    else
    {

    }
}

/*
This is a introduction example to generate two different colored rectangles
*/
function TutorialOne()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        ctx.fillStyle = "rgb(225,0,225)";
        ctx.fillRect(0,0,150,150);

        ctx.fillStyle = "rgb(0,225,0)";
        ctx.fillRect(25,25,100,100);


    }
    else
    {

    }
}


function onAppStartOne()
{
}