


/*Variables*/



var $button = $('.button');

// scroll with button

$button.on('click', function() {
  TweenLite.to(window, 1 //set the speed
    , {
      scrollTo: {
        y: 700
      }, //set the y offset
      ease: Expo.easeInOut //set the ease
    });
});




