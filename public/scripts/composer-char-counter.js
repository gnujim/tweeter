// CHARACTER COUNTER function

$(() => {
  $('.new-tweet textarea').on('input', function() {
    const textAmount = $(this).val().length;
    const remaining = 140 - textAmount;
    const counter = $('.counter');
    counter.text(remaining);
    if (remaining < 0) {
      counter.addClass('negative-count');
    } else {
      counter.removeClass('negative-count');
    }
  });
});
