function addBadges(user){  

    $('#result').html('');
    $('#bimg').html('');
    $('#btext').html('');

    var search = $("#username").val();

    $.ajax({
        url: 'https://coderwall.com/' + search + '.json?callback=?',
        dataType: "json",
        timeout: 9000,        
        success: function (data) {

            $.each(data, function (key, val) {

                var username = val.username;
                var name = val.name;
                var location = val.location;
                var github = val.accounts.github;
                $('#result').append('<h1>' + name + '</h1>');
                $('#result').append('<h2>' + location + '</h2>');
                $('#result').append('<p>Github account: <a href=https://github.com/' + github + ' target=_blank>' + github + '</a></p>');

                $.each(val.badges, function (key2, val2) {
                    var badge_name = val2.name;
                    var badge_desp = val2.description;
                    var badge_img = val2.badge;
                    $('#bimg').append('<li class="bassdge"><figure><img src=' + badge_img + '/><figcaption><p id=despt >' + badge_desp + '</p><b class=name>' + badge_name + '</b></figcaption></figure></li>');                       

                });

            });
        },
        error: function (data) {
            alert('Username does not found');
        }
    });

}


$(document).ready(function () {

    $('#btnSearch').click(function (e) {

        e.preventDefault();

        addBadges();        

    });

	

});