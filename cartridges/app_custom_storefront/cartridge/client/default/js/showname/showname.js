'use strict';

var formValidation = require('base/components/formValidation');

module.exports = {
	newsletter: function () {
		$('form.showname').submit( function (e) {
			var form = $(this);
			console.log(form);
			e.preventDefault();
			var url = form.attr('action');
			form.spinner().start();
			$('form.showname').trigger('showname:submit', e);
			
			$.ajax({
				url: url,
				type: 'POST',
				datatype: 'JSON',
				data: form.serialize(),
                success: function (data) {
                	form.spinner().stop();
                    alert('Success!');
					console.log(data);
					location.href = data.redirectUrl;
                },
                error: function () {
                    alert('Something went wrong..!');
                    $form.spinner().stop();
                }
            });
			
			return false;
		});
	}
}