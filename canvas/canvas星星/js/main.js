/**
 * Created by king on 2017/3/13.
 */
var canvas;
var ctx;

var w;
var h;
var girlPic = new Image();
var starPic = new Image();

var stars = [];
var num = 300;
var lastTime;
var deltaTime;
var alive = 0;

var switchy = false;

function init()  {
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");
    w=canvas.width;
    h=canvas.height;

    document.addEventListener("mousemove",mousemove,false);

    girlPic.src="src/girl.jpg";
    starPic.src="src/star.png";

    for(var i=0;i<num;i++){
        stars[i] = new starObj();
        stars[i].init();
    }
    lastTime=Date.now();
    gameLoop();

}
document.body.onload=init;
    function gameLoop(){
        window.requestAnimFrame(gameLoop);

        var now=Date.now();
        deltaTime=now-lastTime;
        lastTime=now;
        drawbackgroud();
        drawgirl();
        drawstars();
        aliveUpdate();
    }

    function drawbackgroud(){
        ctx.fillStyle="#393550";
        ctx.fillRect(0,0,w,h);
    }
    function drawgirl(){
        ctx.drawImage(girlPic,100,150,600,300);
    }
    function mousemove(e) {
        if (e.offsetX || e.layerX) {

            var px = e.offsetX == undefined ? e.layerX : e.offsetX;
            var py = e.offsetY == undefined ? e.layerY : e.offsetY;

            if (px > 100 && px < 700 && py > 150 && py < 450) {
                switchy = true;
            }
            else {
                switchy = false;
            }
        }
    }


