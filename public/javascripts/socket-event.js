$(function () {
  let socket = io();
  $('form').submit(function(e) {
    e.preventDefault();
    socket.emit('chat message', // $('#message').val()
     { name: $('#name').val(), message: $('#message').val() }
     );
    $('#name').val('');
    $('#message').val('');
    return false;
  });
  // socket.on('chat message', function(msg){
  //   $('#messages').append($('<li>').text(msg));
  //   console.log(msg)
  //   $('#tings').innerHTML = msg;
  //   const li = document.createElement("li");
  //   li.innerHTML = msg;
  //   $('#messages').appendChild(li)
  // });

  // socket.on('chat message', function(msg){
  //   $('#messages').append($('<li>').text(`${msg.name}: ${msg.message}`));
  // });
});
