
// Navbar
const toggleNavbar = document.querySelector('.toggle-navbar');
const navList = document.querySelector('.nav-list');

let toggled = false

toggleNavbar.addEventListener('click', () => {
  toggleNavbar.style.transform = "scale(1.2)";
  if(toggled == false) {
    navList.style.top = '0rem';
    toggled = true;
  } else {
    navList.style.top = '-20rem';
    toggled = false;
  }
  setTimeout(() => {
    toggleNavbar.style.transform = "scale(1)";
  }, 200)
});


// Links and Screen Movement
const landingPage = document.querySelector('#landing');
const skillsPage = document.querySelector('#skills');
const projectPage = document.querySelector('#projects');
const contactPage = document.querySelector('#contact');

const landingLink = document.querySelector('#landing-link');
const skillsLink = document.querySelector('#skills-link');
const projectLink = document.querySelector('#project-link');
const contactLink = document.querySelector('#contact-link');

const body = document.querySelector('body');

skillsPage.style.transform = "translateX(-100%)";
projectPage.style.transform = "translateY(100%)";
contactPage.style.transform = "translateX(100%)";

let overflowY = "overflow-y";
let skills = "hidden";
let projects = "hidden";
let contacts = "hidden";

function resetScreens() {
  skillsPage.style.transform = "translateX(-100%)";
  projectPage.style.visibility = "visible";
  projectPage.style.transform = "translateY(100%)";
  contactPage.style.transform = "translateX(100%)";
  body.style.overflowY = "hidden";
}

landingLink.addEventListener('click', () => {
  resetScreens();
});

skillsLink.addEventListener('click', () => {
  resetScreens();
  if(skills == "hidden") {
    skillsPage.style.transform = "translateX(0%)";
    skills = "open"
    projects = "hidden"
    contacts = "hidden"
    body.style.overflowY = "auto";
    projectPage.style.visibility = "hidden";
  } else {
    skills = "hidden"
  }
});

projectLink.addEventListener('click', () => {
  resetScreens();
  if(projects == "hidden") {
    projectPage.style.transform = "translateY(0%)";
    projects = "open"
    skills = "hidden"
    contacts = "hidden"
    body.style.overflowY = "auto";
  } else {
    projects = "hidden"
  }
});

contactLink.addEventListener('click', () => {
  resetScreens();
  if(contacts == "hidden") {
    contactPage.style.transform = "translateX(0%)";
    contacts = "open"
    skills = "hidden"
    projects = "hidden"
  } else {
    contacts = "hidden"
  }
});
