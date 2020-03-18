"use strict";
let centerContent = document.getElementById("center-content"),
       centerFold = document.getElementById("center-fold"),
     foldsContent = Array.from(document.getElementsByClassName("fold-content")),
     targetScroll = -(document.documentElement.scrollTop || document.body.scrollTop),
    currentScroll = targetScroll,
        scrollPos = 0,
       druzhba001 = Array.from(document.getElementsByClassName("druzhba001")),
       druzhba002 = Array.from(document.getElementsByClassName("druzhba002")),
             btn1 = document.getElementById('btn1'),
             btn2 = document.getElementById('btn2'),
    druzhbaButton = document.querySelector(".druzhba-button");
// scroll-3d-Animation
let tick = () => {
  let overflowHeight = centerContent.clientHeight - centerFold.clientHeight;

  document.body.style.height = overflowHeight + window.innerHeight + "px";

  targetScroll = -(document.documentElement.scrollTop || document.body.scrollTop);
  currentScroll += (targetScroll - currentScroll) * 0.1;
  foldsContent.forEach(content => {
    content.style.transform = `translateY(${currentScroll}px)`;
  });
  requestAnimationFrame(tick);
};

tick();


// show and hides frame elements while scrolling
const fadeOutUp = (element) => {
    element.style.transform = 'translateY(-500px)';
    element.style.transition = '.5s';
};

const fadeInDown = (element) => {
  element.style.transform = 'translateY(0px)';
  element.style.transition = '.5s';
};

const fadeOutRight = (element) => {
    element.style.transform = 'translateX(500px)';
    element.style.transition = '.5s';
};

const fadeInRight = (element) => {
  element.style.transform = 'translateX(0px)';
  element.style.transition = '.5s';
};

window.addEventListener('scroll', () => {
  let navbar = document.getElementById('navbar'),
      social = document.getElementById('social');

  document.body.getBoundingClientRect().top < scrollPos ? fadeOutUp(navbar) : fadeInDown(navbar);
  document.body.getBoundingClientRect().top < scrollPos ? fadeOutRight(social) : fadeInRight(social);

  scrollPos = (document.body.getBoundingClientRect()).top;
});