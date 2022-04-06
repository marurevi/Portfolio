const menuButton = document.getElementById('menuBtn');
const hiddenPart = document.getElementById('headline');
const menuContainer = document.querySelector('nav');
const menuItems = document.querySelectorAll('.display-menu');
const quitButton = document.getElementById('quitButton');

function menuQuit() {
  menuButton.classList.remove('hidden');
  hiddenPart.classList.toggle('hidden');
  menuItems.forEach((item) => item.classList.add('hidden'));
  quitButton.classList.add('hidden');
  menuContainer.removeAttribute('style');
}

function menuDisplay() {
  menuButton.classList.add('hidden');
  hiddenPart.classList.toggle('hidden');
  menuContainer.style.display = 'flex';
  menuContainer.style.flexDirection = 'column';
  menuContainer.style.textDecoration = 'none';
  menuContainer.style.justifyContent= 'center';
  menuContainer.style.alignContent= 'center';
  menuContainer.style.padding= '300px 0'
  menuContainer.style.backgroundImage = 'url(./images/image_geometry_menu_1-1.svg), url(./images/image_geometry_menu_2-1.svg)';
  menuContainer.style.backgroundRepeat= 'no-repeat';
  menuContainer.style.backgroundPosition = 'top left, bottom left';
  menuContainer.style.backgroundSize= '80%, 100%';
  menuItems.forEach((item) => { item.classList.remove('hidden'); item.addEventListener('click', menuQuit); });
  quitButton.classList.remove('hidden');
  quitButton.addEventListener('click', menuQuit);
}

menuButton.addEventListener('click', menuDisplay);
