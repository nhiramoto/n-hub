var $ = require('jquery');

$(document).ready(() => {
    $('body').fadeIn('slow');

    $('#nav ul li').click(() => {
        $('#nav ul li.active').removeClass('active');
        $(this).parent('li').addClass('active');
    });
});
