canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(250,200,40,0,2*Math.PI);
ctx.stroke();