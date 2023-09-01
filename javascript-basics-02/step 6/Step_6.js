const images = document.querySelectorAll('.hover-image');
  images.forEach(function (image) {

    const originalSrc = image.src;

    image.addEventListener('mouseover', function () {

      image.src = 'new_image.jpg';
    });

    image.addEventListener('mouseout', function () {

      image.src = originalSrc;
    });
  });