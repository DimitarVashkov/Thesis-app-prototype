
Reveal.configure({
			  keyboard: {
			    27: function() {
			    	var data = 'BackToMain';
				    $.ajax({
							type: 'POST',
							data: JSON.stringify(data),
					        contentType: 'application/json',
	                        url: 'http://localhost:3000/',					
	                        success: function(data) {
	                            console.log('success');
	                            console.log(JSON.stringify(data));
	                        }
	                    });
			    }, // do something custom when ESC is pressed
			  }
			});