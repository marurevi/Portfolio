const menuButton = document.getElementById('menuBtn');
const hiddenPart = document.getElementById('headline');
const menuContainer = document.querySelector('nav');
const menuItems = document.querySelectorAll('.display-menu');
const quitButton = document.getElementById('quitButton');
const projectBtn = document.querySelectorAll('.btnWhite');

function menuQuit() {
  menuButton.classList.remove('hidden');
  hiddenPart.classList.remove('hidden');
  menuItems.forEach((item) => item.classList.add('hidden'));
  quitButton.classList.add('hidden');
  menuContainer.classList.remove('menuContainer');
}

function menuDisplay() {
  menuButton.classList.add('hidden');
  menuContainer.classList.add('menuContainer');
  menuItems.forEach((item) => { item.classList.remove('hidden'); item.addEventListener('click', menuQuit); });
  quitButton.classList.remove('hidden');
  quitButton.addEventListener('click', menuQuit);
}

menuButton.addEventListener('click', menuDisplay);
