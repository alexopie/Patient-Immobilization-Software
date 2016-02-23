function main () {
    init();
}

var A0;
var A1;
var A2;
var A3;

function init(){
    var canvas = document.getElementById('myCanvas');
    var width = canvas.width;
    var height = canvas.height;
    
    A0 = [width/2, height/2];
    
    window.requestAnimationFrame(draw);
}



function draw() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext("2d");
    
    var width = canvas.width;
    var height = canvas.height;

    ctx.clearRect(0,0,ctx.width,ctx.height); // clear canvas
    
    ctx.fillStyle = "#000000";    //background
    ctx.fillRect(0,0,width,height);
    
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(25,150,150,50);




    ctx.fillStyle = "#0000FF"; 
    ctx.font="20px Georgia";
    ctx.fillText("A3",50,175,150);

    

    
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(250,150,150,50);
    ctx.fillText("A0",50,175,150);
    
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(175,0,50,150);
    ctx.fillText("A1",50,175,150);
    
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(175,225,50,150);
    ctx.fillText("A2",50,175,150);
    //hi
    
    
    
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(A0[0],A0[1],150,75);
    
    //ctx.fillStyle = "#0000FF";
    //ctx.fillRect(100,100,150,75);
    
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(200,200,150,75);
    
    //ctx.fillStyle = "#FF0000";
    //ctx.fillRect(300,300,150,75);

    window.requestAnimationFrame(draw);
}
