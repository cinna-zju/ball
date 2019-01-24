
var socket; 
var a1, b1, c1, a2, b2, c2, angle, slope, color, isSave, out_angleX1, out_angleY, accZ;
let isLock;
var id1 = "", id2 = "";

var gif;

function setup() {
  var myCanvas = createCanvas(800, 500);
  myCanvas.parent('canvas');
  color = 'red';
  socket = io();
  out_angleX1 = 400;
  out_angleY = 250;
  socket.on('get', function (msg) {
    //TODO: for multiuser
    // if (id1 === "") {
    //   id1 = msg.id;
    // } else {
    //   if (id1 !== msg.id) {
    //     id2 = msg.id;
    //   }
    //   if (id1 === msg.id) {
    //     a1 = msg.alpha;
    //     b1 = msg.beta;
    //     c1 = msg.gamma;
    //   }
    // }

    // if (id2 === msg.id) {
    //   a2 = msg.alpha;
    //   b2 = msg.beta;
    //   c2 = msg.gamma;     
    // }

    a = msg.alpha;
    b = msg.beta;
    c = msg.gamma;
    accX = msg.accX;
    accZ = msg.accZ;
    color = msg.color;
    isSave = msg.isSave;
    isLock = msg.isLock;

  })
}

//define function to do mapping
// from [x1,x2] to [y1,y2]
function map(input, x1, x2, y1, y2){
  slope = 1.0 * (y2 - y1) / (x2 - x1);
  output = y1 + slope * (input - x1);

  return angle;
}

function draw() {
  clear();
  background(255);
  if (isLock == false) {
    if(a >=0 && a<=90){
      out_angleX1 = map(a, 90, 0, 0, 400); //initial range across alpha (0, 400)
    }
    if(a <= 360 && a >= 270){
    out_angleX1 = map(a, 360, 270, 400, 800);

    }
    out_angleY = map(b, 80, -80, 0, 500);
   
  }

 /* added if condition for x-axis range
  if(a >=0 && a<=90)
    ellipse(out_angleX1, 240, 30, 30);    
  else if(a>=270 && a<=360)
    ellipse(out_angleX2, 240, 30, 30);  
 ellipse(400, out_angleY, 30, 30);    // test y-axis range */

  ellipse(out_angleX1, out_angleY, 30, 30);
  // ellipse(0,0,30,30);


  if (accX < -5) { //reduce accel threshold!
    switch (color) {
      case 'red':
        
        gif = createImg('./R1.gif'); break;
      case 'yellow':
        gif = createImg('./Y1.gif'); break;

        // add case for blue
        /*
      case 'blue':
        gif = createImg('./B1.gif'); break;
        */
    }
    gif.position(out_angleX1 - 180, out_angleY);
  }

  if (isSave === true) {
    saveCanvas('myCanva', 'jpg');
    isSave = false;
  }


  
}

