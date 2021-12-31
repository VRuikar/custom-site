'use strict';

var formValidation = require('base/components/formValidation');

module.exports = {
    formaction: function() {
        // var buttonSubmit = document.getElementById("btn-submit");
        // console.log(buttonSubmit);
        
        // buttonSubmit.setAttribute('disabled', 'disabled');

        // // validate fields
        // var formObj = document.getElementById('userinfo-form');
        // var inputElements = formObj.querySelectorAll('input');
        
        // $(':input').keydown(function () {
        //     inputElements.forEach(function(input){
        //         if(!input.value) {
        //             buttonSubmit.setAttribute('disabled', 'disabled');
        //             return false;
        //         } else {
        //             buttonSubmit.setAttribute('disabled', false);
        //         }
        //     });
        // });

        $('#userinfo-form').submit(function (e) {
            e.preventDefault();
            var form = $(this);
            var redirectUrl = form.attr('action');
            // if (form.valid) {
                $.ajax({
                    type: 'POST',
                    url: redirectUrl,
                    data: form.serialize(),
                    success: function(data) {
                        alert('Success!!');
                        location.href = data.redirectUrl
                    },
                    error: function(data) {
                        alert(data.responseText);
                    }
                });
            // } else {
            //     alert('Call unsuccessful!');
            //     return false;
            // }
        });
    }
}