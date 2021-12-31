'use strict';

var server = require('server');

server.get('Start', function(req, res, next) {
    // This end point will render a general User-Info form
    var URLUtils = require('dw/web/URLUtils');
    var Resource = require('dw/web/Resource');
    
    var actionUrl = URLUtils.url('FormAction-HandleUserForm'); // This will be used as form actionUrl similar to 
                                                               // continueUrl used in SGJC
    var userInfoForm = server.forms.getForm('userinfo');
    userInfoForm.clear();  // this will clear the form on every page load

    res.render('formaction/userInfoForm',{
        actionUrl: actionUrl,
        userInfoForm: userInfoForm
    });

    next();
});

server.post('HandleUserForm', function (req, res, next) {
   
    var URLUtils = require('dw/web/URLUtils');
    
    var userInfoForm = server.forms.getForm('userinfo');
    // var reqForm = req.form;  // This does not work all the time, find when to use this!
    //                          // Whenever form is pure html i.e. not xml mapped, it can be fetched using req.form
                                // fields are now dwfrm fields
                                // req.form.dwfrm_userinfo_user_firstname will fetch the xml form field
    
                                // There is no ajax, fetch all form field values from form object
    var firstname = userInfoForm.user.firstname.htmlValue;
    var lastname = userInfoForm.user.lastname.htmlValue;
    var email = userInfoForm.user.email.htmlValue;
    var mobile = userInfoForm.user.mobile.htmlValue;

    // pass values to template and render
    res.render('formaction/userInfoFormSaved', {
        fname: firstname,
        lname: lastname,
        mobile: mobile,
        email: email
    });

    next();
});

module.exports = server.exports();