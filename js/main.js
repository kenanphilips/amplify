function heroHeight() {
  $('#hero').height($(window).height());
}

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

function respond() {
  // Put all responsive functions here
  // heroHeight();
}

$(document).ready(function() {
  respond();
});

$(window).on('load', function() {
});

$(window).resize(function() {
  respond();
});

$(window).scroll(function() {
});
