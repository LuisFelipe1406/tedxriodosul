var menu = $('nav#main-nav');
var defaultMarginTop = menu.css('margin-top');

$(window).resize(function() {
  defaultMarginTop = menu.css('margin-top');
});

$('> a', menu).click(function() {
  event.preventDefault();

  var href = $(this).data('to');
  var pos = $(href).offset().top;

  animateMenu(defaultMarginTop);

  $('html,body').animate({
    scrollTop: pos - 100,
  }, 500);
});

$('.open-nav').click(function() {
  event.preventDefault();

  var margin = (menu.hasClass('open')) ? defaultMarginTop : 0;

  animateMenu(margin);
});

function animateMenu(margin) {
  var menu = $('nav#main-nav');

  menu.animate({
    marginTop: margin,
  }, 300);

  menu.toggleClass('open');
}