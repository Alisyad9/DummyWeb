console.log('Hello World');
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navba__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
