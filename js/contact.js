$(document).ready(function() {
  // Smooth scroll to sections when clicking links
  $('header nav a').on('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });

  // Add animation to the "New Stores" section when it becomes visible
  $(window).on('scroll', function() {
    if ($(window).scrollTop() + $(window).height() > $('#new-stores').offset().top) {
      $('#new-stores').animate({
        opacity: 1
      }, 500);
    }
  });

  // Initialize Google Map
  window.initMap = function() {
    var location = {lat: 33.1713, lng: -96.7142}; // Coordinates for the current store
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Maya Creamery & Lounge'
    });
  };
});
