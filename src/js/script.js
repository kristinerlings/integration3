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
/* tlOne.set(
    '.hohner__two,  .hohner__two p, .hohner__three,  .hohner__three p',
    {
      opacity: 0,
      display: 'none',
    }
  );
  tlOne.set('.volume__one', { backgroundColor: '#E3C371'});
  tlOne.to('.img__envelope-l-t, .img__envelope-l-b',{y:500});



    tl.to('.hohner__one, .hohner__one p', { opacity: 0, display: 'none' });
    tl.to('.volume__two', { backgroundColor: '#E3C371' });
    tl.to('.hohner__two, .hohner__two p', {opacity: 1, display:'block'},'<');
    tl.to('.hohner__two, .hohner__two p', { opacity: 0, display: 'none'});
    tl.to('.volume__three', { backgroundColor: '#E3C371' });
    tl.to('.hohner__three, .hohner__three p', {opacity: 1,display: 'block'},'<');
   
 */

  let tl = createTimeline('.about__china', 'top +=100', '+=3000', 1, true);

  /*   rotation: '180deg', */

  tl.set('.txt__wrp--sheng, .title__china, .img__sheng, .img__china--human', {
    opacity: 0,
    display: 'none',
  });
  tl.from('.img__china', {
    scale: 1.5,
    duration: 1,
    easeOut: 'power2.in',
  });
 /*  tl.set('.title__china', {
    position: 'absolute',
    x: -300,
  }); */
  tl.to('.title__china', {
   opacity: 1, display:'block',
/*    position: 'absolute', */
    duration: 1,
  });
  tl.to('.first', {
    opacity: 1,
    display: 'block',
    duration: 1,
  },'<');
  tl.to('.img__china--human', {
    opacity: 1,
    display: 'block',
    duration: 0.5,
  });
  tl.to('.img__china--human, .img__china', {
    opacity: 0,
    display: 'none',
    duration: 1,
  });
  tl.to('.img__sheng', {
    opacity: 1,
    display: 'block',
    duration: 0.5,
  });
  tl.to('.first', {
   opacity: 0, display: 'none',
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
  tl.to('.txt__first', { autoAlpha: 1, scale:1.1 ,duration: 1});
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
  tl.to(
    '.chapter__germany',
    {
      opacity: '50%',
    },
    '<50%'
  ); 

  tl.from('.img__intrlight--left', {
    rotation: -60,
    transformOrigin: 'left  50%',
    duration:0.5,
    scale: 1.4,
  },"<");

  tl.to('.chapter__germany', {
      opacity: '100%',
  },"<50%");

} 


const containerShadow = () =>{
  /*   let tl = createTimeline('.about__germany', 'top top', '+=2000', 1, true);
  
  or cnt__germany ?*/
}

const containerHohner = () =>{



  let tlOne = createTimeline(
    '.content__hohner',
    'top top',
    '+=300',
    1,
    true
  );
  tlOne.set(
    '.hohner__two,  .hohner__two p, .hohner__three,  .hohner__three p',
    {
      opacity: 0,
      display: 'none',
    }
  );
  tlOne.set('.volume__one', { backgroundColor: '#E3C371'});
  tlOne.to('.img__envelope-l-t, .img__envelope-l-b',{y:500});

  const containerLetter = () =>{
    let tl = createTimeline('.content__hohner', 'center +=200', '+=4000', 1, true);
 /*    tl.set( '.hohner__one,  .hohner__one p, .hohner__two,  .hohner__two p, .hohner__three,  .hohner__three p',
    {
      display: 'block',
      autoAlpha: 0,
    }
  ); */
    tl.to('.hohner__one, .hohner__one p', { opacity: 0, display: 'none' });
    tl.to('.volume__two', { backgroundColor: '#E3C371' });
    tl.to('.hohner__two, .hohner__two p', {opacity: 1, display:'block'},'<');
    tl.to('.hohner__two, .hohner__two p', { opacity: 0, display: 'none'});
    tl.to('.volume__three', { backgroundColor: '#E3C371' });
    tl.to('.hohner__three, .hohner__three p', {opacity: 1,display: 'block'},'<');
   
    
     
    /*  tl.from('.img__envelope-l-t, .img__envelope-l-b', { y: -800 }); */

  }
  containerLetter();

}

const harmonicaSequences = () => {
  const $canvasHarmonica = document.querySelector(`.canvas__harmonica`);
    const context = $canvasHarmonica.getContext('2d');
    $canvasHarmonica.width = 540;
    $canvasHarmonica.height = 400;

    //framecount for images
    const imgFrameCount = 366;
    const imagesArrayContainer = [];

    const currentFrameImage = (index) =>
      `/assets/sequences-desktop/layer${index + 1}.jpg`;

    for (let i = 0; i < imgFrameCount; i++) {
      const img = new Image();
      img.src = currentFrameImage(i);
      imagesArrayContainer.push(img);
    }

    const harmonicaFrames = {
      frame: 0,
    };
    

    const renderImgFunction = () => {
      context.clearRect(0, 0, $canvasHarmonica.width, $canvasHarmonica.height);
      context.drawImage(
        imagesArrayContainer[harmonicaFrames.frame],
        0,
        0,
        350,
        700
      );
    };

    imagesArrayContainer[0].onload = renderImgFunction;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cnt__germany--two',
        start: 'top',
        end: '+=2000',
        scrub: 0.2,
        pin: true,
      },
      onUpdate: renderImgFunction, // callback for ScrollTrigger
    });
    
    tl.to(harmonicaFrames, {
      opacity: 1,
      frame: imgFrameCount - 1,
      snap: 'frame',
      duration: 12,
    });
};

/* const film = () =>{

 let tl = gsap.timeline({
     scrollTrigger: {
    trigger: container,
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'restart none none none',
    scrub: true,
      },
  });

  tl.to('', {
    y: -100, // Move the image up
    ease: 'power2.out',
  });
  tl.to('', {y: 100, // Move the text down
  ease: 'power2.out',
  });


} */


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
  containerIntroGermany();  //R
  containerShadow();
/*  harmonicaSequences();  */
   containerHohner();
 

  intersectionObserver();
  $playSound.addEventListener('click', toggleAudio);
};

init();
