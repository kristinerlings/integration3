import './src/css/style.css';
import '/src/js/script.js';
import '/src/js/grained.min.js';

/*Source: Grained bg>  https://github.com/sarathsaleem/grained
 * Grain generator:  http://sarathsaleem.github.io/grained/ */

const init = () => {
  const noiseOptions = {
    animate: true,
    patternWidth: 100.82,
    patternHeight: 100.03,
    grainOpacity: 0.1,
    grainDensity: 2,
    grainWidth: 0.2,
    grainHeight: 1.1,
  };

  const $noise =
    document.querySelector('.bg__grained'); /*  -  they do it themselves... */
/*   grained('#grained', noiseOptions); */
};
init();
