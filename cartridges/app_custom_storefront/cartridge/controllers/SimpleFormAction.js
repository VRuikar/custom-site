'use strict';

var server = require('server');

server.get('Start', function(req, res, next) {
    var URLUtils = require('dw/web/URLUtils');
    
    // render a simple html form
    res.render('formaction/simpleform');

    next();
});

server.post('Show', function(req, res, next) {
    var simpleForm = req.form;
    // var formObject = server.forms.getForm('simpleform');
    // can no find this form as there is no xml definition

    // res.render('formaction/showform', {
    //     simpleForm: simpleForm
    // });

    res.json({
        simpleForm: simpleForm
    })

    next();
});

module.exports = server.exports();