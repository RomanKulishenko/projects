const sliderImages = document.querySelectorAll(".slider__img"),
  sliderLine = document.querySelector(".slider-line"),
  textLine = document.querySelector(".text-slider-line"),
  textSlide = document.querySelectorAll(".project__options"),
  sliderDots = document.querySelectorAll(".btn-dot"),
  sliderNav = document.querySelectorAll(".projects__list-item"),
  sliderBtnNext = document.querySelector("#btn-next"),
  sliderBtnPrev = document.querySelector("#btn-prev");

let sliderCount = 0,
  sliderWidthText,
  sliderWidth;

// Кнопки листания слайдов вперед и назад
sliderBtnNext.addEventListener("click", nextSlide);
sliderBtnPrev.addEventListener("click", prevSlide);

// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlide() {
  sliderWidth = document.querySelector(".projects__imges").offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length + "px";
  sliderImages.forEach((item) => (item.style.width = sliderWidth + "px"));

  sliderWidthText = document.querySelector("#text-slider").offsetWidth;
  textLine.style.width = sliderWidthText * textSlide.length + "px";
  textSlide.forEach((item) => (item.style.width = sliderWidthText + "px"));

  rollSlider();
}
showSlide();

// Перелистывает слайд вперед
function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;
  if (sliderCount >= textSlide.length) sliderCount = 0;

  rollSlider();
  thisSlide(sliderCount);
}

// Перелистывает слайд назад
function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImages.length - 1;
  if (sliderCount < 0) sliderCount = textSlide.length - 1;

  rollSlider();
  thisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
  textLine.style.transform = `translateX(${-sliderCount * sliderWidthText}px)`;
}

// Указывает как слайд по счету активен
function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove("active-dot"));
  sliderDots[index].classList.add("active-dot");

  sliderNav.forEach((item) => item.classList.remove("active-item"));
  sliderNav[index].classList.add("active-item");
}

// Вешает клик на dot
sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});

sliderNav.forEach((item, index) => {
  item.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});
