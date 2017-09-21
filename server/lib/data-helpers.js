'use strict';

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {
    // saves tweet to database
    saveTweet: function(newTweet, callback) {
      db.collection('tweets').insertOne(newTweet, err => {
        if (err) {
          return callback(err);
        }
        callback(null, true);
      });
    },

    // obtains tweets from database
    getTweets: function(callback) {
      db
        .collection('tweets')
        .find()
        .toArray((err, tweets) => {
          if (err) {
            return callback(err);
          }
          callback(null, tweets);
        });
    }
  };
};
