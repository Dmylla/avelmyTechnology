gsap.registerPlugin(SplitText);

let splitTitle, animationTitle;
let splitDescription, animationDescription;
let splitSubDescription, animationSubDescription;

function setupTitle() {
  splitTitle && splitTitle.revert();
  animationTitle && animationTitle.revert();
  splitTitle = SplitText.create(".hero-title", {type:"chars,words,lines"});
  animationTitle = gsap.from(splitTitle.lines, {
    y: 50,
    opacity: 0,
    duration: 1, 
    ease: "linear",
    stagger: 0.04
  });
}

function setupDescription() {
  splitDescription && splitDescription.revert();
  animationDescription && animationDescription.revert();
  splitDescription = SplitText.create(".hero-description", {type:"lines"});

  animationDescription = gsap.fromTo(splitDescription.lines,
    {
    opacity:0,
    rotationX: -20,
    transformOrigin: "50% 50% -160px",
  }, {
     opacity: 1,
      rotationX: 0,
      duration: 2,
      ease: "linear ",
      stagger: 0.25,
  });
}

function setupSubDescription() {
  splitSubDescription && splitSubDescription.revert();
  animationSubDescription && animationSubDescription.revert();
  splitSubDescription = SplitText.create(".hero-sub-description", {type:"lines"});

  animationSubDescription = gsap.fromTo(splitSubDescription.lines,
    {
    opacity:0,
    rotationX: -20,
    transformOrigin: "50% 50% -160px",
  }, {
     opacity: 1,
      rotationX: 0,
      duration: 3,
      ease: "linear",
      stagger: 0.25,
  });
}


function setupButton() {
  gsap.fromTo(".button-hero" , {
    y:50,
    opacity:0 ,
  },{
    y: 0 ,
    opacity: 1,
    duration: 3,
    ease: "linear"
  })
}

function setupAll() {
  setupTitle();
  setupDescription();
  setupSubDescription();
  setupButton();
}

document.addEventListener("DOMContentLoaded", () => {
  setupAll();
});

window.addEventListener("resize", () => {
  setupAll();
});
