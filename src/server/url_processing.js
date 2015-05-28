var googleSearch = require('./google_search');
var keywords = require('./keywords');
var webCrawler = require('./web_crawler');
var bodyText = require('./body_text.js');
var elasticSearch = require('elasticsearch');

var client = new elasticSearch.Client({
    host: 'localhost:9200'
});

var bulkRequest;

googleSearch.request(keywords.urls[0]);

googleSearch.on('url', function(googleUrl) {
    console.log('google search done, now crawler starts');
    webCrawler.getDomainLinks(googleUrl);
});

webCrawler.on('crawlerDone', function(domainObj) {
    console.log('bodyText reciving urls to get Text');
    bodyText.getText(domainObj);
});

bodyText.on('textDone', function(domainObj) {
    console.log('loading domainObj into ElasticSearch, rankPage: ', domainObj.rankpage);
    bulkRequest = [];
    bulkRequest.push({index: {_index: 'urls', _type: 'url', _id: domainObj.rankpage}});
    bulkRequest.push(domainObj);
    client.bulk({body: bulkRequest}, function(err, resp) {
        console.log(resp.items[0].index.status, 'status code from elasticsearch');
    });
});
