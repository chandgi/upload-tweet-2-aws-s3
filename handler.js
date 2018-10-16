'use strict';
const bluebird = require('bluebird');
const tweetService = require('./service/tweet-service');
const s3UploadService = require('./service/s3-upload-service');

 
module.exports.save = (event, context) => {

  const param = {screen_name: event.username};
    return tweetService.getLatestTweetByUser(param)
    .then(tweetData => {
      return bluebird.fromCallback(cb => s3UploadService.uploadTweet(tweetData.id,tweetData.text,cb));
    })
    .catch(error => {
        return error;
    });
};
