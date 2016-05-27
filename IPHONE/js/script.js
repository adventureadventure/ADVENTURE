$('#menu a').each(function(index, elem) {
  $(elem).click(function() {
    $('#left > div:not(:hidden)').addClass('hidden');
    $('#middle > div:not(:hidden)').addClass('hidden');
    $('#right > div:not(:hidden)').addClass('hidden');

    $($('#left > div')[index]).removeClass('hidden');
    $($('#middle > div')[index]).removeClass('hidden');
    $($('#right > div')[index]).removeClass('hidden');

    $('#panels').addClass('closing');
    setTimeout(function() {
        $('#panels').removeClass('opened').removeClass('closing');
    }, 1000);
  });

  $(elem).mouseover(function() {
    $('#panels .left h1').html($($('#left > div > .title')[index]).html());
    $('#panels .right h1').html($($('#right > div > .title')[index]).html());
    $('#panels').addClass('opened');
  });
});

$('#menu').mouseleave(function() {
  $('#panels').removeClass('opened');
});
