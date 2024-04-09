$(document).ready(function () {
  // Пагінація --початок коду--
  const productCards = $('.product-cards .col-md-4');
  const pageLinks = $('.pagination .page-link');
  const totalPages = pageLinks.length - 2; // Виключаємо посилання "Назад" і "Вперед"
  let currentPage = 1;

  // Показуємо перші 3 картки за замовчуванням
  productCards.slice(0, 3).show();
  productCards.slice(3).hide();

  // Обробник кліка на номери сторінок
  pageLinks.slice(1, -1).on('click', function (e) {
    e.preventDefault();
    const pageIndex = $(this).parent().index() - 1; // Корректный индекс страницы
    showPage(pageIndex);
  });

  // Обробник кліка на кнопки "Назад" і "Вперед"
  $('.prev-page .page-link').on('click', function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      showPage(currentPage - 2);
    }
  });

  $('.next-page .page-link').on('click', function (e) {
    e.preventDefault();
    if (currentPage < totalPages) {
      showPage(currentPage);
    }
  });

  function showPage(pageIndex) {
    const start = pageIndex * 3;
    const end = start + 3;

    productCards.hide();
    productCards.slice(start, end).show();

    // Оновлюємо активну сторінку в пагінації
    pageLinks.parent().removeClass('active');
    pageLinks
      .eq(pageIndex + 1)
      .parent()
      .addClass('active');

    // Оновлюємо стан кнопок "Назад" і "Вперед"
    if (pageIndex === 0) {
      $('.prev-page').addClass('disabled');
    } else {
      $('.prev-page').removeClass('disabled');
    }

    if (pageIndex === totalPages - 1) {
      $('.next-page').addClass('disabled');
    } else {
      $('.next-page').removeClass('disabled');
    }

    currentPage = pageIndex + 1;
  }
  // Пагінація --кiнець коду--
});
