const socket_io = require('socket.io');
const io = socket_io();
const socketApi = {};

socketApi.io = io;

io.on('connection', function(socket) {

  socket.on('user join', function(msg) {
    this.username = msg;
    console.log(msg + ' joined')
    socket.broadcast.emit('user join', msg);
  });

  socket.on('chat message', function(msg) {
    msg.username = this.username;
    // console.log(`${msg.username}: ${msg.message}`)
    socket.broadcast.emit('chat message', msg);
  });

  socket.on('disconnect', function(msg) {
    console.log(this.username + ' left')
    socket.broadcast.emit('user left', this.username);
  });
});

module.exports = socketApi;
