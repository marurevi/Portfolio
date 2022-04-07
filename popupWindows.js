///// CREATION OF CONSTRUCTOR CARD ///////

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
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi.`, `./images/pj${i}.png`, ['HTML/CSS',
    'Ruby on Rails', 'JavaScript'], 'www.google.com', 'www.github.com');
  projects.push(cardNumb);
  //console.log(cardNumb)
}
  
// console.table(projects)

///// CREATION OF POPUP WINDOWS /////

const btnWhite = document.querySelectorAll('.btnWhite');
const popupContainer = document.getElementById('popupContainer');

for (b of btnWhite) {
  b.addEventListener('click', (e) => {
    b.id = e.path[1].classList[0];
    popupContainer.classList.remove('hidden'); 
    fillContainer(b.id)     
    //console.log (b.id)
  });
}


function fillContainer(card) {
  for(let i of projects) {
    if(i.name == card) {

    // Create elements
      const titleProject = document.createElement('h2');
      const technologiesContainer = document.createElement('ul');
      const technologies = document.createElement('li');
      const picture = document.createElement('img');
      const description = document.createElement('p');
      const linksBtnLive = document.createElement('button');
      const linksBtnSource = document.createElement('button');

    // fill and style each one.
      titleProject.innerText = i.title;
      titleProject.className = 'titleProject';
      popupContainer.appendChild(titleProject);

      technologiesContainer.className = 'technologiesContainer';
      technologies.className = 'technologies';
      for (let t = 0; t < i.technologies.length; t += 1) {
      technologies.innerHTML = i.technologies[t];
      }

      picture.setAttribute('src', `${i.featuredImage}`);
      picture.className = 'imgPopup';
      popupContainer.appendChild(picture);

      description.className = 'textPopup';
      description.innerText = `${i.description}`;
      popupContainer.appendChild(description);

      linksBtnLive.className = 'btnWhite';
      linksBtnLive.setAttribute('type', 'button');
      linksBtnLive.innerHTML = '<a href=`${i.linkLiveVersion}`>See Live<a/>';

      linksBtnSource.className = 'btnWhite';
      linksBtnSource.innerText = 'See Live';
      linksBtnSource.setAttribute('type', 'button');
      linksBtnSource.innerHTML = '<a href=`${i.linkSource}`>See source<a/>';
    }
  }
}

/*  - fix tools betwen img and title
    - buttons at the end
    - quit button to  
*/
