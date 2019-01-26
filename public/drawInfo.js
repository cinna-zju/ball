var c1 = 'red', c2 = 'red';

window.onload = function () {
  var canvas = document.getElementById("info");
  var ctx = canvas.getContext("2d");
  var socket;
  // var c1 = 'red', c2 = 'red';
  var c1, c2;
  var mark = false;

  socket = io();

  socket.on('user1', function (msg) {
    if (msg.id !== null && mark === false) {

      var imageObj = new Image();
      imageObj.onload = function() {
        ctx.drawImage(this, 0, 0);
      };    
      imageObj.src = "tutor.gif";
      mark = true;
    }
  })

  canvas.width = 400;//horizontal resolution (?) - increase for better looking text
  canvas.height = 650;//vertical resolution (?) - increase for better looking text
  canvas.style.width = width;//actual width of canvas
  canvas.style.height = height;//actual height of canvas

  // ctx.fillStyle = "#81c7d4";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  var imageObj = new Image();
  imageObj.onload = function() {
    ctx.drawImage(this, -100, 120);
  };

  imageObj.src = "wifi.png";
  ctx.font = "20px Roboto";
  ctx.fillStyle = "#f9d92a";


  ctx.fillText("No data. Please connect your phone.", 0, 30);
}