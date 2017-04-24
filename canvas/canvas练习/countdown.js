/**
 * Created by king on 2017/3/13.
 */
window.onload=function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    drawrect(ctx , 100,100, 400 , 400 ,10 , "#058" ,"red");
}
function  drawrect(ctx ,x , y ,width ,height ,borderwidth , bodercolor ,fillcolor){
    ctx.lineWidth=borderwidth;
    ctx.fillStyle=fillcolor;
    ctx.strokeStyle=bodercolor;

    ctx.fillRect(x, y ,width ,height);
    ctx.strokeRect(x, y ,width ,height);


}