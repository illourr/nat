// Avoid `console` errors in browsers that lack a console.
;(function() {
  "use strict";
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
(function($) {
  "use strict";
  $.fn.carousel = function (){
    var $carousel = this;
    var currentIndex = 0;


    $carousel.find(".thumbnail-wrapper").on("click", function() {
      var index = $(this).index();

      $carousel.find(".thumbnail-wrapper").removeClass("active");
      $(this).addClass("active");

      $carousel.find('.active-image').addClass("hidden");
      $carousel.find('.active-image').eq(index).removeClass("hidden");
      if(index == 3) {
        currentIndex = 0;
      } else {
        currentIndex = index + 1;
      }
    });

    var slides = [];
    $carousel.find('.active-image').each(function(key, data) {
      slides.push(data);
    });


    var intervalId = 0;

    intervalId = setInterval(function(){
      rotateImages();
    }, 4000);
    $carousel
      .on("mouseenter", function() {
        clearInterval(intervalId, 0);
      })
      .on("mouseleave", function() {
        intervalId = setInterval(function(){
          rotateImages();
        }, 4000);
      });


    var rotateImages = function() {
      $carousel.find('.active-image').addClass("hidden");
      $(slides[currentIndex]).removeClass('hidden');
      $carousel.find(".thumbnail-wrapper").removeClass("active");
      $carousel.find(".thumbnail-wrapper").eq(currentIndex).addClass("active");
      if (currentIndex == 3) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
    };
    rotateImages();
  };
}(jQuery));