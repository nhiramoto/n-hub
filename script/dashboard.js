var $ = require('jquery');

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

    $('#emailBtn').click((event) => {
        console.log('E-mail!!!');
        $('.resMenu.active').removeClass('active');
        $('#emailMenu').addClass('active');
    });
    $('#chatBtn').click((event) => {
        console.log('Chat!!!');
        $('.resMenu.active').removeClass('active');
        $('#chatMenu').addClass('active');
    });
    $('#calendarBtn').click((event) => {
        console.log('Calendário!!!');
        $('.resMenu.active').removeClass('active');
        $('#calendarMenu').addClass('active');
    });
    $('#newsBtn').click((event) => {
        console.log('Notícias!!!');
        $('.resMenu.active').removeClass('active');
        $('#newsMenu').addClass('active');
    });
});
