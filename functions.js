function main () {
    init();
}

var A0; //Arrays for empty rectangle location
var A1;
var A2;
var A3;

var rectwidth; // for potentiometer 
var rectheight;

var fontdef;  // for text labeling
var fontval;

var tbarsize; // target reading bar size

var A0_TB, A1_TB, A2_TB, A3_TB; // target bar locations based on user input
var A0_Val, A1_Val, A2_Val, A3_Val; //sensor values



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

    //Sensor Reading Values    
    A0_Val = 50;
    A1_Val = 50;
    A2_Val = 50;
    A3_Val = 50;
    
    // Default values - User inputs values by clicking New Patient button
    A0_TB = 50;
    A1_TB = 50;
    A2_TB = 50;
    A3_TB = 50;
    
     //Button
    var NewPatient = document.getElementById('NewPatient');
    NewPatient.onclick = function()
    {
        var A0_string = window.prompt("Please enter the A0 Target Value for this patient:");
        A0_TB = parseInt(A0_string);
        
        var A1_string = window.prompt("Please enter the A1 Target Value for this patient:");
        A1_TB = parseInt(A1_string);
        
        var A2_string = window.prompt("Please enter the A2 Target Value for this patient:");
        A2_TB = parseInt(A2_string);
        
        var A3_string = window.prompt("Please enter the A3 Target Value for this patient:");
        A3_TB = parseInt(A3_string);
    };


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
    ctx.fillText("A0", A0[0] + rectwidth/4 , A0[1] - fontval/2);
      
    //Rectangle A1    ***switch rectheight & rectwidth***
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(A1[0], A1[1], rectheight, rectwidth);
    ctx.fillStyle = "#0000FF"; 
    ctx.font= fontdef;
    ctx.fillText("A1", A1[0] + rectheight + fontval/2 , A1[1] + rectwidth/2 + fontval/2 - 1);
    
      
    //Rectangle A2
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(A2[0], A2[1],rectwidth,rectheight);
    ctx.fillStyle = "#0000FF"; 
    ctx.font= fontdef;
    ctx.fillText("A2", A2[0] + rectwidth/4 , A2[1] + rectheight + fontval + 2 );
      
    //Rectangle A3    ***switch rectheight & rectwidth***
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(A3[0], A3[1],rectheight,rectwidth);
    ctx.fillStyle = "#0000FF"; 
    ctx.font= fontdef;
    ctx.fillText("A3", A3[0] - (fontval*1.5) , A3[1] + rectwidth/2 + fontval/2 - 1);
    
 
    //Implement once filler coder is written
    
    
    //Rectangle A0_Fill
    if((5>= (A0_Val - A0_TB)) && (-5<= (A0_Val - A0_TB)))
    {
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(A0[0], A0[1] + rectheight, rectwidth, -(A0_Val));
    }
    else
    {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(A0[0], A0[1] + rectheight, rectwidth, -(A0_Val));
    }
      
    //Rectangle A1_Fill    ***switch rectheight & rectwidth***
    if((5>= (A1_Val - A1_TB)) && (-5<= (A1_Val - A1_TB)))
    {
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(A1[0], A1[1], (A1_Val), rectwidth);
    }
    else
    {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(A1[0], A1[1], (A1_Val), rectwidth);
    }
    
      
    //Rectangle A2_Fill
    if((5>= (A2_Val - A2_TB)) && (-5<= (A2_Val - A2_TB)))
    {
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(A2[0], A2[1], rectwidth, (A2_Val));
    }
    else
    {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(A2[0], A2[1], rectwidth, (A2_Val));
    }

    //Rectangle A3_Fill    ***switch rectheight & rectwidth***
    if((5>= (A3_Val - A3_TB)) && (-5<= (A3_Val - A3_TB)))
    {
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(A3[0] + rectheight, A3[1], -(A3_Val), rectwidth);
    }
    else
    {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(A3[0] + rectheight, A3[1], -(A3_Val), rectwidth);
    }

   
    //Target Range Rectangles - Blue
    
    //A0 target bar
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(A0[0], (A0[1] + rectheight) - A0_TB, rectwidth, tbarsize);

    //A1 target bar
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(A1[0] + A1_TB, A1[1], tbarsize, rectwidth);

    //A2 target bar
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(A2[0], A2[1] + A2_TB, rectwidth, tbarsize);

    //A3 target bar
    ctx.fillStyle = "#0000FF";
    ctx.fillRect((A3[0] + rectheight) - A3_TB, A3[1], tbarsize, rectwidth);
    

    

    
    
    window.requestAnimationFrame(draw);
}


// <meta http-equiv="refresh" content="5" />
// ^^^ ADD THIS LINE TO <HEAD> OF INDEX FOR AUTOREFRESH
// CONTENT = # IS NUMBER OF SECONDS UNTIL REFRESH

//Seems unnecessary as button still works...from body of index
//    <a href="#" class="Button" id="NewPatient">New Patient</a>
