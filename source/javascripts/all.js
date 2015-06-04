//= require jquery
//= require javascripts

$(function() {
  $('.CollapsedBody').on('click', '.CollapsedBody-header', function(e) {
    $(this).parent().toggleClass('CollapsedBody--open');
  });
});
