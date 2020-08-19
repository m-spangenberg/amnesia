$(function () {
      const socket = io();
      $('form').submit(function(e) {
      e.preventDefault();
      socket.emit('chat message', $('#chatBar').val());
      $('#chatBar').val('');
      return false;
   });
      socket.on('chat message', function(msg){
         const now = new Date();
         const thismoment = now.toLocaleTimeString();
         $("#chatroom").append("<div class=\"flex mx-4 mb-1\"><div><p class=\"text-sm mt-1 text-gray-600\">" + msg + "</p><p class=\"text-left text-xs text-gray-400 mt-1\">" + thismoment + "</p></div></div>");
   });
      socket.on('userCount', function(data){
         $('#userCounter').text(data);
   });
});