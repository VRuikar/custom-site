'use strict';

var server = require('server');

server.get('Start', function(req, res, next) {
    // render a page that uses content coming directly from assets
    
    var contentId = "test-content-1";
    res.render('content/simpleAsset', {
        contentId: contentId
    });

    next();
});

server.get('Show', function(req, res, next) {
    // render a page with content coming from slots and underlying assets
    // similar to homepage
    
    res.render('content/slotPage');
    next();
});

module.exports = server.exports();