// CHARACTER COUNTER function

$(function() {
  $('.new-tweet textarea').on('input', function() {
    var textAmount = $(this).val().length;
    var remaining = 140 - textAmount;
    var counter = $(this).siblings('.counter');
    counter.text(remaining);
    if (remaining < 0) {
      counter.addClass('negative-count');
    } else {
      counter.removeClass('negative-count');
    }
  });
});
