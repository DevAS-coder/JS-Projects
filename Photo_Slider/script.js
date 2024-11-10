var nextBtn = document.querySelector(".nextbtn");
var prvBtn = document.querySelector(".prvbtn");
var slides = document.getElementById("slides");

const imgCount = slides.getElementsByTagName("img").length;
var imgTransformLength = (imgCount - 1) * 900;
var slideShower = 0;

function nextImage() {
  if (slideShower * 900 != imgTransformLength) {
    slides.style.transform = "translateX(-" + (slideShower + 1) * 900 + "px)";
    slideShower += 1;
  } else {
    slides.style.transform = "translateX(0px)";
    slideShower = 0;
  }
}

function prvImage() {
  if (slideShower != 0) {
    slideShower -= 1;
    slides.style.transform = "translateX(-" + slideShower * 900 + "px)";
  } else {
    slideShower = imgCount - 1;
    slides.style.transform = "translateX(-" + slideShower * 900 + "px)";
  }
}

nextBtn.addEventListener("click", nextImage);
prvBtn.addEventListener("click", prvImage);