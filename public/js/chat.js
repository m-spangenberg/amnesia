$(function () {
      const socket = io();
      $('form').submit(function(e) {
      e.preventDefault();
      socket.emit('chat message', $('#chatBar').val());
      $('#chatBar').val('');
      return false;
   });
      socket.on('chat message', function(msg){
         $('#messages').append($('<li>').text(msg));
   });
      socket.on('userCount', function(data){
         $('#userCounter').text(data);
   });
});