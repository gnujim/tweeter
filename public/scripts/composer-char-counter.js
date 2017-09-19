// CHARACTER COUNTER

$(document).ready(function() {
  $('textarea').on('keydown', function() {
    var textAmount = $(this).val().length;
    var remaining = 140 - textAmount;
    var counter = $(this).siblings('.counter');
    counter.text(remaining);
    if (remaining < 0) {
      counter.addClass('negativeCount');
    } else {
      counter.removeClass('negativeCount');
    }
  });
});
