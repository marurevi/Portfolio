const menuButton = document.getElementById('menuBtn');
const hiddenPart = document.getElementById('headline');
const hiddenProj = document.getElementById('works');
const menuContainer = document.querySelector('nav');
const menuItems = document.querySelectorAll('.display-menu');
const quitButton = document.getElementById('quitButton');

function menuQuit() {
  menuButton.classList.remove('hidden');
  hiddenPart.classList.remove('hidden');
  hiddenPart.classList.remove('hidden');
  menuItems.forEach((item) => item.classList.add('hidden'));
  quitButton.classList.add('hidden');
  menuContainer.classList.remove('menuContainer');
}

function menuDisplay() {
  menuButton.classList.add('hidden');
  hiddenPart.classList.add('hidden');
  hiddenProj.classList.add('hidden');
  menuContainer.classList.add('menuContainer');
  menuItems.forEach((item) => { item.classList.remove('hidden'); item.addEventListener('click', menuQuit); });
  quitButton.classList.remove('hidden');
  quitButton.addEventListener('click', menuQuit);
}

menuButton.addEventListener('click', menuDisplay);
