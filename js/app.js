$('#btnreset').click(function(){	
	$('#username').val('');
});

$("#settings-btn").click(function(){
	$("#settings-view").removeClass('move-down');
	$("#settings-view").addClass('move-up');
});

$("#close-btn").click(function() {
	$("#settings-view").removeClass('move-up');
	$("#settings-view").addClass('move-down');
});