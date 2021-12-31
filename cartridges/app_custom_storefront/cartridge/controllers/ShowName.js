'use strict';

var server = require('server');

server.get('Start', function (req, res, next) {
    var actionUrl = dw.web.URLUtils.url('ShowName-Handle');
    var shownameForm = server.forms.getForm('showname');
    shownameForm.clear();

    res.render('formaction/showname', {
        actionUrl: actionUrl,
        shownameForm: shownameForm
    })
    next();
});

server.post('Handle', function (req, res, next) {
    var shownameForm = server.forms.getForm('showname');
    var name = shownameForm.firstname.htmlValue;
    
    // var name = req.form.dwfrm_showname_firstname;  // this is becasue field name is assossiated with xml form
                                                      // and it is not pure html input field

    // res.render('formaction/nickname', {
    //     name: name,
    //     shownameForm: shownameForm
    // })     // need res.json that will send data back to ajax

    var redirectUrl = dw.web.URLUtils.url('ShowName-Show').toString();
    var errorRedirectUrl = dw.web.URLUtils.url('ShowName-Error').toString();
    
    
    if (shownameForm.valid) {
        // this.on('route:BeforeComplete', function (req, res) {
            res.setViewData({
                shownameForm: shownameForm,
                name: name
            });

            res.setStatusCode(200);
            res.json({
                success: true,
                redirectUrl: redirectUrl
            });
        // });

    } else {
        res.setStatusCode(500);
        res.json({
            success: false,
            redirectUrl: errorRedirectUrl
        });

        return next();
    }
    
    return next();
});

server.get('Show', function (req, res, next) {
    // var viewData = res.getViewData();
    // var name = req.form;       // will not get anything as form submission is not done here at this endpoint
    var shownameForm = server.forms.getForm('showname');
    var name = shownameForm.firstname.htmlValue;
    
    res.render('formaction/nickname', {
        shownameForm: shownameForm,
        name: name
    });

    next();
});

server.get('Error', function (req, res, next) {
    var errorMessage = "Form submitted was invalid!";

    res.render('formaction/formerror', {
        errorMessage: errorMessage
    });
});

module.exports = server.exports();