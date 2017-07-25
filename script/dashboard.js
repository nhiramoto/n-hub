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

    // ------------- Nav Buttons -------------
    $('#settingsBtn').click((event) => {
        if (!$('#settingsContent').hasClass('active')) {
            $('.resMenu.active').removeClass('active');
            $('#settingsMenu').addClass('active');

            $('#settingsMenu ul li.active').removeClass('active');
            $('#settingsMenu #accountBtn').addClass('active');

            $('.resContent.active').removeClass('active');
            $('#settingsContent').addClass('active');

            $('#settingsContent .container.active').removeClass('active');
            $('#settingsContent .container#account').addClass('active');
            $('#settingsContent .header .subtitle').text('Conta e Sincronização');
        }
    });
    $('#emailBtn').click((event) => {
        if (!$('#emailContent').hasClass('active')) {
            $('.resMenu.active').removeClass('active');
            $('#emailMenu').addClass('active');

            $('#emailMenu ul li.active').removeClass('active');
            $('#emailMenu #inboxBtn').addClass('active');

            $('.resContent.active').removeClass('active');
            $('#emailContent').addClass('active');

            $('#emailContent .container.active').removeClass('active');
            $('#emailContent .container#emailInbox').addClass('active');
            $('#emailContent .header .subtitle').text('Entrada');
        }
    });
    $('#chatBtn').click((event) => {
        if (!$('#chatContent').hasClass('active')) {
            $('.resMenu.active').removeClass('active');
            $('#chatMenu').addClass('active');

            $('#chatMenu ul li.active').removeClass('active');
            $('#allContactsBtn').addClass('active');

            $('.resContent.active').removeClass('active');
            $('#chatContent').addClass('active');

            $('#chatContent .container.active').removeClass('active');
            $('#chatContent .container#chatContacts').addClass('active');
            $('#chatContent .header .subtitle').text('Contatos');
        }
    });
    $('#calendarBtn').click((event) => {
        if (!$('#calendarContent').hasClass('active')) {
            $('.resMenu.active').removeClass('active');
            $('#calendarMenu').addClass('active');

            $('#calendarMenu ul li.active').removeClass('active');
            $('#monthViewBtn').addClass('active');

            $('.resContent.active').removeClass('active');
            $('#calendarContent').addClass('active');

            $('#calendarContent .container.active').removeClass('active');
            $('#calendarContent .container#calendarMonthView').addClass('active');
            $('#calendarContent .header .subtitle').text('Mês');
        }
    });
    $('#newsBtn').click((event) => {
        if (!$('#newsContent').hasClass('active')) {
            $('.resMenu.active').removeClass('active');
            $('#newsMenu').addClass('active');

            $('#newsMenu ul li.active').removeClass('active');
            $('#allArticlesBtn').addClass('active');

            $('.resContent.active').removeClass('active');
            $('#newsContent').addClass('active');

            $('#newsContent .container.active').removeClass('active');
            $('#newsContent .container#newsAllArticlesView').addClass('active');
            $('#newsContent .header .subtitle').text('Todos artigos');
        }
    });
    // ------------- Nav Buttons -------------

    // -------------- Menu --------------
    $('#sidebar #menu .resMenu li').click((event) => {
        $('#sidebar').toggleClass('hidden');
        $('#showSidebar').toggleClass('hidden');
    });

    // --- Settings Menu ---
    $('#settingsMenu ul li').click((event) => {
        $('#settingsMenu ul li.active').removeClass('active');
        $(event.target).closest('li').addClass('active');
    });
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
    // --- Settings Menu ---

    // --- E-mail Menu ---
    $('#emailMenu ul li').click((event) => {
        $('#emailMenu ul li.active').removeClass('active');
        $(event.target).closest('li').addClass('active');
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
        $('#emailContent .header .subtitle').text('Spam');
    });
    $('#trashBtn').click((event) => {
        $('#emailContent .header .subtitle').text('Excluídos');
    });
    // --- E-mail Menu ---
    // --- Chat Menu ---
    $('#chatMenu ul li').click((event) => {
        $('#chatMenu ul li.active').removeClass('active');
        $(event.target).closest('li').addClass('active');
    });
    $('#chatMenu #allContactsBtn').click((event) => {
        $('#chatContent .header .subtitle').text('Todos os Contatos');
    });
    $('#chatMenu #onlineContactsBtn').click((event) => {
        $('#chatContent .header .subtitle').text('Contatos On-line');
    });
    $('#chatMenu #groupsBtn').click((event) => {
        $('#chatContent .header .subtitle').text('Grupos');
    });
    // --- Chat Menu ---
    // --- Calendar Menu ---
    // ...
    // --- Calendar Menu ---
    // --- News Menu ---
    $('#newsMenu ul li').click((event) => {
        $('#newsMenu ul li.active').removeClass('active');
        $(event.target).closest('li').addClass('active');
    });
    $('#newsMenu #allArticlesBtn').click((event) => {
        $('#newsContent .header .subtitle').text('Todos artigos');
    });
    $('#newsMenu .feed').click((event) => {
        let feedName = $(event.target).closest('li').text();
        $('#newsContent .header .subtitle').text(feedName);
    });
    // --- News Menu ---
    // -------------- Menu --------------

    // --- E-mail ---
    $('#emailContent .container .resList li').click((event) => {
        $('#emailContent .container .resList li.selected').removeClass('selected');
        $(event.target).closest('li').addClass('selected');
    });
    $('#emailComposeNewBtn').click((event) => {
        $('#emailComposerForm #emailToField').val('');
        $('#emailComposer').addClass('visible');
    });
    $('#emailReplyBtn').click((event) => {
        $('#emailComposerForm #emailToField').val('Contato 1');
        $('#emailComposer').addClass('visible');
    });
    $('#emailReplyAllBtn').click((event) => {
        $('#emailComposerForm #emailToField').val('Contato 1, Contato 2, Contato 3');
        $('#emailComposer').addClass('visible');
    });
    $('#emailComposerForm').submit((event) => {
        event.preventDefault();
        let to = $('#emailComposerForm #emailToField').val();
        $('#emailComposerForm').trigger('reset');
        globals.showMessage('E-mail', 'E-mail enviado para ' + to + ' com sucesso.');
        $('#emailComposer').removeClass('visible');
    });
    $('#emailComposerForm #cancelBtn').click((event) => {
    $('#emailComposerForm').trigger('reset');
        $('#emailComposer').removeClass('visible');
    });
    // --- E-mail ---

    // --- Chat ---
    $('#chatContent .container .resList ul li').click((event) => {
        $('#chatContent .container .resList ul li.selected').removeClass('selected');
        $(event.target).closest('li').addClass('selected');
    });
    $('#chatSendBtn').click((event) => {
        let msg = $('#chatContacts .resViewer .messageInput input').val();
        if (msg.length > 0) {
            $('#chatContacts .resViewer .messageInput input').val('');
            let newChatBubble = $('<div></div>').addClass('chat-bubble-right');
            $(newChatBubble).text(msg);
            $(newChatBubble).css('right', '-100%');
            $('#chatContacts .resViewer .chatBox').append(newChatBubble);
            $(newChatBubble).animate({
                'right': '0%'
            }, 500);
        }
    });
    // --- Chat ---

    // --- Calendar ---
    $('#newTaskBtn').click((event) => {
        let taskStr = $('#newTaskInput').val();
        if (taskStr.length > 0) {
            $('#newTaskInput').val('');
            let task = $('<li><input type="checkbox">' + taskStr + '</li>')
            $('#taskList').append(task);
        }
    });
    // --- Calendar ---

    // --- News ---
    $('#newsContent .container .resList ul li').click((event) => {
        $('#newsContent .container .resList ul li.selected').removeClass('selected');
        $(event.target).closest('li').addClass('selected');
    });
    // --- News ---

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
