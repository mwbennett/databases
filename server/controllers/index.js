var models = require('../models');
var bluebird = require('bluebird');
var utils = require('../utils');
var sampleData = {results: [{username:'test', message: 'this is a test', roomname:'panic'}]};

module.exports = {
  messages: {
    get: function (req, res) {
      res.send(JSON.stringify(sampleData));
      // res.send();
      // var data = models.messages.get();
      // utils.sendResponse(res, data, 200);
    }, // a function which handles a get request for all messages
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};



// var utils = require('./utils');

// var objectId = 1;
// var messages = [
//   // Useful for debugging
//   // {
//   //   text: 'hello world',
//   //   username: 'fred',
//   //   objectId: objectId
//   // }
// ];

// var actions = {
//   'GET': function(request, response){
//     utils.sendResponse(response, {results: messages});
//   },
//   'POST': function(request, response){
//     utils.collectData(request, function(message){
//       message.objectId = ++objectId;
//       messages.push(message);
//       utils.sendResponse(response, {objectId: 1}, 201);
//     });
//   },
//   'OPTIONS': function(request, response){
//     utils.sendResponse(response);
//   }
// };

// exports.requestHandler = function(request, response) {
//   var action = actions[request.method];
//   if( action ){
//     action(request, response);
//   } else {
//     utils.sendResponse(response, "Not Found", 404);
//   }
// };

