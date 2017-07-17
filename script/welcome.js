const globals = require('./globals');
const $ = require('jquery');
const remote = require('electron').remote;
const main = remote.require('./main');

$(document).ready(() => {
    let isRegister = false;

    // Pula o login
    $('#skip').click(() => {
        $('#slider').addClass('second');
    });

    $('#back').click(() => {
        $('#slider').removeClass('second');
    });

    // Efetua o login
    $('#loginForm').submit((event) => {
        event.preventDefault();
        if ($('#confirmPassword').length) {
            if ($('#confirmPassword').val() != $('#password').val()) {
                globals.showError('Confirmação da senha', 'As senhas não batem!');
            } else {
                globals.showMessage('Olá ' + $('#loginForm input[name="email"]').val() + '!', 'Cadastro efetuado com sucesso.');
                $('#slider').addClass('second');
            }
        } else {
            globals.showMessage('Olá ' + $('#loginForm input[name="email"]').val() + '!', 'Login efetuado com sucesso.');
            $('#slider').addClass('second');
        }
    });

    // Cria nova conta
    $('#register').click(() => {
        if (isRegister) {
            $('#slider table').removeClass('toregister');
            $('#slider .loginTitle').text('Login');
            $('#slider table #nascRow').remove();
            $('#slider table #nameRow').remove();
            $('#slider table #confirmRow').remove();
            $('#register').text('Não possui conta?');
            isRegister = false;
        } else {
            $('#slider table').addClass('toregister');
            $('#slider .loginTitle').text('Cadastro');
            $('#slider table tr:first')
                .after('<tr id="nascRow"><td>Nascimento:</td><td><input type="date" name="nasc"></td></tr>')
                .after('<tr id="nameRow"><td>Nome:</td><td><input type="text" name="nome" placeholder="Nome" required></td></tr>');
            $('#slider table tr:nth-child(5)')
                .after('<tr id="confirmRow"><td>Confirme a Senha:</td><td><input type="password" id="confirmPassword"></td></tr>');
            $('#register').text('Voltar para login.');
            isRegister = true;
        }
    });

    // Seleciona os recursos
    $('#selectionForm').submit((event) => {
        event.preventDefault();
        globals.showMessage('Seleção de Recursos', 'Recursos selecionados com sucesso.');
        // Carrega dashboard.ml após fadeOut
        setTimeout(() => {
            $('#slider').fadeOut('slow', () => {
                main.loadDashboard();
            });
        }, 2000);
    });
});
