const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const namegen = require('./namegenerator');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));


io.sockets.on('connection', function (socket) {

  const userCount = io.sockets.server.engine.clientsCount;
  io.emit('userCount', userCount);

  const thisUser = {
    userID : '',
    userIP : '',
    userCL : '',
    userGN : ''
  };

  const userAddress = socket.handshake;

  thisUser['userID'] = socket.id;
  thisUser['userIP'] = userAddress.address;
  thisUser['userGN'] = namegen.randomNameGenerator();
  thisUser['userCL'] = namegen.randomColourGrabber();
  
  const nickname = thisUser.userGN;
  const nicknamecolour = thisUser.userCL;

  socket.broadcast.emit('notice message', '> ' + nickname + ' has entered the chat...');

  socket.on('chat message', (msg) => {
    io.emit('chat message', {'msg': msg, 'nickname': nickname, 'nicknamecolour': nicknamecolour[0]});
  });

  socket.on('notice message', (noticemsg) => {
    io.emit('notice message', {'noticemsg': noticemsg});
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('notice message', '> ' + nickname + ' has left the chat...');
    const userCount = io.sockets.server.engine.clientsCount;
    io.emit('userCount', userCount);
  });

});

/*
// clean this up and move it to an external module
${}
<div><p class="text-sm text-gray-600">w</p><p class="inline text-left text-xs text-gray-400 mt-1">4:03:13 PM</p><p class="inline ml-2 mr-2 text-xs text-gray-400">|</p><div class="inline rounded-full py-0 px-2 bg-green-500 text-gray-200 text-xs">nickname</div><p></p></div>
*/


http.listen(3000, () => {
  console.log('Server Started: Listening on port *:3000');
});
