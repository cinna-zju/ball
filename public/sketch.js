var socket; 
var a1, b1, c1, color1, out_angleX1, out_angleY1, accX1, accZ1;
var a2, b2, c2, color2, out_angleX2, out_angleY2, accX2, accZ2; 
let isLock1, isLock2;

var gif1, gif2;

function setup() {
  var myCanvas = createCanvas(800, 500);
  myCanvas.parent('canvas');
  color = 'red';
  socket = io();
  out_angleX1 = 400;
  out_angleY = 250;
  socket.on('user1', function (msg) {
    a1 = msg.alpha;
    b1 = msg.beta;
    c1 = msg.gamma;
    accX1 = msg.accX;
    accZ1 = msg.accZ;
    color1 = msg.color;
    isLock1 = msg.isLock;
  })

  socket.on('user2', function (msg) {
    a2 = msg.alpha;
    b2 = msg.beta;
    c2 = msg.gamma;
    accX2 = msg.accX;
    accZ2 = msg.accZ;
    color2 = msg.color;
    isLock2 = msg.isLock;
  })
}

function draw() {
  clear();
  background(255);
  if (isLock1 === false) {
    if (a1 >= 0 && a1 <= 90) {
      out_angleX1 = map(a1, 90, 0, 0, 400); //initial range across alpha (0, 400)
    }
    if (a1 <= 360 && a1 >= 270) {
      out_angleX1 = map(a1, 360, 270, 400, 800);
    }
    out_angleY1 = map(b1, 80, -80, 0, 500);
  }

  if (isLock2 === false) {
    if (a2 >= 0 && a2 <= 90) {
      out_angleX2 = map(a2, 90, 0, 0, 400); //initial range across alpha (0, 400)
    }
    if (a2 <= 360 && a2 >= 270) {
      out_angleX2 = map(a2, 360, 270, 400, 800);
    }
    out_angleY2 = map(b2, 80, -80, 0, 500);
  }

  ellipse(out_angleX1, out_angleY1, 30, 30);
  rect(out_angleX2, out_angleY2, 30, 30);

  if (accX1 < -5) { //reduce accel threshold!
    gif1 = getGif(color1, a1);
    gif1.position(out_angleX1 - 180, out_angleY1);
  }
  

  if (accX2 < -5) { //reduce accel threshold!
    gif2 = getGif(color2, a2);
    gif2.position(out_angleX2 - 180, out_angleY2);
  }
}
  
function getGif(color, a) {
  switch (color) {
    case 'red':
      if (a <= 90)
        return createImg('./gif/RC.gif');
      else if (a >= 200)
        return createImg('./gif/RL.gif');
      else
        return createImg('./gif/RR.gif');
      
    case 'yellow':
      if (a <= 90)
        return createImg('./gif/YC.gif');
      else if (a >= 200)
        return createImg('./gif/YL.gif');
      else
        return createImg('./gif/YR.gif');
    
    case 'blue':
      if (a <= 90)
        return createImg('./gif/BC.gif');
      else if (a >= 200)
        return createImg('./gif/BL.gif');
      else
        return createImg('./gif/BR.gif');
  
  }
}

//define function to do mapping
// from [x1,x2] to [y1,y2]
function map(input, x1, x2, y1, y2){
  var slope = 1.0 * (y2 - y1) / (x2 - x1);
  output = y1 + slope * (input - x1);
  return angle;
}