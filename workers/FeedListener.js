
const RssFeedEmitter = require('rss-feed-emitter');

const AppSettings = require('../config/app-settings');
const Utils = require('../libs/Utils');

class FeedListener {

  constructor() {
    this.feeder = new RssFeedEmitter();
  }

  startFeeder(feedSource) {
    this.feeder.add({
      url: feedSource,
      refresh: AppSettings.EMITTER_REFRESH_TIME
    });   
    this.feeder.on('new-item', function(item) {
      console.log('--DateTime----:' + feedSource, new Date()+ ' : ');
    });
    return this.feeder;
  }

  stopFeeder(feedSource) {
    try {
      feeder.remove(feedSource);
    } catch (error) {
      throw error;
    }
  }

  async refreshFeeder(feedSource){
    try {
      await this.stopFeeder(feedSource);
      this.startFeeder(feedSource);
    } catch (error) {
      throw error;
    }
  }
};

module.exports = FeedListener;
 
