$(document).ready(function() {	

	$('#btnSearch').click(function(){

		var search = $("#username").val();

		$.getJSON('https://coderwall.com/' + search + '.json?callback=?', function (data) {
			$.each(data, function (key, val) {

				var username = val.username;
				var name = val.name;
				var location = val.location;
				var github = val.accounts.github;
				$('#result').append('<h1>'+name+'</h1>');
				$('#result').append('<h2>'+location+'</h2>');
				$('#result').append('<h3>'+username+'</h3>');				
				$('#result').append('<p>Github account: '+github+'</p>');

				$.each(val.badges, function (key2, val2) {
					var badge_name = val2.name;
					var badge_desp = val2.description;
					var badge_img = val2.badge;
					$('#result').append('<p>'+badge_desp+': <img src='+badge_img+'/></p>');
				});	

			});

		});	

	});	
	
});