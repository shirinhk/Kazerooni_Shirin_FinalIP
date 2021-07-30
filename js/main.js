
//////BURGER MENU///////////////
(() => {
const button = document.querySelector("#button"),
        burgerCon = document.querySelector("#burgerCon");
        navLinks = burgerCon.querySelectorAll("a");


  function showNavigation() {

    button.classList.toggle("expanded");

    burgerCon.classList.toggle("slideToggle");
  }


  button.addEventListener("click", showNavigation);

  for (link of navLinks) {
    link.addEventListener("click", showNavigation);
  }
})();

/////////PRODUCT PAGE SHOW & HIDE MOBILE SIZE///////////////
////////////CALL ARAY TEXT IN DESKTOP SIZE/////////////////


let sections = document.querySelectorAll('.jsTrans'),
    boxButtons = document.querySelectorAll('.boxButton');

const buttons = document.querySelectorAll(".ipadBoxButton"),
      coolaName = document.querySelector(".jsChangingHead"),
      coolaInfo = document.querySelector(".brewText");


const beersData = [
    ["Ice Mint & Lime", `This product gives you cool relax heaven feeling. It is the best for mint lovers, those who like to have cool breath
    and enjoy freshness in all seasons. This is the only brew that represent a beer as melting ice in the group. 30% Alcohol
    of this product make it unique and different from all other beers in the universe and when you drink, you have the taste
    of beer ice mint and effect of a strong alcohol drink but with no bitterness this time!`],

    ["Pinacolada", `This product is one of a kind. You can not have pina colada in every occasion and every where but you can have
    Coola Pina Colada Beer every minute you desire and it is the same taste as you have always in your memory but this time with
    strong percentage of Alcohol which turns your mood on and bring you high in the sunny summer sky and beyond the clouds.
    30% Alcohol of this brew is a huge difference from what you have experienced so far and you can tell the difference.`,`Do not get it wrong, it is not a wild dog! It is happy, friendly but serious beer that gives you what you have never
    experienced before in your life. The taste is a bit spicy and the Alcohol percentage is 30%. It is one kind of mystery that you need
    to discover yourself. No one can truly share the experience he got with this drink.`],

    ["Red Hounder", `Do not get it wrong, it is not a wild dog! It is happy, friendly but serious beer that gives you what you have never
    experienced before in your life. The taste is a bit spicy and the Alcohol percentage is 30%. It is one kind of mystery that you need
    to discover yourself. No one can truly share the experience he got with this drink.`]
  ];

function showHide() {
  this.previousElementSibling.classList.toggle("hidden");
  this.nextElementSibling.classList.toggle("hidden");
}

boxButtons.forEach(button => button.addEventListener("click",showHide));


function callData() {

  const offSet = 0;
  let multiplier = this.dataset.offset,
  finalOffset = offSet * multiplier;

  showBeerData(multiplier);
}

function showBeerData(targetIndex) {
  debugger;

  coolaName.textContent = beersData[targetIndex][0];
  coolaInfo.textContent = beersData[targetIndex][1];
}

buttons.forEach(button => button.addEventListener("click",callData));


//////ADVERTISEMENTS PAGE SLIDER///////////////
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

 slides[slideIndex-1].style.display = "block";
}
