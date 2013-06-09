var xhr = new XMLHttpRequest({
    mozSystem: true
});

$('#btnreset').click(function(){	
	$('#username').val('');
});

$("#settings-btn").click(function(){    
	$("#settings-view").removeClass('move-down');
	$("#settings-view").addClass('move-up');
});