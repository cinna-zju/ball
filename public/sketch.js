var socket; 
var a1, b1, c1, a2, b2, c2;
var id1="", id2="";
function setup() {
  createCanvas(720, 480);
  socket = io();
  socket.on('get', function (msg) {
    if (id1 === "") {
      id1 = msg.id;
    } else {
      if (id1 !== msg.id) {
        id2 = msg.id;
      }
      if (id1 === msg.id) {
        a1 = msg.alpha;
        b1 = msg.beta;
        c1 = msg.gamma;
      }
    }

    if (id2 === msg.id) {
      a2 = msg.alpha;
      b2 = msg.beta;
      c2 = msg.gamma;     
    }


  })


}

function draw() {
  clear();
  //240-a
  // 360-b
  // console.log("id1" + id1);
  // console.log("id2" + id2);
  
  ellipse(360 - b1, 240 - a1 / 2, 30, 30);
  rect(360 - b2, 240 - a2/2 , 50, 50);    
  
  
}