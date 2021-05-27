canvas=document.getElementById("Tanushcanvas"); 
ctx=canvas.getContext("2d"); 

rover_width=100; 
rover_height=90; 
rover_X=10; 
rover_Y=10; 
background_image="mars.jpg"; 
rover_image="rover.png";
function add(){
    background_imgTag=new Image(); 
    background_imgTag.onload= uploadBackground; 
    background_imgTag.src=background_image;


    rover_imgTag=new Image(); 
    rover_imgTag.onload= uploadRover; 
    rover_imgTag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0,canvas.width,canvas.height)
}
function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_X,rover_Y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown); 
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='37'){
        left();
        console.log("left");
     }

     if(keyPressed=='38'){
        up();
        console.log("up");
     }

     if(keyPressed=='39'){
        right();
        console.log("right");
     }

     if(keyPressed=='40'){
        down();
        console.log("down");
     }
}