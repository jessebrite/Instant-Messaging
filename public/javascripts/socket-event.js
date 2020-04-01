const form = document.querySelector('form');
const input = document.querySelector('#message');
const messages = document.querySelector('#messages');
const username = prompt('Please enter a username: ', '');
// const username = 'Jeff';
const submit = document.querySelector('#submit');

const enter = document.addEventListener('keyup', function() {
  if (input.value.trim() !== '') {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});

form.addEventListener('submit', function(e) {
  e.preventDefault();

  enter;

  addMessage(username + ": " + input.value);
  socket.emit("chat message", { message: input.value });

  input.value = '';
  return false;
}, false);

socket.on('chat message', function(msg) {
  addMessage(msg.username + ": " + msg.message);
});

socket.on('user join', function(msg) {
  addMessage(msg + ' joined the chat')
});

socket.on('user left', function(msg) {
  addMessage(msg + ' left the chat')
});

addMessage(username  + ' joined');
socket.emit("user join", username)

function addMessage(message) {
  const li = document.createElement('li');
  li.innerHTML = message;
  messages.appendChild(li);
  window.scrollTo(0, document.body.scrollHeight);
}
