import { Spinner } from 'spin.js';

const spinnerRef = document.querySelector('.spinner');
const loadSpinRef = document.querySelector('.spin-backdrop');

const opts = {
  lines: 14, // The number of lines to draw
  length: 0, // The length of each line
  width: 18, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1.3, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 0.9, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-default', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#fb7d00', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

const spinner = new Spinner(opts);

export function spinerPlay() {
  spinner.spin(spinnerRef);
  loadSpinRef.classList.remove('is-hidden');
}
export function spinerStop() {
  loadSpinRef.classList.add('is-hidden');
  spinner.stop();
}
