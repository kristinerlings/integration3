const $playSound = document.querySelector('.btn__sound');
const $navlink = document.querySelector('.nav__link');

const smallMediaQuery = window.matchMedia('(max-width: 767px)');
const largeMediaQuery = window.matchMedia('(min-width: 768px)');

const audio = new Audio('audio/245091__neilseggar__g-harmonica.wav');
let isPlaying = false;

let mm = gsap.matchMedia();

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

/*not working */
const intersectionObserver = () => {
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $navlink.style.color = 'pink';
      } else {
        $navlink.style.color = 'black';
      }
    });
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 1],
  };

  const observer = new IntersectionObserver(callback, options);

  const sectionChina = document.querySelector('.china__container');
  const sectionGermany = document.querySelector('#germany');
  const sectionHohner = document.querySelector('#hohner');

  observer.observe(sectionChina);
  observer.observe(sectionGermany);
  observer.observe(sectionHohner);
};

let currentIndex = 0;

const createTimeline = (trigger, start, end, scrub, pin) =>{
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
      scrub: scrub,
      pin: pin,
      markers: true,
      markers: {
        startColor: 'white',
        endColor: 'green',
      },
    },
  });
   return tl;
}

const containerChina = () => {
  let tl = createTimeline('.about', 'top 20%', '+5000', 1, true);

  /*   rotation: '180deg', */

  tl.set('.txt__wrp--sheng, .title__china, .img__sheng, .img__china--human', {
    autoAlpha: 0,
  });
  tl.from('.img__china', {
    scale: 1.5,
    duration: 1,
    easeOut: 'power2.in',
  });
  tl.to('.title__china', {
    autoAlpha: 1,
    duration: 1,
  });
  tl.to('.first', {
    autoAlpha: 1,
    duration: 1,
  });
  tl.to('.img__china--human', {
    autoAlpha: 1,
    duration: .5,
  });
  tl.to('.first', {
    autoAlpha: 0,
    duration: 2,
  });
  tl.to('.img__china--human, .img__china', {
    autoAlpha: 0,
    duration: 1,
  });
  tl.to('.img__sheng', {
    autoAlpha: 1,
    duration: .5,
  });
  tl.to('.second', {
    autoAlpha: 1,
    duration: 1,
  });
  tl.to('.second', {
    autoAlpha: 0,
    duration: 1,
  });
  tl.to('.third', {
    autoAlpha: 1,
    duration: 2,
  });
  tl.to('.third', {
    autoAlpha: 0,
    duration: 2,
  });
};

const containerJourcney = () => {
  let tl = createTimeline('.journey__container', 'top top', '+3000', .5, true);
  
  tl.set('.txt-wrap,.img__footstep, img__footstep-l2, img__footstep-l', {
    autoAlpha: 0,
  });
  tl.to('.txt__first', { autoAlpha: 1, duraiton: 0.2});
  tl.to('.img__footstep:nth-child(2)', { autoAlpha: 1, duraiton: 0.2 });
  tl.to('.img__footstep:nth-child(3)', { autoAlpha: 1, duraiton: 0.2 });
  tl.to('.txt-silkroad', { autoAlpha: 1, duraiton: 0.2 });
  tl.to('.img__footstep:nth-child(5)', { autoAlpha: 1, duraiton: 0.2 });
  tl.to('.img__footstep:nth-child(6)', { autoAlpha: 1, duraiton: 0.2 });
  tl.to('.img__light--off', { autoAlpha: 0, duration: 0.1 });
  tl.to('.img__light--on',{autoAlpha:1, display:'block', duration:0.1});
}

const largeScreenSize = () => {};

const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    markers: { startColor: 'brown', endColor: 'brown' },
  });

  /* 

  smallMediaQuery.addListener(function(event) {
  if (smallMediaQuery.matches) {
    smallScreenSize();
   }
});
  

  largeMediaQuery.addListener(function (event) {
    if (largeMediaQuery.matches) {
      largeScreenSize();
    }
  });
 */

  containerChina();
  containerJourney();

  intersectionObserver();
  $playSound.addEventListener('click', toggleAudio);
};

init();
