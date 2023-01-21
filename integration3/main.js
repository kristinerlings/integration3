import './style.css';

/*Source: Grained bg>  https://github.com/sarathsaleem/grained
 * Grain generator:  http://sarathsaleem.github.io/grained/ */


const init = () => {
  const noiseOptions = {
    animate: true,
    patternWidth: 403,
    patternHeight: 200,
    grainOpacity: 0.6,
    grainDensity: 1,
    grainWidth: 1,
    grainHeight: 1,
  };
  /* 
  const $noise = document.querySelector('.bg__grained');  -  they do it themselves...*/
  grained('#grained', noiseOptions);
};
init();
