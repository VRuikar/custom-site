'use strict';

var server = require('server');

server.get('Start', function(req, res, next) {
    // This end point will render a general User-Info form
    var URLUtils = require('dw/web/URLUtils');
    var Resource = require('dw/web/Resource');

    var actionUrl = URLUtils.url('FormActionWithAjax-Handle');
    var userInfoForm = server.forms.getForm('userinfo');
    userInfoForm.clear();

    res.render('formaction/userInfoFormWithAjax', {
        actionUrl: actionUrl,
        userInfoForm: userInfoForm
    });

    next();
});

server.post('Handle', function(req, res, next) {
    // this will handle ajax call

    var URLUtils = require('dw/web/URLUtils');

    var userInfoForm = server.forms.getForm('userinfo');
    var redirectUrl = URLUtils.url('FormActionWithAjax-Show').toString(); // url for ajax

    if (userInfoForm.valid) {
        res.setStatusCode(200);
        res.json({
            success: true,
            redirectUrl: redirectUrl
        });
    } else {
        res.setStatusCode(500);
        res.json({
            error: true,
            fieldErrors: "Form Validation failed!"
        });

        return next();
    }

    return next();
});

server.get('Show', function(req, res, next){
    var userInfoForm = server.forms.getForm('userinfo');
    
    res.json({
        userInfoForm: userInfoForm
    });
    next();
});


module.exports = server.exports();