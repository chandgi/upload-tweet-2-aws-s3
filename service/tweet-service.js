'use strict';
const twit = require('twit');
const config = require('../config/config');
const client = new twit(config);

const tweetService = {};

/**
 * This method gets the latest tweet by user
 * @param  {Object} param - Request object
 * @return {Object} - returns id and the latest tweet
 */

tweetService.getLatestTweetByUser = param => {
 return client.get('users/show', param)
  .then(function (data) {
    const {id, status:{text}} = data.data;
    return {id,text};
  }).catch(function (err) {
    Promise.reject(err);
  });
}

module.exports = tweetService;
