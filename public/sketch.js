
var socket; 
var a1, b1, c1, a2, b2, c2, angle, slope, color, isSave;
var id1 = "", id2 = "";

var gif;

function setup() {
  var myCanvas = createCanvas(800, 500);
  myCanvas.parent('canvas');
  color = 'red';
  socket = io();
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
    color = msg.color;
    isSave = msg.isSave;

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
  out_angle = map(a, -80, 80, 0, 720); //this is for y orientation
  ellipse(out_angle, 30, 30); //TEST: fix x

  //TEST: fix y
  if (accX < -8) {
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
    //gif.position(out_angle - 400, 140);
    gif.position(out_angle - 250, 250);
  }

  if (isSave === true) {
    //saveCanvas('myCanva', 'jpg');
    isSave = false;
  }


  
}