/*
ctx.clearRect(0, 0, 150, 150);
ctx.save();
ctx.restore();
*/

// Tutorials();

/*
An example 
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
An example on basic animations, A looping panorama Example
*/

function Tutorial()
{
    var img = new Image();

    // User Variables - customize these to change the image being scrolled, its
    // direction, and the speed.
    
    img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';
    var CanvasXSize = 800;
    var CanvasYSize = 200;
    var speed = 30; // lower is faster
    var scale = 1.05;
    var y = -4.5; // vertical offset
    
    // Main program
    
    var dx = 0.75;
    var imgW;
    var imgH;
    var x = 0;
    var clearX;
    var clearY;
    var ctx;
    
    img.onload = function() {
        imgW = img.width * scale;
        imgH = img.height * scale;
        
        if (imgW > CanvasXSize) {
            // image larger than canvas
            x = CanvasXSize - imgW;
        }
        if (imgW > CanvasXSize) {
            // image width larger than canvas
            clearX = imgW;
        } else {
            clearX = CanvasXSize;
        }
        if (imgH > CanvasYSize) {
            // image height larger than canvas
            clearY = imgH;
        } else {
            clearY = CanvasYSize;
        }
        
        // get canvas context
        ctx = document.getElementById('animationLayer').getContext('2d');
     
        // set refresh rate
        return setInterval(draw, speed);
    }
    


    // var animationCanavas = document.getElementById("animationLayer");
    // animationCanavas.height = 150;
    // animationCanavas.width = 150;
    // var ctx = "";
    // if(animationCanavas.getContext)
    // {
        ctx.clearRect(0, 0, clearX, clearY); // clear the canvas
    
        // if image is <= Canvas Size
        if (imgW <= CanvasXSize) {
            // reset, start from beginning
            if (x > CanvasXSize) {
                x = -imgW + x;
            }
            // draw additional image1
            if (x > 0) {
                ctx.drawImage(img, -imgW + x, y, imgW, imgH);
            }
            // draw additional image2
            if (x - imgW > 0) {
                ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
            }
        }
    
        // image is > Canvas Size
        else {
            // reset, start from beginning
            if (x > (CanvasXSize)) {
                x = CanvasXSize - imgW;
            }
            // draw aditional image
            if (x > (CanvasXSize-imgW)) {
                ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
            }
        }
        // draw image
        ctx.drawImage(img, x, y,imgW, imgH);
        // amount to move
        x += dx;
    // }
    // else
    // {

    // }
}


/*
An example on basic animations, clock Example
*/
function TutorialEightTwo()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        var now = new Date();
        ctx = animationCanavas.getContext("2d");
        ctx.save();
        ctx.clearRect(0, 0, 150, 150);
        ctx.translate(75, 75);
        ctx.scale(0.4, 0.4);
        ctx.rotate(-Math.PI / 2);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
      
        // Hour marks
        ctx.save();
        for (var i = 0; i < 12; i++) {
          ctx.beginPath();
          ctx.rotate(Math.PI / 6);
          ctx.moveTo(100, 0);
          ctx.lineTo(120, 0);
          ctx.stroke();
        }
        ctx.restore();
      
        // Minute marks
        ctx.save();
        ctx.lineWidth = 5;
        for (i = 0; i < 60; i++) {
          if (i % 5!= 0) {
            ctx.beginPath();
            ctx.moveTo(117, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
          }
          ctx.rotate(Math.PI / 30);
        }
        ctx.restore();
       
        var sec = now.getSeconds();
        var min = now.getMinutes();
        var hr  = now.getHours();
        hr = hr >= 12 ? hr - 12 : hr;
      
        ctx.fillStyle = 'black';
      
        // write Hours
        ctx.save();
        ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.moveTo(-20, 0);
        ctx.lineTo(80, 0);
        ctx.stroke();
        ctx.restore();
      
        // write Minutes
        ctx.save();
        ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(-28, 0);
        ctx.lineTo(112, 0);
        ctx.stroke();
        ctx.restore();
       
        // Write seconds
        ctx.save();
        ctx.rotate(sec * Math.PI / 30);
        ctx.strokeStyle = '#D40000';
        ctx.fillStyle = '#D40000';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(-30, 0);
        ctx.lineTo(83, 0);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.restore();
      
        ctx.beginPath();
        ctx.lineWidth = 14;
        ctx.strokeStyle = '#325FA2';
        ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
        ctx.stroke();
      
        ctx.restore();
      
        window.requestAnimationFrame(TutorialEightTwo);
    }
    else
    {

    }
}
//window.requestAnimationFrame(TutorialEightTwo)


/*
An example on basic animations, Solar System Example
*/
var sun = new Image();
var moon = new Image();
var earth = new Image();
function initEightOne() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(TutorialEightOne);
}

