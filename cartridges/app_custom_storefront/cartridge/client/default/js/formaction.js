'use strict';

var processInclude = require('base/util');

$(document).ready(function () {
    alert('doc ready');
    processInclude(require('./formaction/formaction'));
});