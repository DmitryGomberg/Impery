$(document).ready(function() {
    $('.burger-menu, .header__burger').click(function(event) {
        $('.header__bottom').toggleClass('_active');
        $('body').toggleClass('lock');
        console.log('dssd');
    });
});