function TutorialEightOne()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 300;
    animationCanavas.width = 300;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0, 0, 300, 300); // clear canvas
      
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
        ctx.save();
        ctx.translate(150, 150);
      
        // Earth
        var time = new Date();
        ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
        ctx.translate(105, 0);
        ctx.fillRect(0, -12, 50, 24); // Shadow
        ctx.drawImage(earth, -12, -12);
      
        // Moon
        ctx.save();
        ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
        ctx.translate(0, 28.5);
        ctx.drawImage(moon, -3.5, -3.5);
        ctx.restore();
      
        ctx.restore();
        
        ctx.beginPath();
        ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
        ctx.stroke();
       
        ctx.drawImage(sun, 0, 0, 300, 300);
      
        window.requestAnimationFrame(TutorialEightOne);
    }
    else
    {

    }
}
//initEightOne();



/*
Basic Animations
These are the steps you need to take to draw a frame:

Clear the canvas
Unless the shapes you'll be drawing fill the complete canvas (for instance a backdrop image), you need to clear any shapes that have been drawn previously. The easiest way to do this is using the clearRect() method.
Save the canvas state
If you're changing any setting (such as styles, transformations, etc.) which affect the canvas state and you want to make sure the original state is used each time a frame is drawn, you need to save that original state.
Draw animated shapes
The step where you do the actual frame rendering.
Restore the canvas state
If you've saved the state, restore it before drawing a new frame.

Controlling an animation
Shapes are drawn to the canvas by using the canvas methods directly or by calling custom functions. In normal circumstances, we only see these results appear on the canvas when the script finishes executing. For instance, it isn't possible to do an animation from within a for loop.

That means we need a way to execute our drawing functions over a period of time. There are two ways to control an animation like this.

Scheduled updates
First there's the window.setInterval(), window.setTimeout(), and window.requestAnimationFrame() functions, which can be used to call a specific function over a set period of time.

setInterval(function, delay)
Starts repeatedly executing the function specified by function every delay milliseconds.
setTimeout(function, delay)
Executes the function specified by function in delay milliseconds.
requestAnimationFrame(callback)
Tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.
If you don't want any user interaction you can use the setInterval() function which repeatedly executes the supplied code. If we wanted to make a game, we could use keyboard or mouse events to control the animation and use setTimeout(). By setting EventListeners, we catch any user interaction and execute our animation functions.

In the examples below, we'll use the window.requestAnimationFrame() method to control the animation. The requestAnimationFrame method provides a smoother and more efficient way for animating by calling the animation frame when the system is ready to paint the frame. The number of callbacks is usually 60 times per second and may be reduced to a lower rate when running in background tabs. For more information about the animation loop, especially for games, see the article Anatomy of a video game in our Game development zone.

*/








/*
An example to show clipping paths and color compositions of overlaying layers of canavs
for more details loo the image in images folder
A clipping path is like a normal canvas shape but it acts as a mask to hide unwanted parts of shapes. This is visualized in the image on the right. The red star shape is our clipping path. Everything that falls outside of this path won't get drawn on the canvas.

If we compare clipping paths to the globalCompositeOperation property we've seen above, we see two compositing modes that achieve more or less the same effect in source-in and source-atop. The most important differences between the two are that clipping paths are never actually drawn to the canvas and the clipping path is never affected by adding new shapes. This makes clipping paths ideal for drawing multiple shapes in a restricted area.

In the chapter about drawing shapes I only mentioned the stroke() and fill() methods, but there's a third method we can use with paths, called clip().

clip()
Turns the path currently being built into the current clipping path.
You use clip() instead of closePath() to close a path and turn it into a clipping path instead of stroking or filling the path.

By default the <canvas> element has a clipping path that's the exact same size as the canvas itself. In other words, no clipping occurs.
*/
function TutorialsSevenOne()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        ctx.fillRect(0, 0, 150, 150);
        ctx.translate(75, 75);
      
        // Create a circular clipping path
        ctx.beginPath();
        ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
        ctx.clip();
      
        // draw background
        var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
        lingrad.addColorStop(0, '#232256');
        lingrad.addColorStop(1, '#143778');
        
        ctx.fillStyle = lingrad;
        ctx.fillRect(-75, -75, 150, 150);
      
        // draw stars
        for (var j = 1; j < 50; j++) {
          ctx.save();
          ctx.fillStyle = '#fff';
          ctx.translate(75 - Math.floor(Math.random() * 150),
                        75 - Math.floor(Math.random() * 150));
          drawStar(ctx, Math.floor(Math.random() * 4) + 2);
          ctx.restore();
        }
        function drawStar(ctx, r) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(r, 0);
            for (var i = 0; i < 9; i++) {
                ctx.rotate(Math.PI / 5);
                if (i % 2 === 0) {
                    ctx.lineTo((r / 0.525731) * 0.200811, 0);
                }
                else
                {
                    ctx.lineTo(r, 0);
                }
            }
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }
    else
    {

    }
}


