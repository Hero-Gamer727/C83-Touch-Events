canvas= document.getElementById("myCanvas");
 ctx= canvas.getContext("2d");

 var last_position_x,last_position_y;
  var line_color="green";
 line_width=5;
 document.getElementById("color_input").value=line_color;
 document.getElementById("width_input").value=line_width;
 
 var screen_width=screen.width;
var new_width= screen.width-70;
var new_height= screen.height-300;
if (screen_width<992){
document.getElementById("myCanvas").height=new_height;
document.getElementById("myCanvas").width=new_width;
document.body.style.overflow="hidden";0
}
 canvas.addEventListener("touchstart",my_touchstart);

 function my_touchstart(e){
 line_color= document.getElementById("color_input").value;
 line_width= document.getElementById("width_input").value;
last_position_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_y=e.touches[0].clientY-canvas.offsetTop;
 console.log("touchStart");
}


canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){
console.log("touchMove")
    current_position_x=e.touches[0].clientX-canvas.offsetLeft;
current_position_y=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=line_color;
ctx.lineWidth=line_width;
ctx.moveTo(last_position_x,last_position_y);
console.log("last cordinates of x and y")
console.log(last_position_x,last_position_y);
ctx.lineTo(current_position_x,current_position_y)
console.log("current cordinates of x and y")
console.log(current_position_x,current_position_y);
ctx.stroke();
last_position_x=current_position_x;
last_position_y=current_position_y;
}
function clear_area(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}