var socket; 
var a1, b1, c1, color1, out_angleX1, out_angleY1, accX1, accZ1;
var a2, b2, c2, color2, out_angleX2, out_angleY2, accX2, accZ2; 
let isLock1, isLock2, isSave;

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
    // isSave = msg.isSave;
    isLock1 = msg.isLock;
  })

  socket.on('user2', function (msg) {
    a2 = msg.alpha;
    b2 = msg.beta;
    c2 = msg.gamma;
    accX2 = msg.accX;
    accZ2 = msg.accZ;
    color2 = msg.color;
    // isSave = msg.isSave;
    isLock2 = msg.isLock;
  })
}

//define function to do mapping
// from [x1,x2] to [y1,y2]
function map(input, x1, x2, y1, y2){
  var slope = 1.0 * (y2 - y1) / (x2 - x1);
  output = y1 + slope * (input - x1);

  return angle;
}

function draw() {
  clear();
  background(255);
  if (isLock1 === false) {
    if(a1 >=0 && a1<=90){
      out_angleX1 = map(a1, 90, 0, 0, 400); //initial range across alpha (0, 400)
    }
    if(a1 <= 360 && a1 >= 270){
      out_angleX1 = map(a1, 360, 270, 400, 800);

    }
    out_angleY1 = map(b1, 80, -80, 0, 500);
  }

  if (isLock2 === false) {
    if(a2 >=0 && a2<=90){
      out_angleX2 = map(a2, 90, 0, 0, 400); //initial range across alpha (0, 400)
    }
    if(a2 <= 360 && a2 >= 270){
    out_angleX2 = map(a2, 360, 270, 400, 800);

    }
    out_angleY2 = map(b2, 80, -80, 0, 500);
  }

 /* added if condition for x-axis range
  if(a >=0 && a<=90)
    ellipse(out_angleX1, 240, 30, 30);    
  else if(a>=270 && a<=360)
    ellipse(out_angleX2, 240, 30, 30);  
 ellipse(400, out_angleY, 30, 30);    // test y-axis range */

  ellipse(out_angleX1, out_angleY1, 30, 30);
  rect(out_angleX2, out_angleY2, 30, 30);
  // ellipse(0,0,30,30);


  if (accX1 < -5) { //reduce accel threshold!
    switch (color1) {
      case 'red':
        if(a1<=90)
          gif1 = createImg('./gif/RC.gif');
        else if(a1 >=200)
          gif1 = createImg('./gif/RL.gif'); 
        else
          gif1 = createImg('./gif/RR.gif');
        break;
      case 'yellow':
        if (a1 <= 90)
          gif1 = createImg('./gif/YC.gif');
        else if (a1 >= 200)
          gif1 = createImg('./gif/YL.gif');
        else
          gif1 = createImg('./gif/YR.gif');
        break;
      
      case 'blue':
        if (a1 <= 90)
          gif1 = createImg('./gif/BC.gif');
        else if (a1 >= 200)
          gif1 = createImg('./gif/BL.gif');
        else
          gif1 = createImg('./gif/BR.gif');
        break;
    }
    gif1.position(out_angleX1 - 180, out_angleY1);
  }

  if (accX2 < -5) { //reduce accel threshold!
    switch (color2) {
      case 'red':
        if (a2 <= 90)
          gif2 = createImg('./gif/RC.gif');
        else if (a2 >= 200)
          gif2 = createImg('./gif/RL.gif');
        else
          gif2 = createImg('./gif/RR.gif');
        break;
      
      case 'yellow':
        if (a2 <= 90)
          gif2 = createImg('./gif/YC.gif');
        else if (a2 >= 200)
          gif2 = createImg('./gif/YL.gif');
        else
          gif2 = createImg('./gif/YR.gif');
        break;
      
      case 'blue':
        if (a2 <= 90)
          gif2 = createImg('./gif/BC.gif');
        else if (a2 >= 200)
          gif2 = createImg('./gif/BL.gif');
        else
          gif2 = createImg('./gif/BR.gif');
        break;
    }
    gif2.position(out_angleX2 - 180, out_angleY2);
  }

  if (isSave === true) {
    saveCanvas('myCanva', 'jpg');
    isSave = false;
  }

}