/*
An example to show the property of transformations

Transformations
Finally, the following transformation methods allow modifications directly to the transformation matrix.

transform(a, b, c, d, e, f)
Multiplies the current transformation matrix with the matrix described by its arguments. The transformation matrix is described by: [ a	c	e	b	d	f	0	0	1 ]
If any of the arguments are Infinity the transformation matrix must be marked as infinite instead of the method throwing an exception.
The parameters of this function are:

a (m11)
Horizontal scaling.
b (m12)
Horizontal skewing.
c (m21)
Vertical skewing.
d (m22)
Vertical scaling.
e (dx)
Horizontal moving.
f (dy)
Vertical moving.
setTransform(a, b, c, d, e, f)
Resets the current transform to the identity matrix, and then invokes the transform() method with the same arguments. This basically undoes the current transformation, then sets the specified transform, all in one step.
resetTransform()
Resets the current transform to the identity matrix. This is the same as calling: ctx.setTransform(1, 0, 0, 1, 0, 0);

*/
function TutorialSixFive()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        var sin = Math.sin(Math.PI / 6);
        var cos = Math.cos(Math.PI / 6);
        ctx.translate(100, 100);
        var c = 0;
        for (var i = 0; i <= 12; i++) {
          c = Math.floor(255 / 12 * i);
          ctx.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')';
          ctx.fillRect(0, 0, 100, 10);
          ctx.transform(cos, sin, -sin, cos, 0, 0);
        }
        
        ctx.setTransform(-1, 0, 0, 1, 100, 100);
        ctx.fillStyle = 'rgba(255, 128, 255, 0.5)';
        ctx.fillRect(0, 50, 100, 100);
    }
    else
    {

    }
}


/*
An example to show scaling the canavas property

The next transformation method is scaling. We use it to increase or decrease the units in our canvas grid. This can be used to draw scaled down or enlarged shapes and bitmaps.

scale(x, y)
Scales the canvas units by x horizontally and by y vertically. Both parameters are real numbers. Values that are smaller than 1.0 reduce the unit size and values above 1.0 increase the unit size. Values of 1.0 leave the units the same size.
Using negative numbers you can do axis mirroring (for example using translate(0,canvas.height); scale(1,-1); you will have the well-known Cartesian coordinate system, with the origin in the bottom left corner).

By default, one unit on the canvas is exactly one pixel. If we apply, for instance, a scaling factor of 0.5, the resulting unit would become 0.5 pixels and so shapes would be drawn at half size. In a similar way setting the scaling factor to 2.0 would increase the unit size and one unit now becomes two pixels. This results in shapes being drawn twice as large.

*/
function TutorialSixFour()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        // draw a simple rectangle, but scale it.
        ctx.save();
        ctx.scale(10, 3);
        ctx.fillRect(1, 10, 10, 10);
        ctx.restore();
      
        // mirror horizontally
        ctx.scale(-1, 1);
        ctx.font = '48px serif';
        ctx.fillText('MDN', -135, 120);
    }
    else
    {

    }
}


/*
An example to show rotation property of the canavas

The second transformation method is rotate(). We use it to rotate the canvas around the current origin.

rotate(angle)
Rotates the canvas clockwise around the current origin by the angle number of radians.
The rotation center point is always the canvas origin. To change the center point, we will need to move the canvas by using the translate() method.

*/
function TutorialSixThree()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
  
        // left rectangles, rotate from canvas origin
        ctx.save();
        // blue rect
        ctx.fillStyle = '#0095DD';
        ctx.fillRect(30, 30, 100, 100); 
        ctx.rotate((Math.PI / 180) * 25);
        // grey rect
        ctx.fillStyle = '#4D4E53';
        ctx.fillRect(30, 30, 100, 100);
        ctx.restore();
      
        // right rectangles, rotate from rectangle center
        // draw blue rect
        ctx.fillStyle = '#0095DD';
        ctx.fillRect(150, 30, 100, 100);  
        
        ctx.translate(200, 80); // translate to rectangle center 
                                // x = x + 0.5 * width
                                // y = y + 0.5 * height
        ctx.rotate((Math.PI / 180) * 25); // rotate
        ctx.translate(-200, -80); // translate back
        
        // draw grey rect
        ctx.fillStyle = '#4D4E53';
        ctx.fillRect(150, 30, 100, 100);
    }
    else
    {

    }
}


