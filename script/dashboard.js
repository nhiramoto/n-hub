const globals = require('./globals');
const $ = require('jquery');

$(document).ready(() => {
    $('body').fadeIn('slow');

    $('#nav ul li').click((event) => {
        $('#nav ul li.active').removeClass('active');
        $(event.target).closest('li').addClass('active');
    });

    $('#showSidebar').click((event) => {
        $('#sidebar').toggleClass('hidden');
        $('#showSidebar').toggleClass('hidden');
    });

    $('#settingsBtn').click((event) => {
        if (!$('#settingsContent').hasClass('active')) {
            $('.resMenu.active').removeClass('active');
            $('#settingsMenu').addClass('active');

            $('.resContent.active').removeClass('active');
            $('#settingsContent').addClass('active');
        }
    });
    $('#emailBtn').click((event) => {
        if (!$('#emailContent').hasClass('active')) {
            $('.resMenu.active').removeClass('active');
            $('#emailMenu').addClass('active');

            $('.resContent.active').removeClass('active');
            $('#emailContent').addClass('active');
        }
    });
    $('#chatBtn').click((event) => {
        $('.resMenu.active').removeClass('active');
        $('#chatMenu').addClass('active');
    });
    $('#calendarBtn').click((event) => {
        $('.resMenu.active').removeClass('active');
        $('#calendarMenu').addClass('active');
    });
    $('#newsBtn').click((event) => {
        $('.resMenu.active').removeClass('active');
        $('#newsMenu').addClass('active');
    });

    $('#accountBtn').click((event) => {
        if (!$('#account').hasClass('active')) {
            $('.container.active').removeClass('active');
            $('.container#account').addClass('active');
        }
    });
    $('#resourcesBtn').click((event) => {
        if (!$('#resources').hasClass('active')) {
            $('.container.active').removeClass('active');
            $('.container#resources').addClass('active');
        }
    });
    // notificationBtn...

    $('#accountForm').submit((event) => {
        event.preventDefault();
        globals.showMessage('Configurações de conta', 'Dados da conta alterados com sucesso.');
    });
    $('#resourcesForm').submit((event) => {
        event.preventDefault();
        globals.showMessage('Configurações de recursos', 'Recursos selecionados com sucesso.');
    });
});
