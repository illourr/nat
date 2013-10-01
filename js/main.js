
(function() {
  "use strict";

  $(function(){
    // Legacy Browser Placeholder Fix.
  	$('[placeholder]').focus(function() {
  	  var input = $(this);
  	  if (input.val() == input.attr('placeholder')) {
  	    input.val('');
  	    input.removeClass('placeholder');
  	  }
  	}).blur(function() {
  	  var input = $(this);
  	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
  	    input.addClass('placeholder');
  	    input.val(input.attr('placeholder'));
  	  }
  	}).blur();

    // Set #main-nav .nav-items active
    $(".main-nav .nav-item").on("click", function(e) {
      e.preventDefault();
      $(".main-nav .nav-item").removeClass("active");
      $(this).addClass("active");
    });

    $(".carousel").carousel();
  })

}());	