var animationCanavas = document.getElementById('animationLayer');
animationCanavas.height = 300;
animationCanavas.width = 600;
var ctx = animationCanavas.getContext('2d');

var  raf;//used from velocity example

var running = false;//used fro mouse control example

/*
an example to draw a plain ball with a moving velocity on screen mouse control and trailing effects
*/
var ball = 
{
    x:100,
    y:100,
    vx:5,
    vy:2,
    radius:25,
    color:'blue',
    draw: function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function clear() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0,0,animationCanavas.width,animationCanavas.height);
}

function draw()
{
    clear();
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.y + ball.vy > animationCanavas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > animationCanavas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
    }
    raf = window.requestAnimationFrame(draw);
}
// animationCanavas.addEventListener('mouseover', function(e){
//     raf = window.requestAnimationFrame(draw);
// });

animationCanavas.addEventListener('mousemove', function(e) {
    if (!running) {
      clear();
      ball.x = e.clientX;
      ball.y = e.clientY;
      ball.draw();
    }
});

animationCanavas.addEventListener("click", function(e){
    if (!running) {
      raf = window.requestAnimationFrame(draw);
      running = true;
    }
})

animationCanavas.addEventListener("mouseout", function(e){
    window.cancelAnimationFrame(raf);
    running = false;
});
ball.draw();


/*
an example to draw a plain ball with a moving velocity on screen


to add more realistic nature add accelaration by 
ball.vy *= .99;
ball.vy += .25;

for trailing effect add 
ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
ctx.fillRect(0, 0, canvas.width, canvas.height);
* /
var ball = 
{
    x:100,
    y:100,
    vx:5,
    vy:2,
    radius:25,
    color:'blue',
    draw: function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
function draw()
{
    ctx.clearRect(0,0, animationCanavas.width, animationCanavas.height);
    ball.draw();
    if (ball.y + ball.vy > animationCanavas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > animationCanavas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
    }
    ball.x += ball.vx;
    ball.y += ball.vy;
    raf = window.requestAnimationFrame(draw);
}
animationCanavas.addEventListener('mouseover', function(e){
    raf = window.requestAnimationFrame(draw);
});
animationCanavas.addEventListener("mouseout", function(e){
    window.cancelAnimationFrame(raf);
});
ball.draw();
*/


/*
an example to draw a plain ball on screen
*  /
var ball = 
{
    x:100,
    y:100,
    radius:25,
    color:'blue',
    draw: function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
ball.draw();
*/