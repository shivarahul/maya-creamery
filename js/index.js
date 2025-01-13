$(document).ready(function() {
  let currentImage = 1; // Track the current image (1 or 2)

  // Function to change the image by translating the image container
  function changeImage(direction) {
    const slideContainer = $('.image-slide-container');

    if (direction === 'right') {
      if (currentImage === 1) {
        slideContainer.css('transform', 'translateX(-100%)'); // Slide to second image
        currentImage = 2;
      } else {
        slideContainer.css('transform', 'translateX(0%)'); // Slide back to first image
        currentImage = 1;
      }
    }
  }

  // Left arrow click (optional, if you want to slide left)
  $('#left-arrow').on('click', function() {
    if (currentImage === 2) {
      $('.image-slide-container').css('transform', 'translateX(0%)');
      currentImage = 1;
    }
  });

  // Right arrow click
  $('#right-arrow').on('click', function() {
    changeImage('right');
  });

  // Optional: To scroll to the Menu section when the Explore button is clicked
  $('#explore-menu').on('click', function() {
    $('html, body').animate({
      scrollTop: $('#interaction-section').offset().top
    }, 1000);
  });
});
