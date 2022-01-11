'use strict';

var formValidation = require('base/components/formValidation');

// $(document).ready( function () { ----> Not required to write, code will execute w/o document ready
    alert('document ready!');
    $('.field').on('keyup', function(){
        // check if required fields have values
        // if required fields are non-empty then only enable submit button
        let empty = false;
        var inputValue = $('#nickname-input').val();
        var textAreaValue = $('#address-input').val();

        if (inputValue.length == 0 || textAreaValue.length == 0) {
        empty = true;
        }

        // also check if fields have string values
        // var regex = /^(?!\s*$).+/;
        // var validString = inputValue.match(regex) && textAreaValue.match(regex);
        
        // OR
        var regExp = new RegExp(/^(?!\s*$).+/); // Construction regExp with string is troublesome
                                                // all the slashes need to be escaped coorectly
                                                // instead of string it can be constructed like this
        var validString = regExp.test(inputValue) && regExp.test(textAreaValue);

        // check if string validates all constraints
        if (validString && !empty) {
            // get input elements and check for validity
            // Add error message below input box
            var nameinput = document.getElementById('nickname-input');
            var nameError = document.querySelector('#nickname-input + span.error');

            var addressinput = document.getElementById('address-input');
            var addressError = document.querySelector('#address-input + span.error');

            $('button').attr('disabled', 'disabled');

            if (nameinput.validity.valueMissing) {
                nameError.textContent = "Name is mandatory.";
            } else if (nameinput.validity.typeMismatch) {
                nameError.textContent = "Enter a valid name.";
            } else if (nameinput.validity.tooShort) {
                nameError.textContent = `You need to add name with minimun ${ nameinput.minlength } charachters, you entered ${ nameinput.value.length } characters.`;
            }

            if (addressinput.validity.valueMissing) {
                addressError.textContent = "Please enter address.";
            } else if (addressinput.validity.typeMismatch) {
                addressError.textContent = "Enter a valid address.";
            } else if(addressinput.validity.tooShort) {
                addressError.textContent = `You need to add address with minimum ${ addressinput.minlength } characters, you entered ${ addressinput.value.length } characters.`;
            }

            // if both error fields are empty then enable submit
            if (!nameError.textContent && !addressError.textContent) {
                $('button').attr('disabled', false);
            }

        } else if (empty) {
            $('button').attr('disabled', 'disabled');
        }

    });

// });

