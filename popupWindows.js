/// // CREATION OF CONSTRUCTOR CARD ///////

class Card {
  constructor(name, title, description, featuredImage, technologies, linkLiveVersion, linkSource) {
    this.name = name;
    this.title = title;
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
  cardNumb = new Card(`card${i}`, 'Project name goes here', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', `./images/pj${i}.svg`, ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], 'www.google.com', 'www.github.com');
  projects.push(cardNumb);
  //  console.log(cardNumb)
}

projects[0].title = 'Capstone 1';
projects[0].description = 'In this capstone project, I built an online website for a conference. I used the guidelines of the template created for Cindy Shin.The website con a fake conference of Comic Con. All the content was free images that I download from internet and enhace some of them with photoshop.';
projects[0].featuredImage = './images/Capstone1.png';
projects[0].technologies = ['HTML/CSS', 'JavaScript'];
projects[0].linkLiveVersion = 'https://marurevi.github.io/Capstone-1/';
projects[0].linkSource = 'https://github.com/marurevi/Capstone-1';
// console.table(projects)

/// // CREATION OF POPUP WINDOWS /////

const btnWhite = document.querySelectorAll('.btnWhite');
const popupContainer = document.getElementById('popupContainer');
const exitBtn = document.getElementById('exitBtn');

// Create elements
const containerNewElements = document.createElement('div');
const titleProject = document.createElement('h2');
const technologiesContainer = document.createElement('ul');
const picture = document.createElement('img');
const description = document.createElement('p');
const buttonContainer = document.createElement('div');
const linksBtnLive = document.createElement('button');
const linksBtnSource = document.createElement('button');

function exitPopup() {
  titleProject.remove();
  technologiesContainer.remove();
  picture.remove();
  description.remove();
  buttonContainer.remove();
  linksBtnLive.remove();
  linksBtnSource.remove();
  exitBtn.remove();
  containerNewElements.remove();
  popupContainer.classList.add('hidden');
}

function fillContainer(card) {
  projects.forEach((obj) => {
    if (obj.name === card) {
      // fill and style each one.
      containerNewElements.className = 'containerNewElements';
      popupContainer.appendChild(containerNewElements);
      exitBtn.className = 'exitButton';
      exitBtn.innerHTML = '<img src="./images/Union.svg" alt=""></img>';
      containerNewElements.appendChild(exitBtn);

      titleProject.innerText = obj.title;
      titleProject.className = 'titleProject';
      containerNewElements.appendChild(titleProject);

      technologiesContainer.className = 'technologiesContainer';
      containerNewElements.appendChild(technologiesContainer);

      obj.technologies.forEach((tool) => {
        const technologies = document.createElement('li');
        technologies.innerHTML = tool;
        technologies.className = 'technologies';
        technologiesContainer.append(technologies);
      });

      picture.setAttribute('src', `${obj.featuredImage}`);
      picture.className = 'imgPopup';
      containerNewElements.appendChild(picture);

      description.className = 'textPopup';
      description.innerText = `${obj.description}`;
      containerNewElements.appendChild(description);

      buttonContainer.className = 'buttonContainer';
      containerNewElements.appendChild(buttonContainer);

      linksBtnLive.className = 'btnWhite';
      linksBtnLive.setAttribute('type', 'button');
      linksBtnLive.innerHTML = `<a class="txtlink" href=${obj.linkLiveVersion}>See Live <span><img src="./images/btnUnion.svg" alt=""></span><a/>`;
      buttonContainer.appendChild(linksBtnLive);

      linksBtnSource.className = 'btnWhite';
      linksBtnSource.innerText = 'See Live';
      linksBtnSource.setAttribute('type', 'button');
      linksBtnSource.innerHTML = `<a class="txtlink" href=${obj.linkSource}>See source <span><img src="./images/btnGitHub.svg" alt=""></span><a/>`;
      buttonContainer.appendChild(linksBtnSource);

      exitBtn.addEventListener('click', exitPopup);
    }
  });
}

btnWhite.forEach((button) => {
  button.addEventListener('click', (event) => {
    button.setAttribute('id', `${event.path[1].classList[0]}`);
    popupContainer.classList.remove('hidden');
    fillContainer(button.id)
  });
});