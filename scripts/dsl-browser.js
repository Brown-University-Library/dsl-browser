
var slides = getImageList();
var is_display_wall = false;

// Set up Pusher service

// Enable pusher logging - don't include this in production

Pusher.log = function (message) {
  if (window.console && window.console.log) window.console.log(message);
};

var pusher = new Pusher('ccd0e24bbd911bcef19d');
var channel = pusher.subscribe('DSL-1');

channel.bind('my_event', function (data) {
  openImage(slides[data - 1].url);
});

// Function to open image

function openImage(imageUrl) {
  document.body.style.backgroundImage = "url('" + imageUrl + "')";
}

// onload function

$(function() {

  // Check if we're displaying on the wall
  
  is_display_wall = ($(window).width() > 5000);
  
  // If so, show the navigation
  
  if (is_display_wall) { $('body').addClass('show-nav') }
});