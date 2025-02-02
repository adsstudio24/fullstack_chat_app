const socket = io('http://localhost:5000');
const messagesList = document.getElementById('messages');

socket.on('message', (data) => {
    const li = document.createElement('li');
    li.textContent = data;
    messagesList.appendChild(li);
});

function sendMessage() {
    const messageInput = document.getElementById('message');
    socket.emit('message', messageInput.value);
    messageInput.value = '';
}
