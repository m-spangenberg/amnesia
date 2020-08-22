const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const namegen = require('./namegenerator');
const sessionUsers = [];

const connectionsLimit = 100

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));

app.use(function(req, res) {
 res.status(400);
res.sendFile((__dirname + '/public/404.html'));
});

app.use(function(error, req, res, next) {
  res.status(500);
res.sendFile((__dirname + '/public/500.html'));
});

io.sockets.on('connection', function (socket) {

  if (io.engine.clientsCount > connectionsLimit) {
    socket.emit('err', {message: 'room full'})
    socket.disconnect()
    
    return
  }

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
  thisUser['userGN'] = namegen.randomNameGenerator(); // check that name doesn't already exist
  thisUser['userCL'] = namegen.randomColourGrabber();
  
  const nickname = thisUser.userGN;
  const nicknamecolour = thisUser.userCL;

  // handle userlist for session
  sessionUsers.push(thisUser);
  
  socket.broadcast.emit('notice message', '> ' + nickname + ' has entered the chat...');

  socket.on('chat message', (msg) => {
    io.emit('chat message', {'msg': msg, 'nickname': nickname, 'nicknamecolour': nicknamecolour[0]});
  });

  socket.on('notice message', (noticemsg) => {
    io.emit('notice message', {'noticemsg': noticemsg});
  });

  socket.on('disconnect', () => {
    removeUserlist(thisUser);
    console.log(sessionUsers);
    socket.broadcast.emit('notice message', '> ' + nickname + ' has left the chat...');
    const userCount = io.sockets.server.engine.clientsCount;
    io.emit('userCount', userCount);
  });

});

// Removes users from the session on disconnect
function removeUserlist(thisUser) {
  for (var i =0; i < sessionUsers.length; i++)
   if (sessionUsers[i].userID === thisUser.userID) {
      sessionUsers.splice(i,1);
      break;
   }
}

/*
// clean this up and move it to an external module
${}
<div><p class="text-sm text-gray-600">w</p><p class="inline text-left text-xs text-gray-400 mt-1">4:03:13 PM</p><p class="inline ml-2 mr-2 text-xs text-gray-400">|</p><div class="inline rounded-full py-0 px-2 bg-green-500 text-gray-200 text-xs">nickname</div><p></p></div>
*/

http.listen(3000, () => {
  console.log('Server Started: Listening on port *:3000');
});
