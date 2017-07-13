const $ = require('jquery');
const remote = require('electron').remote;
const main = remote.require('./main.js');

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
                $('#message').addClass('error');
                $('#message #msgtitle').text('Confirmação da senha');
                $('#message #msgbody').text('As senhas não batem!');
                $('#message').addClass('visible');
                setTimeout(() => {
                    $('#message').removeClass('visible');
                    $('#message').removeClass('error');
                }, 3000);
            } else {
                $('#message #msgtitle').text('Olá ' + $('#loginForm input[name="email"]').val() + '!');
                $('#message #msgbody').text('Cadastro efetuado com sucesso.');
                $('#slider').addClass('second');
                $('#message').addClass('visible');
                setTimeout(() => {
                    $('#message').removeClass('visible');
                }, 3000);
            }
        } else {
            $('#message #msgtitle').text('Olá ' + $('#loginForm input[name="email"]').val() + '!');
            $('#message #msgbody').text('Login efetuado com sucesso.');
            $('#slider').addClass('second');
            $('#message').addClass('visible');
            setTimeout(() => {
                $('#message').removeClass('visible');
            }, 3000);
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
        // let checkedRes = new Array();
        $('#message #msgtitle').text('Seleção de Recursos');
        // $('#selectionForm :checkbox[name="resource"]').each((elem) => {
        //     if ($(elem).is(':checked')) {
        //         checkedRes.push($(elem).prop('checked'));
        //     }
        // });
        // $('#message #msgbody').text(checkedRes.join('\r\n'));
        $('#message #msgbody').text('Recursos selecionados com sucesso.');
        $('#message').addClass('visible');
        setTimeout(() => {
            $('#message').removeClass('visible');
        }, 3000);
        // Carrega dashboard.html após fadeOut
        setTimeout(() => {
            $('#slider').fadeOut('slow', () => {
                main.loadDashboard();
            });
        }, 2000);
    });
});
