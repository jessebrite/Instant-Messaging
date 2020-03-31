var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

socketApi.io = io;

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    console.log(`${msg.name}: ${msg.message}`);
    io.emit('chat message', msg)
  });
});

socketApi.sendNotification = function() {
  io.sockets.emit('hello', { msg: 'Hello World!' });
}

module.exports = socketApi;
