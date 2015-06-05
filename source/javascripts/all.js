//= require velocity
//= require jquery
//= require javascripts

$(function() {
  $('.CollapsedBody').on('click', '.CollapsedBody-header', function() {
    $(this).parent().toggleClass('CollapsedBody--open');
  });

  var faqSection = $('#faq');
  var faqLearnMoreSection = $('#faq-learn');
  var faqSectionHeight = faqSection.height();

  faqSection.css({
    height: 0,
    visibility: 'hidden'
  });

  $('.hidden-section-trigger').on('click', function() {
    Velocity(faqLearnMoreSection, {
      opacity: 0,
      height: 0,
      complete: function() {
        Velocity(faqSection, {
          height: faqSectionHeight,
          complete: function() {
            faqSection.css({
              visibility: 'visible',
              height: 'auto'
            });
          }
        });
      }
    });
  });
});
