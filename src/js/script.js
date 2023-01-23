const $menu = document.querySelector('.hamburger');
const $nav = document.querySelector('.nav');

$menu.addEventListener('click', function (e) {
  $nav.classList.toggle('show_nav');
});
