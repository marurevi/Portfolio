const menuButton = document.getElementById('menuBtn');
const hiddenPart = document.getElementById('headline');
const menuContainer = document.querySelector('nav');
const menuItems = document.querySelectorAll('.display-menu');
const quitButton = document.getElementById('quitButton');
const projectBtn = document.querySelectorAll('.btnWhite');
const hiddenPart2 = document.querySelectorAll('body *:not(.card1, .card1 *, #works)');

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
  menuContainer.style.padding = '100px 0 250px 0';
  menuContainer.style.backgroundImage = 'url(./images/image_geometry_menu_1-1.svg), url(./images/image_geometry_menu_2-1.svg)';
  menuContainer.style.backgroundPosition = 'top, bottom';
  menuItems.forEach((item) => { item.classList.remove('hidden'); item.addEventListener('click', menuQuit); });
  quitButton.addEventListener('click', menuQuit);
}

function projectDisplay() {
  hiddenPart2.forEach((item) => { item.classList.add('hidden') });
}
projectBtn[0].addEventListener('click', projectDisplay);
menuButton.addEventListener('click', menuDisplay);
