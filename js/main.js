//********Start Sidebar  drawer Animation Function***********
//select element funvtion
//with function
/*
const selectElement = function (element) {
    return document.querySelector(element);
};
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});
*/
//without function
let mToggler = document.querySelector(".menu-toggle");
let tBody = document.querySelector("body");
mToggler.addEventListener("click", function () {
  tBody.classList.toggle("open");
});
//********End Sidebar  drawer Animation Function***********
//********Start Body Animation Function***********
//scrolling animation using scroll reveal library
window.sr = ScrollReveal();
sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

//********End  Body Animation Function***********
