//= require velocity/velocity
//= require jquery
//= require blue

//= require faq
//= require collapsed_section
//= require links

$(function() {
  var el = $('.Panel-balloonWrapper');

  var documentWidth = $('body').width();

  var x = 0;

  function up(xDistance, cb) {
    x -= xDistance;

    Velocity(el, {
      translateX: x,
      translateY: -200,
    }, {
      duration: 10000,
      complete: cb
    }, 'easeOut');
  }

  function down(xDistance, cb) {
    x -= xDistance;

    Velocity(el, {
      translateX: x,
      translateY: 0
    }, {
      duration: 10000,
      complete: cb
    }, 'easeInSine');
  }

  up(documentWidth / 4, function() {
    down(documentWidth / 4, function() {
      up(documentWidth / 2);
    });
  });
});
