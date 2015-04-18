var db = require('../db');



module.exports = {
  messages: {
    get: function () {
      db.query('SELECT * FROM `messages`', function(err, res, fields){
        if (err){
          throw err;
        } else {
          console.log("GET MESSAGES RESULTS: ", res);
        }

      });
    }, // a function which produces all the messages
    post: function (message) {
      db.query('INSERT into messages (user, room, message) values (' + message.username + ', ' + message.message + ', ' message.roomname ')', function(){
        if (err){
          throw err;
        } else {
          console.log("POST MESSAGE RESULTS: ", res);
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.query()'SELECT '
    },
    post: function () {}
  }
};

