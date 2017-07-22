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

    // --- Nav Buttons ---
    $('#settingsBtn').click((event) => {
        if (!$('#settingsContent').hasClass('active')) {
            $('.resMenu.active').removeClass('active');
            $('#settingsMenu').addClass('active');

            $('.resContent.active').removeClass('active');
            $('#settingsContent').addClass('active');

            $('.container.active').removeClass('active');
            $('.container#account').addClass('active');
            $('#settingsContent .header .subtitle').text('Conta e Sincronização');
        }
    });
    $('#emailBtn').click((event) => {
        if (!$('#emailContent').hasClass('active')) {
            $('.resMenu.active').removeClass('active');
            $('#emailMenu').addClass('active');

            $('.resContent.active').removeClass('active');
            $('#emailContent').addClass('active');

            $('.container.active').removeClass('active');
            $('.container#emailInbox').addClass('active');
            $('#emailContent .header .subtitle').text('Entrada');
        }
    });
    $('#chatBtn').click((event) => {
        if (!$('#chatContent').hasClass('active')) {
            $('.resMenu.active').removeClass('active');
            $('#chatMenu').addClass('active');

            $('.resContent.active').removeClass('active');
            $('#chatContent').addClass('active');

            $('.container.active').removeClass('active');
            $('.container#chatContacts').addClass('active');
            $('#chatContent .header .subtitle').text('Contatos');
        }
    });
    $('#calendarBtn').click((event) => {
        $('.resMenu.active').removeClass('active');
        $('#calendarMenu').addClass('active');
    });
    $('#newsBtn').click((event) => {
        $('.resMenu.active').removeClass('active');
        $('#newsMenu').addClass('active');
    });

    $('#sidebar #menu .resMenu li').click((event) => {
        $('#sidebar').toggleClass('hidden');
        $('#showSidebar').toggleClass('hidden');
    });

    // --- Settings menu ---
    $('#accountBtn').click((event) => {
        if (!$('#account').hasClass('active')) {
            $('.container.active').removeClass('active');
            $('.container#account').addClass('active');
            $('#settingsContent .header .subtitle').text('Conta e Sincronização');
        }
    });
    $('#resourcesBtn').click((event) => {
        if (!$('#resources').hasClass('active')) {
            $('.container.active').removeClass('active');
            $('.container#resources').addClass('active');
            $('#settingsContent .header .subtitle').text('Recursos');
        }
    });
    $('#notificationsBtn').click((event) => {
        if (!$('#notifications').hasClass('active')) {
            $('.container.active').removeClass('active');
            $('.container#notifications').addClass('active');
            $('#settingsContent .header .subtitle').text('Notificações');
        }
    });
    // --- Settings menu ---

    // --- E-mail ---
    $('.resContent .resList li').click((event) => {
        $('.resContent .resList li.selected').removeClass('selected');
        $(event.target).addClass('selected');
    });
    $('#inboxBtn').click((event) => {
        $('#emailContent .header .subtitle').text('Entrada');
    });
    $('#sentBtn').click((event) => {
        $('#emailContent .header .subtitle').text('Enviados');
    });
    $('#draftsBtn').click((event) => {
        $('#emailContent .header .subtitle').text('Rascunhos');
    });
    $('#spamBtn').click((event) => {
        $('#email.content .header .subtitle').text('Spam');
    });
    $('#trashBtn').click((event) => {
        $('#email.content .header .subtitle').text('Excluídos');
    });
    // --- E-mail ---

    $('#accountForm').submit((event) => {
        event.preventDefault();
        if ($('#newPassword').val().length === 0) {
            globals.showMessage('Configurações de conta', 'Dados da conta alterados com sucesso.');
        } else {
            if ($('#currentPassword').val().length !== 0) {
                if ($('#newPassword').val() == $('#confirmNewPassword').val()) {
                    globals.showMessage('Nova senha', 'Nova senha registrada com sucesso.');
                } else {
                    globals.showMessage('Nova senha', 'As senhas não batem!');
                }
            } else {
                globals.showMessage('Senha atual', 'Insira a senha atual para alterá-la.');
            }
        }
    });
    $('#resourcesForm').submit((event) => {
        event.preventDefault();
        globals.showMessage('Configurações de recursos', 'Recursos selecionados com sucesso.');
    });
    $('#notificationsForm').submit((event) => {
        event.preventDefault();
        globals.showMessage('Notificações de recursos', 'Notificações programadas com sucesso.');
    });

    $('#emailBtn').trigger('click');
});
