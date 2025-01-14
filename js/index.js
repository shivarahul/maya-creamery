$(document).ready(function() {
  let currentImage = 0; // Start at the first image (index 0)
  const totalImages = $('.image-slide').length; // Get the total number of images

  // Show the first image when the page loads
  $('.image-slide').eq(currentImage).addClass('active');

  // Function to change the image by adding/removing 'active' class
  function changeImage() {
    // Hide current image
    $('.image-slide').eq(currentImage).removeClass('active');

    // Increment currentImage, loop back to 0 if at the end
    currentImage = (currentImage + 1) % totalImages;

    // Show the next image
    $('.image-slide').eq(currentImage).addClass('active');
  }

  // Automatically change the image every 5 seconds
  setInterval(changeImage, 5000);  // 5000 milliseconds = 5 seconds
});
