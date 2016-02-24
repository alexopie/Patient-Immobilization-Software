function main () {
    init();
}

var A0;
var A1;
var A2;
var A3;

var rectwidth; // for potentiometer 
var rectheight;

var fontdef;  // for text labeling
var fontval;

var tbarsize; // target reading bar size

function init(){
    var canvas = document.getElementById('myCanvas');
    var width = canvas.width;
    var height = canvas.height;
    
    //height and widths defined based on vertical A0 rectangle
    rectwidth = 50;
    rectheight = 200;
    
    fontdef = "20px Georgia"; // change fontval if pixel size changes
    fontval = 20; //this value needs to be the same as the pixel size defined in fontdef
    
    tbarsize = 5;
    
    A0 = [width/2 - rectwidth/2, height/2 - rectheight];
    A1 = [width/2 + rectwidth/2, height/2];
    A2 = [width/2 - rectwidth/2, height/2 + rectwidth ];
    A3 = [width/2 - rectheight - rectwidth/2, height/2];
    

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
    
  
    //Rectangle A0
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(A0[0], A0[1],rectwidth,rectheight);
    ctx.fillStyle = "#0000FF"; 
    ctx.font= fontdef;
    ctx.fillText("A0",A0[0] + rectwidth/4 , A0[1] + fontval + 2);
      
    //Rectangle A1    ***switch rectheight & rectwidth***
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(A1[0], A1[1], rectheight, rectwidth);
    ctx.fillStyle = "#0000FF"; 
    ctx.font= fontdef;
    ctx.fillText("A1",A1[0] + rectheight - fontval - 2 , A1[1] + rectwidth/2 + fontval/2 - 1);
    
      
    //Rectangle A2
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(A2[0], A2[1],rectwidth,rectheight);
    ctx.fillStyle = "#0000FF"; 
    ctx.font= fontdef;
    ctx.fillText("A2", A2[0] + rectwidth/4 , A2[1] + rectheight - 2 );
      
    //Rectangle A3    ***switch rectheight & rectwidth***
    ctx.fillStyle = "#FFFFFF";
   ctx.fillRect(A3[0], A3[1],rectheight,rectwidth);
    ctx.fillStyle = "#0000FF"; 
    ctx.font= fontdef;
    ctx.fillText("A3",A3[0] + 2, A3[1] + rectwidth/2 + fontval/2 - 1);
    
    
    
    //Target Range Rectangles - Blue
    
    //A0 target bar
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(A0[0], A0[1] + rectheight/2, rectwidth, tbarsize);

    //A1 target bar
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(A1[0] + rectheight/2, A1[1], tbarsize, rectwidth);

    //A2 target bar
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(A2[0], A2[1] + rectheight/2, rectwidth, tbarsize);

    //A3 target bar
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(A3[0] + rectheight/2, A3[1], tbarsize, rectwidth);
    
    
    
    //Implement once filler coder is written
    
    /*
    
    //Rectangle A0_Fill
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(A0[0], A0[1],rectwidth,rectheight);

      
    //Rectangle A1_Fill    ***switch rectheight & rectwidth***
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(A1[0], A1[1], rectheight, rectwidth);

      
    //Rectangle A2_Fill
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(A2[0], A2[1],rectwidth,rectheight);


    //Rectangle A3_Fill    ***switch rectheight & rectwidth***
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(A3[0], A3[1],rectheight,rectwidth);

*/ 

    window.requestAnimationFrame(draw);
}
