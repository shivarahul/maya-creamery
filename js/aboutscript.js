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

  // Add fade-in animation to the About section content
  $(window).on('load', function() {
    $('#about h2, #about p').css('animation', 'fadeIn 2s ease-out');
  });
});
