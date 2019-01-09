var db = require('../db');
var http = require('http');
var url = require('url');


module.exports = {
  messages: {
    get: function (callback) {
      
      var queryStr = 'SELECT messages.*, users.userName FROM messages LEFT OUTER JOIN users ON messages.userId = users.id';
      // Step 2: use node method "query" 
      
      db.query(queryStr, function(err, results) {
        if (err) {
          throw (err);
        } else {
          callback(results);
        } 
      });
    }, // a function which produces all the messages
    post: function (newMessageText, callback) {
      var queryStr = 'INSERT INTO messages(messageText) VALUES()'; //
      //Step 2:
      db.query(queryStr, newMessageText, function(err, results) {
        if (err) {
          throw (err);
        } else {
          callback(results);
        } 
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    
    get: function (callback) { //Step 3: pass in callback
      
      //Step 1: define var that searches database for username
      var queryStr = 'select * from users';
      // Step 2: use node method "query" 
      db.query(queryStr, function(err, results) {
        if (err) {
          throw (err);
        } else {
          callback(results);
        } 
      });
    },
    post: function (newUserName, callback) { //Step 3: pass in callback
      //create a user
      //Step 1: define var called queryStr that inserts user
      var queryStr = 'INSERT INTO users(userName) VALUES()'; //
      //Step 2:
      db.query(queryStr, newUserName, function(err, results) {
        if (err) {
          throw (err);
        } else {
          callback(results);
        } 
      });
    }
  }
};



