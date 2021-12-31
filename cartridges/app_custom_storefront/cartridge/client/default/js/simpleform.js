'use strict';

var processInclude = require('base/util');

$(document).ready(function () {
    alert('here');
    processInclude(require('./simpleform/simpleform'));
});