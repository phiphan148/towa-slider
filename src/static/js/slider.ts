let currentSlide = 0;
let startX = 0;
let endX = 0;
export function toggleSliderButton(): void {
  const nextButton = document.querySelector('.HeroSlider__Arrow-next');
  const previousButton = document.querySelector('.HeroSlider__Arrow-previous');
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      const slides = document.querySelectorAll('.HeroSlider__Item');
      console.log(slides)
      if (currentSlide < slides.length - 1) {
        currentSlide++;
      } else {
        currentSlide = 0;
      }
      updateSlider();
    });
  }
  if (previousButton) {
    previousButton.addEventListener('click', () => {
      const slides = document.querySelectorAll('.HeroSlider__Item');
      if (currentSlide > 0) {
        currentSlide--;
      } else {
        currentSlide = slides.length - 1;
      }
      updateSlider();
    });
  }
  const heroSliderItem = document.querySelectorAll('.HeroSlider__Item');
  heroSliderItem.forEach((item) => {
    item.addEventListener('touchstart', (e: any) => {
      startX = e.touches[0].clientX;
    });
    item.addEventListener('touchend', (e: any) => {
      endX = e.changedTouches[0].clientX;
      handleGesture();
    });
  });
}

export function updateIndicators(): void {
  const indicators = document.querySelectorAll('.HeroSlider__Bar');
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
}

function moveToNextSlide() {
  const slides = document.querySelectorAll('.HeroSlider__Item');
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSlider();
}

function moveToPrevSlide() {
  const slides = document.querySelectorAll('.HeroSlider__Item');
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slides.length - 1;
  }
  updateSlider();
}

function handleGesture() {
  if (endX < startX) {
    moveToNextSlide();
  } else if (endX > startX) {
    moveToPrevSlide();
  }
}

function updateSlider(): void {
  const sliderWrapper = document.querySelector('.HeroSlider__Content') as HTMLElement;
  if (sliderWrapper) {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  updateIndicators();
}


