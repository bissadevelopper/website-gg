const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let currentSlide = 0;
let totalSlides = slider.childElementCount;

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

function showPrevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  setSliderPosition();
}

function showNextSlide() {
  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  setSliderPosition();
}

function setSliderPosition() {
  const offset = currentSlide * -100;
  slider.style.transform = `translateX(${offset}%)`;
}

setSliderPosition();


const menuBtn = document.querySelector(".menu-icon span");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
  cancelBtn.classList.add("show");
}