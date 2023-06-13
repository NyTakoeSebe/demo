// header burger-menu
const openMenuButton = document.querySelector('.header__burger');
const closeMenuButton = document.querySelector('.header__menu-mobile__close');
const menu = document.querySelector('.header__menu-mobile');

openMenuButton.addEventListener('click', () => {
  menu.classList.remove('hide');
  menu.classList.add('open');
});

closeMenuButton.addEventListener('click', () => {
  menu.classList.add('hide');
  setTimeout(() => {
    menu.classList.remove('hide');
    menu.classList.remove('open');
  }, 100);
});

// reviews slider
const reviewsSlider = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.reviews__slider-pagination.swiper-pagination',
    clickable: true,
    renderBullet: function () {
      return `<span class="reviews__slider-bullet swiper-pagination-bullet"></span>`;
    },
  },
  breakpoints: {
    970: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    770: {
      slidesPerView: 2.5,
    },
    620: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: '.reviews__slider-next',
    prevEl: '.reviews__slider-prev',
  },
});

// consultation
const phoneMask = IMask(document.getElementById('phone'), {
  mask: '+{7} (000) 000-00-00',
});
