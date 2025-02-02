const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

io.on('connection', (socket) => {
    console.log('Користувач підключився');
    socket.on('message', (data) => {
        io.emit('message', data);
    });
    socket.on('disconnect', () => console.log('Користувач відключився'));
});

server.listen(5000, () => console.log('Сервер чату запущено на порту 5000'));