/*
An example to show translating property

Translating
The first of the transformation methods we'll look at is translate(). This method is used to move the canvas and its origin to a different point in the grid.

translate(x, y)
Moves the canvas and its origin on the grid. x indicates the horizontal distance to move, and y indicates how far to move the grid vertically.
It's a good idea to save the canvas state before doing any transformations. In most cases, it is just easier to call the restore method than having to do a reverse translation to return to the original state. Also if you're translating inside a loop and don't save and restore the canvas state, you might end up missing part of your drawing, because it was drawn outside the canvas edge.

*/
function TutorialSixTwo()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 3; j++) {
            ctx.save();
            ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
            ctx.translate(10 + j * 50, 10 + i * 50);
            ctx.fillRect(0, 0, 25, 25);
            ctx.restore();
          }
        }
    }
    else
    {

    }
}


/*
An example to show save and restoring state

save()
Saves the entire state of the canvas. not the diagrams, but the colors, properties of the drawings
restore()
Restores the most recently saved canvas state.

Canvas states are stored on a stack. Every time the save() method is called, the current drawing state is pushed onto the stack. A drawing state consists of

The transformations that have been applied (i.e. translate, rotate and scale – see below).
The current values of the following attributes: strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled.
The current clipping path, which we'll see in the next section.
You can call the save() method as many times as you like. Each time the restore() method is called, the last saved state is popped off the stack and all saved settings are restored.

*/
function TutorialSixOne()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        ctx.fillRect(0, 0, 150, 150);   // Draw a rectangle with default settings
        ctx.save();                  // Save the default state
       
        ctx.fillStyle = '#09F';      // Make changes to the settings
        ctx.fillRect(15, 15, 120, 120); // Draw a rectangle with new settings
      
        ctx.save();                  // Save the current state
        ctx.fillStyle = '#FFF';      // Make changes to the settings
        ctx.globalAlpha = 0.5; 
        ctx.fillRect(30, 30, 90, 90);   // Draw a rectangle with new settings
      
        ctx.restore();               // Restore previous state
        ctx.fillRect(45, 45, 60, 60);   // Draw a rectangle with restored settings
      
        ctx.restore();               // Restore original state
        ctx.fillRect(60, 60, 30, 30);   // Draw a rectangle with restored settings
    }
    else
    {

    }
}


/*
controlling image scaling behaviour
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
*/
/*
An example of art gallery
*/
function Tutorial()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {

        /*
        <html>
 <body onload="draw();">
     <table>
      <tr>
        <td><img src="https://mdn.mozillademos.org/files/5399/gallery_1.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5401/gallery_2.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5403/gallery_3.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5405/gallery_4.jpg"></td>
      </tr>
      <tr>
        <td><img src="https://mdn.mozillademos.org/files/5407/gallery_5.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5409/gallery_6.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5411/gallery_7.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5413/gallery_8.jpg"></td>
      </tr>
     </table>
     <img id="frame" src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" width="132" height="150">
 </body>
</html>
        */
       /*
       body {
  background: 0 -100px repeat-x url(https://mdn.mozillademos.org/files/5415/bg_gallery.png) #4F191A;
  margin: 10px;
}

img {
  display: none;
}

table {
  margin: 0 auto;
}

td {
  padding: 15px;
}
       */

        ctx = animationCanavas.getContext("2d");
        /*
        // Loop through all images
  for (var i = 0; i < document.images.length; i++) {

    // Don't add a canvas for the frame image
    if (document.images[i].getAttribute('id') != 'frame') {

      // Create canvas element
      canvas = document.createElement('canvas');
      canvas.setAttribute('width', 132);
      canvas.setAttribute('height', 150);

      // Insert before the image
      document.images[i].parentNode.insertBefore(canvas,document.images[i]);

      ctx = canvas.getContext('2d');

      // Draw image to canvas
      ctx.drawImage(document.images[i], 15, 20);

      // Add frame
      ctx.drawImage(document.getElementById('frame'), 0, 0);
    }
  }
        */
    }
    else
    {

    }
}


/*
An example to set frames to an image
*/
function TutorialFiveFour()
{
    /*
    <html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
   <div style="display:none;">
     <img id="source" src="https://mdn.mozillademos.org/files/5397/rhino.jpg" width="300" height="227">
     <img id="frame" src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" width="132" height="150">
   </div>
 </body>
</html>
    */
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        var ctx = canvas.getContext('2d');
      
        // Draw slice
        ctx.drawImage(document.getElementById('source'),
                      33, 71, 104, 124, 21, 20, 87, 104);
      
        // Draw frame
        ctx.drawImage(document.getElementById('frame'), 0, 0);
    }
    else
    {

    }
}



