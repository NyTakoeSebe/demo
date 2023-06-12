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
