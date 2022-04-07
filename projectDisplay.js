// Creation of constructor Card
class Card {
  constructor(name, description, featuredImage, technologies, linkLiveVersion, linkSource) {
    this.name = name;
    this.description = description;
    this.featuredImage = featuredImage;
    this.technologies = technologies;
    this.linkLiveVersion = linkLiveVersion;
    this.linkSource = linkSource;
  }
}

// Creation of array of projects:
const projects = [];
for (let i = 1; i < 7; i += 1) {
  let cardNumb = `card${i}`;
  cardNumb = new Card(`project${i}`, 'paste descriptive text here...', `./images/pj${i}.png`, ['HTML/CSS',
    'Ruby on Rails', 'JavaScript'], 'www.google.com', 'www.github.com');
  projects.push(cardNumb);
  // console.log(cardNumb)
}

projects.forEach((card) => {
  card.description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi`;
  card.name = 'Project name goes here';
});

// console.table(projects)

// Consts and new elements
const btnWhite = document.querySelectorAll('.btnWhite');
const popupContainer = document.getElementById('popupContainer');
const closeButton = document.createElement('button');
closeButton.setAttribute('type', 'button');
closeButton.innerHTML = '<img src= "./images/Union.svg" alt= "close button"/>';
closeButton.style.backgroundColor = 'white';
closeButton.className = 'hidden';
/// //DISPLAY POPUP WINDOWS/////

// Asign and id to each button
let i = 0;
for (let b of btnWhite) {
  b.setAttribute('id', i);
  i += 1;
}
// console.log(btnWhite)

// For each button I create an event listener

const button0 = document.getElementById('0');
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');

function popupWindow(num) {
  // console.log(popupContainer)
  popupContainer.classList.remove('hidden');
  fillContainer(num);
  // popupContainer.classList.add('hidden');
  closeButton.classList.toggle('hidden');
  closeButton.addEventListener('click', btnExit);
  document.getElementById(num).removeEventListener('click', popupWindow(num));
}

function fillContainer(n) {
  // Create elements
  const titleProject = document.createElement('h2');
  const technologiesContainer = document.createElement('ul');
  const technologies = document.createElement('li');
  const picture = document.createElement('img');
  const description = document.createElement('p');
  const linksBtn = document.createElement('button');

  // fill and style each one.
  titleProject.innerText = projects[n].name;
  titleProject.className = 'titleProject';
  popupContainer.appendChild(titleProject);

  technologiesContainer.className = 'technologiesContainer';
  technologies.className = 'technologies';
  for (let t = 0; t < projects[n].technologies.length; t += 1) {
    technologies.innerHTML = projects[n].technologies[t];
    technologies.append(t);
  }
  technologiesContainer.appendChild(technologies);
  popupContainer.appendChild(technologiesContainer);

  picture.setAttribute('src', `${projects[n].featuredImage}`);
  picture.className = 'imgPopup';
  popupContainer.appendChild(picture);

  description.className = 'textPopup';
  description.innerText = `${projects[n].description}`;
  popupContainer.appendChild(description);

  // REMEMBER PUT THE BUTTONS!!!
}

button0.addEventListener('click', popupWindow(0));
button1.addEventListener('click', popupWindow(1));
button2.addEventListener('click', popupWindow(2));
button3.addEventListener('click', popupWindow(3));
button4.addEventListener('click', popupWindow(4));
button5.addEventListener('click', popupWindow(5));

function btnExit() {
  closeButton.classList.toggle('hidden');
  button0.removeEventListener('click', popupWindow(0));
  button1.removeEventListener('click', popupWindow(1));
  button2.removeEventListener('click', popupWindow(2));
  button3.removeEventListener('click', popupWindow(3));
  button4.removeEventListener('click', popupWindow(4));
  button5.removeEventListener('click', popupWindow(5));
  popupContainer.classList.remove('popupcontainer');
}
