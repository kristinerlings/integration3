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

const containerChina = () =>{


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.about',
    start: 'top 20%',
    end: '+=5000',
    scrub: 1,
    pin: true,
    markers: true,
    markers: {
      startColor: 'white',
      endColor: 'green',
    },
  },
});

  tl.set('.txt__wrp--sheng', {
    autoAlpha: 0,
  });
  tl.set('.title__china', {
    autoAlpha: 0,
  });
  tl.set('.img__china', {
    opacity: 0,
  })
  tl.to('.first', {
   autoAlpha: 1,
    duration: 2,
  });
  tl.to('.first', {
    autoAlpha: 0,
    duration: 2,
  });
   tl.to('.second', {
     autoAlpha: 1,
     duration: 2,
   });
   tl.to('.second', {
     autoAlpha: 0,
     duration: 2,
   });
    tl.to('.third', {
      autoAlpha: 1,
      duration: 2,
    });
    tl.to('.third', {
      autoAlpha: 0,
      duration: 2,
    });
   

}

const largeScreenSize = () =>{

}


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


  intersectionObserver();
  $playSound.addEventListener('click', toggleAudio);
};

init();
