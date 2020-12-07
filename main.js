var lastPositionX, lastPositionY;
var width=screen.width;
var newWidth=screen.width-70;
var newHeight=screen.height-300;
canvas=document.getElementById("myUserDrawingSpace");
ctx=canvas.getContext("2d");
var color="Aquamarine"
width=2;
if(width<992)
{
    document.getElementById("myUserDrawingSpace").width=newWidth;
    document.getElementById("myUserDrawingSpace").height=newHeight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchStart);
function my_touchStart(e)
{    
    lastPositionX=e.touches[0].clientX-canvas.offsetLeft;
    lastPositionY=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchMove);
function my_touchMove(e)
{
    console.log("my_touchmove");
    currentPositionX=e.touches[0].clientX-canvas.offsetLeft;
    currentPositionY=e.touches[0].clientY-canvas.offsetTop;
    console.log("Current position of X and Y =");
    console.log("X - " + currentPositionX + " and Y - " + currentPositionY);
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(lastPositionX, lastPositionY);
    ctx.lineTo(currentPositionX, currentPositionY);
    ctx.stroke();
    color=document.getElementById("userColour").value;
    }
function clear()
{
    ctx.rect(800, 600, 0, 0);
}