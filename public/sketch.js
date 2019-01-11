var socket; 
var a1, b1, c1, a2, b2, c2, angle, slope;
var id1="", id2="";
function setup() {
  createCanvas(720, 480);
  socket = io();
  socket.on('get', function (msg) {

        a1 = msg.alpha;
        b1 = msg.beta;
        c1 = msg.gamma;

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
  //240-a
  // 360-b
  // console.log("id1" + id1);
  // console.log("id2" + id2);
  
  out_angle = map(c1, -80, 80, 0, 720);
  ellipse(out_angle, 240 , 30, 30);
  //ellipse(360-c2, 240 , 30, 30);
  // rect(360 - b2, 240, 50, 50);    
  
  
}