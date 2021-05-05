let slideIndex = 1;
showSlideShow(slideIndex);

// Previous control controls
function plusSlides(n) {
  showSlideShow(slideIndex += n);
}

// Next control controls
function currentSlide(n) {
  showSlideShow(slideIndex = n);
}

function showSlideShow(n) {
  let i;
  let slides = document.getElementsByClassName("thumbnails");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}