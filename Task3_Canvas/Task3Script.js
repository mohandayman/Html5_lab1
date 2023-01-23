
let fromX=0;
let fromY=0;
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let id = setInterval(() => {
if(fromX<300&&fromY<300){
    context.beginPath();
    context.moveTo(fromX,fromY)
    fromX+=20;
    fromY+=10;
    context.strokeStyle = "red";
    context.lineWidth = 2;
    context.lineTo(fromX, fromY);
    context.stroke(); 
}else{
    clearInterval(id);
    alert("The animation Has End");

} 
}, 100);

