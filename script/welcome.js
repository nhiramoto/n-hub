var $ = require('jquery');

$(document).ready(() => {
    $('#skip').click(() => {
        $('#slider').addClass('second');
    });
    $('#loginForm').submit((event) => {
        $('#message #title').text('Olá ' + $('#loginForm input[name="email"]').val() + '!');
        $('#message p').text('Login efetuado com sucesso.');
        $('#message').addClass('visible');
        setTimeout(() => {
            $('#message').removeClass('visible');
        }, 3000);
        $('#slider').addClass('second');
        event.preventDefault();
    });
});