/*
An example 
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
Given an image, this function takes the area of the source image specified by the rectangle whose top-left corner is (sx, sy) and whose width and height are sWidth and sHeight and draws it into the canvas, placing it on the canvas at (dx, dy) and scaling it to the size specified by dWidth and dHeight.
*/
function TutorialFiveThree()
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
An example to scale an image
drawImage(image, x, y, width, height)
This adds the width and height parameters, which indicate the size to which to scale the image when drawing it onto the canvas.
here we are reducing the actual image size and showing it in tiles
*/
function TutorialFiveTwo()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        var img = new Image();
        img.onload = function() {
          for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
              ctx.drawImage(img, j * 50, i * 38, 50, 38);
            }
          }
        };
        img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
    }
    else
    {

    }
}


/*
An example of images
The canvas API is able to use any of the following data types as an image source:

HTMLImageElement
These are images created using the Image() constructor, as well as any <img> element.
SVGImageElement
These are images embedded using the <image> element.
HTMLVideoElement
Using an HTML <video> element as your image source grabs the current frame from the video and uses it as an image.
HTMLCanvasElement
You can use another <canvas> element as your image source.
These sources are collectively referred to by the type CanvasImageSource.

There are several ways to get images for use on a canvas.

Link to sectionUsing images from the same page
We can obtain a reference to images on the same page as the canvas by using one of:

The document.images collection
The document.getElementsByTagName() method
If you know the ID of the specific image you wish to use, you can use document.getElementById() to retrieve that specific image
Link to sectionUsing images from other domains
Using the crossorigin attribute of an <img> element (reflected by the HTMLImageElement.crossOrigin property), you can request permission to load an image from another domain for use in your call to drawImage(). If the hosting domain permits cross-domain access to the image, the image can be used in your canvas without tainting it; otherwise using the image will taint the canvas.

Link to sectionUsing other canvas elements
Just as with normal images, we access other canvas elements using either the document.getElementsByTagName() or document.getElementById() method. Be sure you've drawn something to the source canvas before using it in your target canvas.

One of the more practical uses of this would be to use a second canvas element as a thumbnail view of the other larger canvas.

Link to sectionCreating an image from scratch
Another option is to create new HTMLImageElement objects in our script. To do this, you can use the convenient Image() constructor:

var img = new Image();   // Create new img element
img.src = 'myImage.png'; // Set source path
When this script gets executed, the image starts loading.

If you try to call drawImage() before the image has finished loading, it won't do anything (or, in older browsers, may even throw an exception). So you need to be sure to use the load event so you don't try this before the image has loaded:

var img = new Image();   // Create new img element
img.addEventListener('load', function() {
  // execute drawImage statements here
}, false);
img.src = 'myImage.png'; // Set source path
If you're only using one external image this can be a good approach, but once you need to track more than one we need to resort to something more clever. It's beyond the scope of this tutorial to look at image pre-loading tactics, but you should keep that in mind.

Link to sectionEmbedding an image via data: URL
Another possible way to include images is via the data: url. Data URLs allow you to completely define an image as a Base64 encoded string of characters directly in your code.

var img = new Image();   // Create new img element
img.src = 'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==';
One advantage of data URLs is that the resulting image is available immediately without another round trip to the server. Another potential advantage is that it is also possible to encapsulate in one file all of your CSS, JavaScript, HTML, and images, making it more portable to other locations.

Some disadvantages of this method are that your image is not cached, and for larger images the encoded url can become quite long.

Link to sectionUsing frames from a video
You can also use frames from a video being presented by a <video> element (even if the video is not visible). For example, if you have a <video> element with the ID "myvideo", you can do this:

function getMyVideo() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    return document.getElementById('myvideo');
  }
}
This returns the HTMLVideoElement object for the video, which, as covered earlier, is one of the objects that can be used as a CanvasImageSource.
*/
function TutorialFiveOne()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        var img = new Image();
        img.onload = function() {
          ctx.drawImage(img, 0, 0);
          ctx.beginPath();
          ctx.moveTo(30, 96);
          ctx.lineTo(70, 66);
          ctx.lineTo(103, 76);
          ctx.lineTo(170, 15);
          ctx.stroke();
        };
        img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
    }
    else
    {

    }
}


/*
An example for advanced text measurements
measureText()
Returns a TextMetrics object containing the width, in pixels, that the specified text will be when drawn in the current text style.
*/
function TutorialFourFive()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        var text = ctx.measureText('foo'); // TextMetrics object
        text.width; // 16; 
    }
    else
    {

    }
}


/*
An example for text baseline
*/
function TutorialFourFour()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        ctx.font = '48px serif';
        ctx.textBaseline = 'hanging';
        ctx.strokeText('Hello world', 0, 100);
    }
    else
    {

    }
}


