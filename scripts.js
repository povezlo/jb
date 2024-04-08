$(document).ready(function () {
  $('#categoryCarousel').carousel({
    interval: 5000, // Время между сменой слайдов в миллисекундах
  });

  // Управление с клавиатуры
  $(document).on('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      $('#categoryCarousel').carousel('prev');
    } else if (e.key === 'ArrowRight') {
      $('#categoryCarousel').carousel('next');
    }
  });
});
