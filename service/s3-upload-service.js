'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const s3UploadService = {};

/**
 * This method uploads the tweet to S3 bucket
 * @param  {Object} id - id of the tweet
 * @param  {Object} text - text of the tweet
 * @param  {Object} cb - callback
 */

s3UploadService.uploadTweet = (id, tweet, callback) => {
      s3.putObject({
        Bucket: process.env.BUCKET,
        Key: id.toString(),
        Body: JSON.stringify(tweet),
      }).promise()
    .then(v => callback(null, v), callback);
};

module.exports = s3UploadService;
