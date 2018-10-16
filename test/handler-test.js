'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const tweetService = require('../service/tweet-service');
const s3Service = require('../service/s3-upload-service');

describe('service test', () => {
  let sandbox;
  let tweetStub;
  let uploadStub;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    tweetStub = sandbox.stub(tweetService, 'getLatestTweetByUser').resolves([{id:'1234',text:'test tweet'}]);
    uploadStub = sandbox.stub(s3Service, 'uploadTweet').resolves([]);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('# test for the tweet service', () => {
      it('get the result', async() => {
        const result = await tweetService.getLatestTweetByUser({'username': 'nodejs'});
        expect(result).to.exist;
      });

      it('throws error ', () => {
        tweetStub.returns(Promise.reject(new Error('API ERROR')));
        return tweetService
          .getLatestTweetByUser({'user': 'nodejs'})
          .then(result => {
            expect.fail();
          }).catch(err => {
            expect(err).to.exist.to.match(/API ERROR/);
            expect(tweetStub.calledOnce).to.be.true;
          });
      });
    });
});
