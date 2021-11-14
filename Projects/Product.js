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

let skills = "hidden";
let projects = "hidden";
let contacts = "hidden";

function resetScreens() {
  skillsPage.style.transform = "translateX(-100%)";
  projectPage.style.transform = "translateY(100%)";
  contactPage.style.right = "-300px";
}

landingLink.addEventListener('click', () => {
  resetScreens();
})

skillsLink.addEventListener('click', () => {
  resetScreens();
  if(skills == "hidden") {
    skillsPage.style.transform = "translateX(0%)";
    skills = "open"
  } else {
    skills = "hidden"
  }
})

projectLink.addEventListener('click', () => {
  resetScreens();
  if(projects == "hidden") {
    projectPage.style.transform = "translateY(0%)";
    projects = "open"
  } else {
    projects = "hidden"
  }
})

contactLink.addEventListener('click', () => {
  resetScreens();
  if(contacts == "hidden") {
    contactPage.style.right = "0px";
    contacts = "open"
  } else {
    contacts = "hidden"
  }
})
