import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

//document.querySelector('#app').innerHTML
document.getElementById('shred').addEventListener('click', () => {
  const input = document.getElementById('moyamoya').value;
  const shredContainer = document.getElementById('shred-container');

  // Clear previous content
  shredContainer.innerHTML = '';

  // Create shred animation for each character
  input.split('\n').forEach(line => {
    const shredLine = document.createElement('div');
    line.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.className = 'shred-text';
      shredLine.appendChild(span);
    })
    shredContainer.appendChild(shredLine);
  });

  // Clear input field
  document.getElementById('moyamoya').value = '';
});
