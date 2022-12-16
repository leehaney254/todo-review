import './style.css';
import add, { createList, clearComplete } from './modules/crud.js';

window.addEventListener('load', createList());
// Add an event
const inputChange = document.querySelector('#input');
clearComplete();
inputChange.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (inputChange.value === '') {
      /* eslint-disable */
      alert('Kindy dont add empty tasks');
      /* eslint-enable */
    } else {
      add(inputChange.value);
      inputChange.value = '';
    }
  }
});