/*
An example for text styling
font = value
The current text style being used when drawing text. This string uses the same syntax as the CSS font property. The default font is 10px sans-serif.
textAlign = value
Text alignment setting. Possible values: start, end, left, right or center. The default value is start.
textBaseline = value
Baseline alignment setting. Possible values: top, hanging, middle, alphabetic, ideographic, bottom. The default value is alphabetic.
direction = value
Directionality. Possible values: ltr, rtl, inherit. The default value is inherit.
These properties might be familiar to you, if you have worked with CSS before.
*/
function TutorialFourThree()
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
An example of stroke text
*/
function TutorialFourTwo()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        ctx.font = '48px serif';
        ctx.strokeText('Hello world', 10, 50);
        
    }
    else
    {

    }
}


/*
An example for text representation
fillText(text, x, y [, maxWidth])
Fills a given text at the given (x,y) position. Optionally with a maximum width to draw.
strokeText(text, x, y [, maxWidth])
Strokes a given text at the given (x,y) position. Optionally with a maximum width to draw.
font = '48px serif'; to set size and font family
*/
function TutorialFourOne()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        ctx.font = '48px serif';
        ctx.fillText('Hello world', 10, 50);
    }
    else
    {

    }
}


/*
An example for canavas fill rules
When using fill (or clip and isPointinPath) you can optionally provide a fill rule algorithm by which to determine if a point is inside or outside a path and thus if it gets filled or not. This is useful when a path intersects itself or is nested.

Two values are possible:

"nonzero": The non-zero winding rule, which is the default rule.
"evenodd": The even-odd winding rule.
*/
function TutorialThreeThirteen()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        ctx.beginPath(); 
        ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
        ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
        ctx.fill('evenodd');
    }
    else
    {

    }
}


/*
An example to set shadow to a object
shadowOffsetX = float
Indicates the horizontal distance the shadow should extend from the object. This value isn't affected by the transformation matrix. The default is 0.
shadowOffsetY = float
Indicates the vertical distance the shadow should extend from the object. This value isn't affected by the transformation matrix. The default is 0.
shadowBlur = float
Indicates the size of the blurring effect; this value doesn't correspond to a number of pixels and is not affected by the current transformation matrix. The default value is 0.
shadowColor = color
A standard CSS color value indicating the color of the shadow effect; by default, it is fully-transparent black.
*/
function TutorialThreeTwelve()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
       
        ctx.font = '20px Times New Roman';
        ctx.fillStyle = 'Black';
        ctx.fillText('Sample String', 5, 30);
    }
    else
    {

    }
}


/*
An example to create a repeat patterns
createPattern(image, type)
Creates and returns a new canvas pattern object. image is a CanvasImageSource (that is, an HTMLImageElement, another canvas, a <video> element, or the like. type is a string indicating how to use the image.
The type specifies how to use the image in order to create the pattern, and must be one of the following string values:

repeat
Tiles the image in both vertical and horizontal directions.
repeat-x
Tiles the image horizontally but not vertically.
repeat-y
Tiles the image vertically but not horizontally.
no-repeat
Doesn't tile the image. It's used only once.

eg:
var img = new Image();
img.src = 'someimage.png';
var ptrn = ctx.createPattern(img, 'repeat');
*/
function TutorialThreeEleven()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        // create new image object to use as pattern
        var img = new Image();
        img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
        img.onload = function() {
      
          // create pattern
          var ptrn = ctx.createPattern(img, 'repeat');
          ctx.fillStyle = ptrn;
          ctx.fillRect(0, 0, 150, 150);
        }
    }
    else
    {

    }
}


/*
An example to create a radial gradient
*/
function TutorialThreeTen()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        // Create gradients
        var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
        radgrad.addColorStop(0, '#A7D30C');
        radgrad.addColorStop(0.9, '#019F62');
        radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');
        
        var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
        radgrad2.addColorStop(0, '#FF5F98');
        radgrad2.addColorStop(0.75, '#FF0188');
        radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');
      
        var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
        radgrad3.addColorStop(0, '#00C9FF');
        radgrad3.addColorStop(0.8, '#00B5E2');
        radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)');
      
        var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
        radgrad4.addColorStop(0, '#F4F201');
        radgrad4.addColorStop(0.8, '#E4C700');
        radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)');
        
        // draw shapes
        ctx.fillStyle = radgrad4;
        ctx.fillRect(0, 0, 150, 150);
        ctx.fillStyle = radgrad3;
        ctx.fillRect(0, 0, 150, 150);
        ctx.fillStyle = radgrad2;
        ctx.fillRect(0, 0, 150, 150);
        ctx.fillStyle = radgrad;
        ctx.fillRect(0, 0, 150, 150);
        
    }
    else
    {

    }
}

