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

// scroll
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector('.header').clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.scrollY;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach((each) => {
      each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        if (menu.classList.contains('open')) {
          menu.classList.remove('open');
        }
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();
