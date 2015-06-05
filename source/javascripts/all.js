//= require velocity
//= require jquery
//= require javascripts

$(function() {
  $('.CollapsedBody').on('click', '.CollapsedBody-header', function() {
    $(this).parent().toggleClass('CollapsedBody--open');
  });

  var tabletBreakpoint = 768;

  if ($(window).width() <= tabletBreakpoint) {
    var faqSection = $('#faq');
    var faqLearnMoreSection = $('#faq-learn');
    var faqSectionHeight = faqSection.height();

    var hideSection = function() {
      console.log('complete');
      faqSection.css({
        height: 0,
        visibility: 'hidden'
      });
    };

    var showSection = function() {
      faqSection.css({
        visibility: 'visible',
        height: 'auto'
      });
    };

    hideSection();
    $('.hidden-section-trigger').on('click', function() {
      Velocity(faqLearnMoreSection, {
        opacity: 0,
        height: 0,
        complete: function() {
          Velocity(faqSection, {height: faqSectionHeight }, { complete: showSection });
        }
      });
    });
  }
});
