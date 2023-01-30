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

const createTimeline = (trigger, start, end, scrub, pin) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
      scrub: scrub,
      pin: pin,
    },
  });
  return tl;
};

const containerIntroChina = () => {
  let tl = createTimeline('.intro__china', 'center +=400', '+=1000', 1, true);
  tl.set('.img__intrchina--left', { opacity: 0 });
  tl.set('.title__china', {
    display: 'block',
  });
  tl.to(
    '.title__china',
    {
      opacity: '50%',
    },
    '<50%'
  );
  tl.to('.img__intrchina--left', {
    opacity: 1,
  });
  tl.to(
    '.title__china',
    {
      opacity: '100%',
    },
    '<50%'
  );
  tl.from(
    '.img__intrchina--left',
    {
      rotation: -3,
      transformOrigin: 'left  50%',
      duration: 0.5,
      scale: 1.4,
    },
    '<'
  );
};

const containerChina = () => {
  let mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    let tl = createTimeline('.about__china', 'top +=100', '+=3000', 1, true);

    tl.set('.txt__wrp--sheng, .title__china, .img__sheng, .img__china--human', {
      opacity: 0,
      display: 'none',
    });
    tl.from('.about__china', {
      x: '-150%',
      duration: 2,
      easeOut: 'power2.in',
    });
    tl.from('.img__china', {
      scale: 1.5,
      duration: 2,
      easeOut: 'power2.in',
    });
    tl.to(
      '.title__china',
      {
        opacity: 1,
        display: 'block',
        duration: 1,
      },
      '<'
    );
    tl.to(
      '.first',
      {
        opacity: 1,
        display: 'block',
        duration: 1,
      },
      '<'
    );
    tl.to('.img__china--human', {
      opacity: 1,
      display: 'block',
      duration: 2,
    });
    tl.to(
      '.img__china--human, .img__china',
      {
        opacity: 0,
        display: 'none',
        duration: 2,
      },
      '+=1'
    );
    tl.set('.img__sheng', {
      x: 150,
    });
    tl.to('.img__sheng', {
      opacity: 1,
      display: 'block',
      duration: 2,
      x: -50,
    });
    tl.to('.first', {
      opacity: 0,
      display: 'none',
      duration: 1,
    });
    tl.to('.second', {
      opacity: 1,
      display: 'block',
      duration: 2,
    });
    tl.to('.second', {
      opacity: 0,
      display: 'none',
      duration: 1,
    });
    tl.to('.third', {
      opacity: 1,
      display: 'block',
      duration: 2,
    });
    tl.to('.third', {
      opacity: 0,
      display: 'none',
      duration: 2,
    });
  });
};

const containerJourney = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.journey__container',
      start: 'top +=200',
      end: '+=1000',
      scrub: 1,
      pin: true,
    },
  });

  tl.set('.txt-wrap,.img__footstep, img__footstep-last, img__footstep-l', {
    autoAlpha: 0,
  });
  tl.to('.txt__first', { autoAlpha: 1, scale: 1.1, duration: 1 });
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

const containerIntroGermany = () => {
   let mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
  let tl = createTimeline(
    '.germany__container--one',
    'top -=300',
    '+=3000',
    1,
    true
  );
  tl.set('.img__intrlight--right', { opacity: 0 });
  tl.set('.chapter__title', {
    display: 'block',
  });
  tl.to('.img__intrlight--right', {
    opacity: 1,
  });
  tl.to(
    '.chapter__germany',
    {
      opacity: '50%',
    },
    '<50%'
  );

  tl.from(
    '.img__intrlight--left',
    {
      rotation: -60,
      transformOrigin: 'left  50%',
      duration: 0.5,
      scale: 1.4,
    },
    '<'
  );

  tl.to(
    '.chapter__germany',
    {
      opacity: '100%',
    },
    '<50%'
  );
  });
};

const containerHarmonicaLayers = () => {
     let mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.frame',
        start: 'top +=200',
        end: '+=1800',
        pin: true,
        scrub: 0.4,
        toggleActions: 'play none none reverse',
      },
    });
    tl.from('.germany__two--left', { y: '100%', opacity: 0, duration: 6 });
    tl.to('.germany__two--left', { y: '-100%', opacity: 1, duration: 6 });
  });
};

const containerIntroHohner = () => {
  let tl = createTimeline('.intro__hohner', 'center +=400', '+=1000', 1, true);
  tl.set('.sl__hohner', { opacity: 0 });
  tl.from('.tl__hohner', { scale: 1.2, duration: 1 });
  tl.to('.sl__hohner', { opacity: 1 });
};
const containerHohner = () => {
  let tlOne = createTimeline('.content__hohner', 'top top', '+=300', 1, true);
  tlOne.set(
    '.hohner__two,  .hohner__two p, .hohner__three,  .hohner__three p',
    {
      opacity: 0,
      display: 'none',
    }
  );
  tlOne.set('.volume__one', { backgroundColor: '#E3C371' });
  tlOne.to('.img__envelope-l-t, .img__envelope-l-b', { y: 500 });

  const containerLetter = () => {
    let tl = createTimeline(
      '.content__hohner',
      'center +=200',
      '+=4000',
      1,
      true
    );
    tl.to('.hohner__one, .hohner__one p', { opacity: 0, display: 'none' });
    tl.to('.volume__two', { backgroundColor: '#E3C371' });
    tl.to(
      '.hohner__two, .hohner__two p',
      { opacity: 1, display: 'block' },
      '<'
    );
    tl.to('.hohner__two, .hohner__two p', { opacity: 0, display: 'none' });
    tl.to('.volume__three', { backgroundColor: '#E3C371' });
    tl.to(
      '.hohner__three, .hohner__three p',
      { opacity: 1, display: 'block' },
      '<'
    );
  };
  containerLetter();
};

const init = () => {
  gsap.registerPlugin(ScrollTrigger);
/*   ScrollTrigger.defaults({
    markers: { startColor: 'brown', endColor: 'brown' },
  }); */

  containerIntroChina();
  containerChina();
  containerJourney();
  containerIntroGermany();
  containerHarmonicaLayers();
  containerIntroHohner();
  containerHohner();

  $playSound.addEventListener('click', toggleAudio);
};

init();
