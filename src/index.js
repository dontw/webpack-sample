import _ from 'lodash';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  btn.textContent = 'click me and check the console';
  btn.onclick = printMe;
  // Lodash, currently included via a script, is requirsed for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
