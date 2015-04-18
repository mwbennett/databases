var models = require('../models');
var bluebird = require('bluebird');
var utils = require('../utils');
var sampleData = {results: [{user:'test', message: 'this is a test', room:'panic'}]};

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(input){
        res.send(JSON.stringify({results: input}));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
      res.send();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req.body)
      res.send();
    }
  }
};

