/**
 * Created by king on 2017/3/9.
 */
var dom=document.getElementById('clock');
var ctx=dom.getContext('2d');
var width=ctx.canvas.width;
var height=ctx.canvas.height;
var r=width/2;
var rem=width/200;

function drawBackground() {
    ctx.save();
    ctx.translate(r, r);
    ctx.beginPath();
    ctx.lineWidth = 10*rem;
    ctx.arc(0, 0, r - ctx.lineWidth/2, 0, 2 * Math.PI, false);
    ctx.stroke();

    var hournums = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    ctx.font = rem*18+'px Arial';
        ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    hournums.forEach(function (num, i) {
        var rad = 2 * Math.PI / 12 * i;
        var x = Math.cos(rad) * (r - 30*rem);
        var y = Math.sin(rad) * (r - 30*rem);
        ctx.fillText(num, x, y);
    });
    for (var i = 0; i < 60; i++) {
        var rad = 2 * Math.PI / 60 * i;
        var x = Math.cos(rad) * (r - 18*rem);
        var y = Math.sin(rad) * (r - 18*rem);
        ctx.beginPath();
        if (i % 5 === 0) {
            ctx.fillStyle = '#000';
            ctx.arc(x, y, 2*rem, 0, 2 * Math.PI, false);
        }
        else {
            ctx.fillStyle = '#ccc';
            ctx.arc(x, y, 2*rem, 0, 2 * Math.PI, false);
        }
        ctx.fill();
    }
}
function drawhours(hour,sec){
    ctx.save();
    ctx.beginPath();
    var rad=2*Math.PI/12*hour;
    var mard=2*Math.PI/12/60*sec;
    ctx.rotate(rad+mard);
    ctx.lineWidth= 6*rem;
    ctx.lineCap="round";
    ctx.moveTo(0,10*rem);
    ctx.lineTo(0,-r/2);
    ctx.stroke();
    ctx.restore();
    }
function drawmint(mint){
    ctx.save();
    ctx.beginPath();
    var rad=2*Math.PI/60*mint;
    ctx.rotate(rad);
    ctx.lineWidth= 3*rem;
    ctx.lineCap="round";
    ctx.moveTo(0,10*rem);
    ctx.lineTo(0,-r+30*rem);
    ctx.stroke();
    ctx.restore();
}
function drawsec(sec){
    ctx.save();
    ctx.beginPath();
    var rad=2*Math.PI/60*sec;
    ctx.rotate(rad);
    ctx.fillStyle='#c14543';
    ctx.moveTo(-2*rem,20*rem);
    ctx.lineTo(2*rem,20*rem);
    ctx.lineTo(1,-r+18*rem);
    ctx.lineTo(-1,-r+18*rem);
    ctx.fill();
    ctx.restore();
}
function drawdot(){
    ctx.beginPath();
    ctx.fillStyle='#fff';
    ctx.arc(0,0,3*rem,0,2*Math.PI,false);
    ctx.fill();
}
function  draw(){
    ctx.clearRect(0,0,width,height);
    var now =new Date();
    var hours=now.getHours();
    var mint=now.getMinutes();
    var sec=now.getSeconds();
    drawBackground();
    drawhours(hours,mint);
    drawmint(mint);
    drawsec(sec);
    drawdot();
    ctx.restore();

}
draw();

setInterval(draw,1000);