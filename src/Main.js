const FeedListener = require('../workers/FeedListener');
const FeedSources = require('../config/feed-source');

class Main {

    start() {
        this.startLatestNewsFeeder();
        this.startSportNewFeeder();
    }

    startLatestNewsFeeder() {
        const feedListener = new FeedListener();
        feedListener.startFeeder(FeedSources.feedUrl.latestNewsFeed);
    }

    startSportNewFeeder() {
        const feedListener = new FeedListener();
        feedListener.startFeeder(FeedSources.feedUrl.sportNewsFeed);
    }

};

module.exports = Main;