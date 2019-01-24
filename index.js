var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/user2', function(req, res){
  res.sendFile(__dirname + '/public/user2.html');
});

app.get('/desktop', function(req, res){
  res.sendFile(__dirname + '/public/desktop.html');
});

io.on('connection', function (socket) {
  console.log("new connection: " + socket.id);
  socket.on('user1', function (msg) {
    io.emit("user1", msg);
  });

  socket.on('user2', function (msg) {
    io.emit("user2", msg);
  });

  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
