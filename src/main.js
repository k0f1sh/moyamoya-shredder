import './style.css'

let timeOutId = null;

//document.querySelector('#app').innerHTML
document.getElementById('shred').addEventListener('click', () => {
  const input = document.getElementById('moyamoya').value;
  const shredContainer = document.getElementById('shred-container');


  // Clear previous content
  shredContainer.innerHTML = '';

  const box = document.createElement('div');
  box.className = 'shred-text-box';
  shredContainer.appendChild(box);

  // Create shred animation for each character
  input.split('\n').forEach(line => {
    const shredLine = document.createElement('div');
    line.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.className = 'shred-text';
      shredLine.appendChild(span);
    })
    box.appendChild(shredLine);
  });

  // Clear input field
  document.getElementById('moyamoya').value = '';


  // Clear after animation ends
  timeOutId = setTimeout(() => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    shredContainer.innerHTML = '';
  }, 10500);
});