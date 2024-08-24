const menuBtn = document.querySelector('.menu__btn');
const menuCloseBtn = document.querySelector('.menu__close-btn');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu-shadow');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu-shadow--open');
});

menuCloseBtn.addEventListener('click', () => {
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu-shadow--open');
});
