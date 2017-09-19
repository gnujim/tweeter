// CHARACTER COUNTER

$(document).ready(function() {
  $('textarea').on('keyup', function() {
    var textAmount = $(this).val().length;
    var remaining = 140 - textAmount;
    $(this)
      .siblings('.counter')
      .text(remaining);
  });
});
