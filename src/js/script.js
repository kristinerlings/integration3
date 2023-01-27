const $playSound = document.querySelector('.btn__sound');

const playAudio = () => {
  const audio = new Audio('audio/245091__neilseggar__g-harmonica.wav');

  audio.play();
};

const init = () => {
  const $menu = document.querySelector('.hamburger');
  const $nav = document.querySelector('.nav');

  $menu.addEventListener('click', function (e) {
    $nav.classList.toggle('show_nav');
  });

  $playSound.addEventListener('click', playAudio);
};

init();
