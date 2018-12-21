var socket; 
var a, b, c;
function setup() {
  createCanvas(720, 480);
  socket = io();
  socket.on('get', function (msg) {
    a = msg.alpha;
    b = msg.beta;
    c = msg.gamma;
  })


}

function draw() {
  clear();
  //240-a
  // 360-b
  ellipse(360 - b, 240 - a/2 , 30, 30);
}