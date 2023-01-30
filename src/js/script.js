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

const createTimeline = (trigger, start, end, scrub, pin) => {
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
};

const containerChina = () => {
  let tl = createTimeline('.about', 'top 20%', '+=5000', 1, true);

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
    duration: 0.5,
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
    duration: 0.5,
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

const containerJourney = () => {
 /*  let tl = createTimeline(
    '.journey__container',
    'top top',
    '+=1000',
    0.1,
   true
  );  */

  let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.journey__container',
    start: "top top",
    end: '+=6000',
    pin: true,
    unpin: ()=>
      window.scrollY > '+=400',
  }
});
 



  tl.set('.txt-wrap,.img__footstep, img__footstep-last, img__footstep-l', {
    autoAlpha: 0,
  });
  tl.to('.txt__first', { autoAlpha: 1, scale:1.1, ease: 'slowMo' ,duration: 1});
  tl.to('.img__footstep:nth-child(2)', { autoAlpha: 1, duration: 1 });
  tl.to('.img__footstep:nth-child(3)', { autoAlpha: 1, duration: 1 });
  tl.to('.txt-silkroad', { autoAlpha: 1, scale: 1.1, duration: 1 });
  tl.to('.img__footstep:nth-child(5)', { autoAlpha: 1, duration: 1 });
  tl.to('.img__footstep:nth-child(6)', { autoAlpha: 1, duration: 1 });
  tl.to('.txt__last', { autoAlpha: 1, scale: 1.1, duration: 1 });
  
  tl.to('.img__footstep-l', { autoAlpha: 1, duration: 1 });
  tl.to('.img__footstep-last', { autoAlpha: 1, duration: 1 });
  tl.to('.img__light--off', { autoAlpha: 0, duration: 0 });
  tl.to('.img__light--on', { autoAlpha: 1, display: 'block', duration: 0 });
};

const containerIntroGermany = () =>{
  let tl = createTimeline(
    '.germany__container--one',
    'top -=300',
    '+=3500',
    1,
    true
  );
  tl.set('.img__intrlight--right',{opacity:0});
  tl.set('.chapter__title',{
    display: 'block',
  })
  tl.to('.img__intrlight--right', {
    opacity:1,
  });
  tl.to('.chapter__title',{
    opacity:'50%'},"<50%"); 

  tl.from('.img__intrlight--left', {
    rotation: -60,
    transformOrigin: 'left  50%',
    duration:0.5,
    scale: 1.4,
  },"<");

  tl.to('.chapter__title', {
      opacity: '100%',
  },"<50%");

} 


const containerShadow = () =>{
    let tl = createTimeline('.about__germany', 'top top', '+=2000', 1, true);

    tl.from('.img__shadow', {});
    tl.from('img__shadow--reveal', {},"<");
   
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



/*   containerChina(); */
  /* containerJourney(); */
 /*  containerIntroGermany(); */ //R
  containerShadow();

  intersectionObserver();
  $playSound.addEventListener('click', toggleAudio);
};

init();
