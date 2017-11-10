$(document).ready (function() {
  //initializes wow at load
  new WOW().init();
  //when we reach the waypoint of this classes location,
  //add a class of animated and slideInUp
  $('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated slideInUp');
  }, {
    offset: '70%'
  });
  //TURNING ON SCREEN
  $('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animated fadeIn');
  }, {
    offset: '70%'
  });
  // IPHONE BUTTON CLICK
  // with this delay of 23000 milasecs add an animation making the whole image move to the bottom by 3 px and it is all happening in 300 milliseconds
  $(".iphone-click").delay(1500).animate({bottom: "+=-3"},300);
  // the delay here below is refering to the delay after the last animation
  $(".iphone-click").delay(300).animate({top: "+=-3"},200);
});
