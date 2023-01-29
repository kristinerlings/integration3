const $playSound = document.querySelector('.btn__sound');

const audio = new Audio('audio/245091__neilseggar__g-harmonica.wav');
let isPlaying = false;

const toggleAudio = () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    $playSound.textContent = 'Pause Harmonica';
  } else {
    audio.pause();
    isPlaying = false;
    $playSound.textContent = 'Listen to Harmonica';
  }
};



const init = () => {
  const $menu = document.querySelector('.hamburger');
  const $nav = document.querySelector('.nav');

  $menu.addEventListener('click', function (e) {
    $nav.classList.toggle('show_nav');
  });


  $playSound.addEventListener('click', toggleAudio);
};

init();