/*
An example to create a linear gradient
createLinearGradient(x1, y1, x2, y2); //(x1,x2) start points, (x2,y2) end points
Creates a linear gradient object with a starting point of (x1, y1) and an end point of (x2, y2).
createRadialGradient(x1, y1, r1, x2, y2, r2); //(x1,x2) center point of first circle, (x2,y2) center points of second circle, r1,r2 are radii of both the circles respectively.
Creates a radial gradient. The parameters represent two circles, one with its center at (x1, y1) and a radius of r1, and the other with its center at (x2, y2) with a radius of r2.

gradient.addColorStop(position, color)
Creates a new color stop on the gradient object. The position is a number between 0.0 and 1.0 and defines the relative position of the color in the gradient, and the color argument must be a string representing a CSS <color>, indicating the color the gradient should reach at that offset into the transition.
*/
function TutorialThreeNine()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        // Create gradients
        var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
        lingrad.addColorStop(0, '#00ABEB');
        lingrad.addColorStop(0.5, '#fff');
        lingrad.addColorStop(0.5, '#26C000');
        lingrad.addColorStop(1, '#fff');
      
        var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
        lingrad2.addColorStop(0.5, '#000');
        lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
        // assign gradients to fill and stroke styles
        ctx.fillStyle = lingrad;
        ctx.strokeStyle = lingrad2;
        
        // draw shapes
        ctx.fillRect(10, 10, 130, 130);
        ctx.strokeRect(50, 50, 50, 50);
        
    }
    else
    {

    }
}


/*
An example to draw moving line dashes
*/
function TutorialThreeEight()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var offset = 0;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        function draw() {
            ctx.clearRect(0, 0, animationCanavas.width, animationCanavas.height);
            ctx.setLineDash([4, 2]);
            ctx.lineDashOffset = -offset;
            ctx.strokeRect(10, 10, 100, 100);
        }
        
        function march() {
            offset++;
            if (offset > 16) {
              offset = 0;
            }
            draw();
            setTimeout(march, 20);
        }
        march();
    }
    else
    {

    }
}

/*
An example of miter Limit property
miterLimit = max miterLength / lineWidth = 1 / sin ( min θ / 2 )
The default miter limit of 10.0 will strip all miters for sharp angles below about 11 degrees.
A miter limit equal to √2 ≈ 1.4142136 (rounded up) will strip miters for all acute angles, keeping miter joins only for obtuse or right angles.
A miter limit equal to 1.0 is valid but will disable all miters.
Values below 1.0 are invalid for the miter limit.
*/
function TutorialThreeSeven()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        // Clear canvas
        ctx.clearRect(0, 0, 150, 150)
        
        // Draw guides
        ctx.strokeStyle = '#09f';
        ctx.lineWidth   = 2;
        ctx.strokeRect(-5, 50, 160, 50);
 
        // Set line styles
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 10;
 
        // check input
        if (document.getElementById('miterLimit').value.match(/\d+(\.\d+)?/)) {
            ctx.miterLimit = parseFloat(document.getElementById('miterLimit').value);
        } 
        else
        {
            alert('Value must be a positive number');
        }
 
        // Draw lines
        ctx.beginPath();
        ctx.moveTo(0, 100);
        for (i = 0; i < 24 ; i++) {
            var dy = i % 2 == 0 ? 25 : -25;
            ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
        }
        ctx.stroke();
        return false;
    }
    else
    {

    }
}

/*
An example Line Joins
round
Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to half the line width.
bevel
Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
miter
Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is effected by the miterLimit property which is explained below.
*/
function TutorialThreeSix()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        var lineJoin = ['round', 'bevel', 'miter'];
        ctx.lineWidth = 10;
        for (var i = 0; i < lineJoin.length; i++) {
            ctx.lineJoin = lineJoin[i];
            ctx.beginPath();
            ctx.moveTo(-5, 5 + i * 40)
            ctx.lineTo(35, 45 + i * 40);
            ctx.lineTo(75, 5 + i * 40);
            ctx.lineTo(115, 45 + i * 40);
            ctx.lineTo(155, 5 + i * 40);
            ctx.stroke();
        }
    }
    else
    {

    }
}


/*
An example of line caps, which are the shape of edges of the lines 
butt
The ends of lines are squared off at the endpoints.
round
The ends of lines are rounded.
square
The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.
*/
function TutorialThreeFive()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        var lineCap = ['butt', 'round', 'square'];

        // Draw guides
        ctx.strokeStyle = '#09f';
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(140, 10);
        ctx.moveTo(10, 140);
        ctx.lineTo(140, 140);
        ctx.stroke();

        // Draw lines
        ctx.strokeStyle = 'black';
        for (var i = 0; i < lineCap.length; i++) {
            ctx.lineWidth = 15;
            ctx.lineCap = lineCap[i];
            ctx.beginPath();
            ctx.moveTo(25 + i * 50, 10);
            ctx.lineTo(25 + i * 50, 140);
            ctx.stroke();
        }
    }
    else
    {

    }
}


