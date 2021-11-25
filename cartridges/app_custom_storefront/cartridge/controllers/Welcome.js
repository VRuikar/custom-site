'use strict';

/**
 * @namespace Welcome
 */

var server = require('server');

server.get('Show', function(req, res, next) {
    var welcomeText = "Welcome to first custom controller!";
    res.render('custom/welcome', {
        welcomeText: welcomeText
    });

    next();
});

module.exports = server.exports();