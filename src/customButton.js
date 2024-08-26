function createCustomButton() {
  const button = document.createElement('button');
  button.innerText = 'Custom Button';
  button.style.position = 'absolute';
  button.style.bottom = '10px';
  button.style.right = '10px';
  button.style.padding = '10px';
  button.style.backgroundColor = '#007BFF';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';

  button.addEventListener('click', () => {
    alert('Custom Button Clicked!');
  });

  document.body.appendChild(button);
}

createCustomButton();
