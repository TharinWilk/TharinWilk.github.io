// Skill Image Revial

const skillImg = document.querySelectorAll('.img-skill-container img');

skillImg.forEach(img => {
  img.style.transform = "scale(0) translateX(15rem)"
});

const imgInView = (img => {
  const elementTop = img.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
});

const displayScrolledImg =(img => {
  img.style.transform = "scale(1) translateX(0rem)";
});

const handleScrollAnimation = () => {
  skillImg.forEach(img => {
    if(imgInView(img, 100)) {
      displayScrolledImg(img)
    }
  });
}

window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

// Project Revials

const projectWindows = document.querySelectorAll('.project-link');

projectWindows.forEach(win => {
  win.style.transform = "translateY(15rem)";
  win.style.opacity = 0;
});

const windowInView = (win => {
  const elementTop = win.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
});

const displayScrolledWindow =(win => {
  win.style.transform = "translateY(0rem)";
  win.style.opacity = 1;
});

const handleScrollWindowAnimation = () => {
  projectWindows.forEach(win => {
    if(windowInView(win, 100)) {
      displayScrolledWindow(win)
    }
  });
}

window.addEventListener('scroll', () => {
  handleScrollWindowAnimation();
})


// Leftside Paragraphs Revials

const leftAbout = document.querySelectorAll('.leftside');

leftAbout.forEach(p => {
  p.style.transform = "translateX(20rem)";
  p.style.opacity = 0;
});

const leftsideInView = (p => {
  const elementTop = p.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
});

const displayScrolledLeftPara =(p => {
  p.style.transform = "translateY(0rem)";
  p.style.opacity = 1;
});

const handleScrollLeftAnimation = () => {
  leftAbout.forEach(p => {
    if(leftsideInView(p, 100)) {
      displayScrolledLeftPara(p)
    }
  });
}

window.addEventListener('scroll', () => {
  handleScrollLeftAnimation();
})

// Rightside Paragraphs Revials

const rightAbout = document.querySelectorAll('.rightside');

rightAbout.forEach(p => {
  p.style.transform = "translateX(-20rem)";
  p.style.opacity = 0;
});

const rightsideInView = (p => {
  const elementTop = p.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
});

const displayScrolledRightPara =(p => {
  p.style.transform = "translateX(0rem)";
  p.style.opacity = 1;
});

const handleScrollRightAnimation = () => {
  rightAbout.forEach(p => {
    if(rightsideInView(p, 100)) {
      displayScrolledRightPara(p)
    }
  });
}

window.addEventListener('scroll', () => {
  handleScrollRightAnimation();
})

// top-down Revials

const topDown = document.querySelectorAll('.top-down');

topDown.forEach(x => {
  x.style.transform = "translateY(-5rem)";
  x.style.opacity = 0;
});

const titleInView = (x => {
  const elementTop = x.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
});

const displayScrolledTitle =(x => {
  x.style.transform = "translateY(0rem)";
  x.style.opacity = 1;
});

const handleScrollTitleAnimation = () => {
  topDown.forEach(x => {
    if(titleInView(x, 100)) {
      displayScrolledTitle(x)
    }
  });
}

window.addEventListener('scroll', () => {
  handleScrollTitleAnimation();
})
