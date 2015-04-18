// YOUR CODE HERE:
app = {

    // server: 'https://api.parse.com/1/classes/chatterbox',
    server: '/', servermessages: "/classes/messages",

    init: function() {
      console.log('running chatterbox');
      // Get username
      app.username = window.location.search.substr(10);

      app.onscreenMessages = {};
      app.blockedUsers = ['BRETTSPENCER', 'Chuck Norris'];

      // cache some dom references
      app.$text = $('#message');


      app.loadMsgs();
      setInterval( app.loadMsgs.bind(app), 1000);

      $('#send').on('submit', app.handleSubmit);
    },

    handleSubmit: function(e){
      e.preventDefault();

      var message = {
        user: app.username,
        message: app.$text.val(),
        room: "Default"
      };

      app.$text.val('');

      app.sendMsg(message);
    },

    renderMessage: function(message){
      var $user = $("<div>", {class: 'user'}).text(message.user);
      var $text = $("<div>", {class: 'text'}).text(message.message);
      var $message = $("<div>", {class: 'chat', 'data-id': message.room }).append($user, $text);
      return $message;
    },

    displayMessage: function(message){
      if( app.blockedUsers.indexOf(message.username) < 0 ){
        // if( !app.onscreenMessages[message.objectId] ){
          var $html = app.renderMessage(message);
          $('#chats').prepend($html);
          // app.onscreenMessages[message.objectId] = true;
        // }
      }
    },

    displayMessages: function(messages){
      $('#chats').html('');
      for( var i = 0; i < messages.length; i++ ){
        app.displayMessage(messages[i]);
      }
    },

    loadMsgs: function(){
      $.ajax({
        url: app.servermessages,
        data: {},
        contentType: 'application/json',
        success: function(json){
          json = JSON.parse(json);
          app.displayMessages(json.results);
        },
        complete: function(){
          app.stopSpinner();
        }
      });
    },

    sendMsg: function(message){
      app.startSpinner();
      $.ajax({
        type: 'POST',
        url: app.servermessages,
        data: JSON.stringify(message),
        contentType: 'application/json',
        success: function(json){
          message.objectId = json.objectId;
          app.displayMessage(message);
        },
        complete: function(){
          app.stopSpinner();
        }
      });
    },

    startSpinner: function(){
      $('.spinner img').show();
      $('form input[type=submit]').attr('disabled', "true");
    },

    stopSpinner: function(){
      $('.spinner img').fadeOut('fast');
      $('form input[type=submit]').attr('disabled', null);
    }
};
