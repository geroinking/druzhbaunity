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
  btn2 = document.getElementById('btn2');

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
const hideElem = (element) => {
  element.classList.add('fadeOutUp');
};

const showElem = (element) => {
  element.classList.remove('fadeOutUp');
  element.classList.add('fadeInDown');
};

const hideSocial = (element) => {
  element.classList.add('fadeOutRight');
};

const showSocial = (element) => {
  element.classList.remove('fadeOutRight');
  element.classList.add('fadeInRight');
};

window.addEventListener('scroll', () => {
  let navbar = document.getElementById('navbar'),
    social = document.getElementById('social');

  document.body.getBoundingClientRect().top < scrollPos ? hideElem(navbar) : showElem(navbar);
  document.body.getBoundingClientRect().top < scrollPos ? hideSocial(social) : showSocial(social);

  scrollPos = (document.body.getBoundingClientRect()).top;
});

// /?