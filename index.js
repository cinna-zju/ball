var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/desktop', function(req, res){
  res.sendFile(__dirname + '/public/desktop.html');
});

io.on('connection', function (socket) {
  console.log("new connection: "  + socket.id)
  socket.on('listener', function (msg) {
    io.emit("get", msg);
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
