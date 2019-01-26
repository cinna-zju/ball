var c1 = 'red', c2 = 'red';

window.onload = function () {
  var canvas = document.getElementById("info");
  var ctx = canvas.getContext("2d");
  var socket;
  // var c1 = 'red', c2 = 'red';
  var c1, c2;

  socket = io();

  socket.on('user1', function (msg) {
    if (msg.id !== null) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); 
      
      ctx.fillText("Connected!" + msg.id, 0, 30);
      // ctx.fillStyle = 'white';
      // ctx.fill();

      // c1 = msg.color;
      // ctx.fillStyle = c1;
      // ctx.fillRect(10, 30, 50, 50);
      

      // ctx.fillStyle = c2;
      // ctx.fillRect(10, 100, 50, 50);

    }
  })

  socket.on('user2', function (msg) {
    if (msg.id !== null) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); 
      ctx.fillText("Connected!" + msg.id, 0, 100);
      // ctx.fillStyle = 'white';
      // ctx.fill();

      // ctx.fillStyle = c1;
      // ctx.fillRect(10, 30, 50, 50);
      
      
      // c2 = msg.color;
      // ctx.fillStyle = c2;
      // ctx.fillRect(10, 100, 50, 50);

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


  ctx.fillText("No data. Connect your phone.", 0, 30);
}