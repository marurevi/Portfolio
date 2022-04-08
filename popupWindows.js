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
  cardNumb = new Card(`card${i}`, 'Project name goes here', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi.`, `./images/pj${i}.png`, ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], 'www.google.com', 'www.github.com');
  projects.push(cardNumb);
  // console.log(cardNumb)
}

// console.table(projects)

/// // CREATION OF POPUP WINDOWS /////

const btnWhite = document.querySelectorAll('.btnWhite');
const popupContainer = document.getElementById('popupContainer');
const exitBtn = document.createElement('div');

function fillContainer(card) {
  // Create elements
  const titleProject = document.createElement('h2');
  const technologiesContainer = document.createElement('ul');
  const picture = document.createElement('img');
  const description = document.createElement('p');
  const linksBtnLive = document.createElement('button');
  const linksBtnSource = document.createElement('button');

  for (const i of projects) {
    if (i.name === card) {
    // fill and style each one.
      exitBtn.setAttribute('id', '#exitButton');
      exitBtn.innerHTML = '<button type="button"><img src="./images/Union.svg" alt=""></img></button>';
      popupContainer.appendChild(exitBtn);

      titleProject.innerText = i.title;
      titleProject.className = 'titleProject';
      popupContainer.appendChild(titleProject);

      technologiesContainer.className = 'technologiesContainer';
      popupContainer.appendChild(technologiesContainer);

      for (const t of i.technologies) {
        const technologies = document.createElement('li');
        technologies.innerHTML = t;
        technologies.className = 'technologies';
        technologiesContainer.append(technologies);
      }

      picture.setAttribute('src', `${i.featuredImage}`);
      picture.className = 'imgPopup';
      popupContainer.appendChild(picture);

      description.className = 'textPopup';
      description.innerText = `${i.description}`;
      popupContainer.appendChild(description);

      linksBtnLive.className = 'btnWhite';
      linksBtnLive.setAttribute('type', 'button');
      linksBtnLive.innerHTML = `<a class="txtlink" href=${i.linkLiveVersion}>See Live <span><img src="./images/btnUnion.svg" alt=""></span><a/>`;
      popupContainer.appendChild(linksBtnLive);

      linksBtnSource.className = 'btnWhite';
      linksBtnSource.innerText = 'See Live';
      linksBtnSource.setAttribute('type', 'button');
      linksBtnSource.innerHTML = `<a class="txtlink" href=${i.linkSource}>See source <span><img src="./images/btnGitHub.svg" alt=""></span><a/>`;
      popupContainer.appendChild(linksBtnSource);

      function exitPopup() {
        titleProject.remove();
        technologiesContainer.remove();
        picture.remove();
        description.remove();
        linksBtnLive.remove();
        linksBtnSource.remove();
        exitBtn.remove();
        popupContainer.classList.add('hidden');
      }

      exitBtn.addEventListener('click', exitPopup);
    }
  }
}

for (const b of btnWhite) {
  b.addEventListener('click', (e) => {
    b.id = e.path[1].classList[0];
    popupContainer.classList.remove('hidden');
    fillContainer(b.id);
    // console.log (b.id)
  });
}