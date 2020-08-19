const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));


io.sockets.on('connection', function (socket) {
  const userCount = io.sockets.server.engine.clientsCount
  console.log('Connected users on server: ' + io.sockets.server.engine.clientsCount);
  io.emit('userCount', userCount);
  socket.broadcast.emit('chat message', 'Someone has entered the chat...');
  const userAddress = socket.handshake.address;
  console.log('User connected from ' + userAddress.address + ':' + userAddress.port);
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    socket.broadcast.emit('chat message', 'Someone has left the chat...');
    console.log('User disconnected: ' + userAddress.address + ':' + userAddress.port);
    const userCount = io.sockets.server.engine.clientsCount
    io.emit('userCount', userCount);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
