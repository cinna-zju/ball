window.onload = function(){
  var canvas = document.getElementById("info");
  var ctx = canvas.getContext("2d");

  canvas.width=400;//horizontal resolution (?) - increase for better looking text
  canvas.height=500;//vertical resolution (?) - increase for better looking text
  canvas.style.width=width;//actual width of canvas
  canvas.style.height = height;//actual height of canvas

  // ctx.fillStyle = "#81c7d4";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  var imageObj = new Image();
  imageObj.onload = function() {
    ctx.drawImage(this, -50, 120);
  };

  imageObj.src = "wifi.png";

  
  ctx.font = "20px Roboto";
  ctx.fillStyle = "#f9d92a";


  ctx.fillText("No data. Connect your phone.", 0, 30);
}