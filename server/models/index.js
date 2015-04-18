var db = require('../db');



module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT * FROM `messages`', function(err, res, fields){
        if (err){
          throw err;
        } else {
          cb(res);
        }
      });
    }, // a function which produces all the messages
    post: function (message) {
      var inputstring = singleQuotify(message.user) +', '+ singleQuotify(message.room)+', ' + singleQuotify(message.message);
      var command = 'INSERT into `messages` (user, room, message) values ('+inputstring+');';
      console.log(inputstring);
      console.log(command);
      db.query(command, function(err, res, fields){
          console.log('ERROR IN POSTING');
        if (err){
          throw err;
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
    },
    post: function (userObject) {
      var inputstring = singleQuotify(userObject.user);
      var command = 'INSERT into `users` (user) values ('+inputstring+');';
      db.query(command, function(err, res, fields){
        if (err){
          throw err;
        }
      })
    }
  }
};

var singleQuotify = function(string){
  for(var i = 0; i < string.length; i++){
    if(string[i] === "'"){
      string = string.slice(0,i) + "\\" + string.slice(i);
      i++;
    };
  }
  return "\'" + string + "\'";
};