/*
An example to show different line widths
There are several properties which allow us to style lines.
lineWidth = value
Sets the width of lines drawn in the future.
lineCap = type
Sets the appearance of the ends of lines.
lineJoin = type
Sets the appearance of the "corners" where lines meet.
miterLimit = value
Establishes a limit on the miter when two lines join at a sharp angle, to let you control how thick the junction becomes.
getLineDash()
Returns the current line dash pattern array containing an even number of non-negative numbers.
setLineDash(segments)
Sets the current line dash pattern.
lineDashOffset = value
Specifies where to start a dash array on a line.
*/
function TutorialThreeFour()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        for (var i = 0; i < 10; i++) {
            ctx.lineWidth = 1 + i;
            ctx.beginPath();
            ctx.moveTo(5 + i * 14, 5);
            ctx.lineTo(5 + i * 14, 140);
            ctx.stroke();
        }
    }
    else
    {

    }
}


/*
An example to set a global transparency or alpha value
globalAlpha = 0.2;
*/
function TutorialThreeThree()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        ctx.fillStyle = '#FD0';
        ctx.fillRect(0, 0, 75, 75);
        ctx.fillStyle = '#6C0';
        ctx.fillRect(75, 0, 75, 75);
        ctx.fillStyle = '#09F';
        ctx.fillRect(0, 75, 75, 75);
        ctx.fillStyle = '#F30';
        ctx.fillRect(75, 75, 75, 75);
        ctx.fillStyle = '#FFF';

        // set transparency value
        ctx.globalAlpha = 0.2;

        // Draw semi transparent circles
        for (var i = 0; i < 7; i++) {
            ctx.beginPath();
            ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
            ctx.fill();
        }
    }
    else
    {

    }
}


/*
to set alphe or transparency in a color use the following
ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
*/
/*
An example to set stroke color to a object
*/
function TutorialThreeTwo()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
              ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + 
                               Math.floor(255 - 42.5 * j) + ')';
              ctx.beginPath();
              ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
              ctx.stroke();
            }
        }
    }
    else
    {

    }
}


/*
An example to set fill color to a object
ctx.fillStyle = 'orange';
ctx.fillStyle = '#FFA500';
ctx.fillStyle = 'rgb(255, 165, 0)';
ctx.fillStyle = 'rgba(255, 165, 0, 1)';
*/
function TutorialThreeOne()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
              ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                               Math.floor(255 - 42.5 * j) + ', 0)';
              ctx.fillRect(j * 25, i * 25, 25, 25);
            }
        }
    }
    else
    {

    }
}

/*
An example to use svg path 
*/
function TutorialTwoTen()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");

        var p = new Path2D('M10 10 h 80 v 80 h -80 Z');
        ctx.stroke(p);
        ctx.fill(p);
    }
    else
    {

    }

}

/*
An example to set path/svg path for ctx
new Path2D();     // empty path object
new Path2D(path); // copy from another Path2D object
new Path2D(d);    // path from SVG path data

*/
function TutorialTwoNine()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        var rectangle = new Path2D();
        rectangle.rect(10, 10, 50, 50);

        var circle = new Path2D();
        circle.moveTo(125, 35);
        circle.arc(100, 35, 25, 0, 2 * Math.PI);

        ctx.stroke(rectangle);
        ctx.fill(circle);
        
    }
    else
    {

    }
}

/*
An example on Cubic Bezier curves, they have a end point and one or two control point(s).
*/
function TutorialTwoEight()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.stroke();
    }
    else
    {

    }
}

/*
An example on Quadratic Bezier curves, they have a end point and one or two control point(s).
quadraticCurveTo(cpx2,cpy2,x,y);//considering (cpx1,cpx2) as the control points.
quadraticCurveTo(cpx1,cpy1,cpx2,cpy2,x,y);//(cpx1, cpy1), (cpx2,cpy2) are Control points of curve,
(x,y) are end points of the curve, the current pen position is considered as the starting position of the curve.
*/
function TutorialTwoSeven()
{
    var animationCanavas = document.getElementById("animationLayer");
    animationCanavas.height = 150;
    animationCanavas.width = 150;
    var ctx = "";
    if(animationCanavas.getContext)
    {
        ctx = animationCanavas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(75,25);
        ctx.quadraticCurveTo(25,25,25,62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);
        ctx.stroke();
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
rect(x,y,width,height);
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