jQuery(function($) {
  $(".logo_header").click(function(evt) {
    $(".frames").absolutize();
    var $frames = $(".frame");
    $frames.each(function(i, frame) {
      $(frame).absolutize();
    });
  });


  $(".frame").click(function(evt) {
    var $el = $(evt.target);
    $el.addClass("hover");
  }).mouseleave(function(evt) {
    $(".frame").removeClass("hover");
  });
  
    
  
/*
  
  $(".frame").hover(function frameMouseIn(evt) {
    var $el = $(evt.target);
    $el.addClass("hover");
  }, function frameMouseOut(evt) {
    $(".frame").removeClass("hover");
  });
  
*/


});

