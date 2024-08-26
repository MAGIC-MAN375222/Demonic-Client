function addCustomHUD() {
  const hudElement = document.createElement('div');
  hudElement.id = 'custom-hud';
  hudElement.style.position = 'absolute';
  hudElement.style.top = '10px';
  hudElement.style.right = '10px';
  hudElement.style.color = 'white';
  hudElement.style.fontSize = '20px';
  hudElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  hudElement.style.padding = '5px';
  hudElement.innerText = 'Custom HUD';
  document.body.appendChild(hudElement);
}

addCustomHUD();
