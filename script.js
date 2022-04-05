let menuButton = document.getElementById('menuBtn');
const hiddenPart = document.getElementById('headline');
const menuContainer = document.querySelector('nav');
const menuItems = document.querySelectorAll ('.display-menu');


function menuDisplay() {
  menuButton.classList.add('hidden');
  hiddenPart.classList.toggle('hidden');
  menuContainer.style.display = 'flex';
  menuContainer.style.flexDirection = 'column';
  menuContainer.style.textDecoration = 'none';
  menuContainer.style.padding = '100px 0 250px 0';
  menuContainer.style.backgroundImage= 'url(./images/image_geometry_menu_1-1.svg), url(./images/image_geometry_menu_2-1.svg)'
  menuContainer.style.backgroundPosition = 'top, bottom'  
  menuItems.forEach(
      item => item.classList.remove('hidden'));
     
 
}

menuButton.addEventListener('click', menuDisplay)
