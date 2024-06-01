let currentSlide = 0;
let startX = 0;
let endX = 0;

function updateSlider(): void {
  const sliderWrapper = document.querySelector('.HeroSlider__Content') as HTMLElement;
  if (sliderWrapper) {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  updateIndicators();
}

function moveToNextSlide() {
  const heroSlider = document.querySelectorAll('.HeroSlider__Item');
  if (currentSlide < heroSlider.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSlider();
}

function moveToPrevSlide() {
  const heroSlider = document.querySelectorAll('.HeroSlider__Item');
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = heroSlider.length - 1;
  }
  updateSlider();
}

function touchStart(event: TouchEvent) {
  startX = event.touches[0].clientX;
}

function touchEnd(event: TouchEvent) {
  endX = event.changedTouches[0].clientX;
  handleGesture();
}

function handleGesture() {
  if (endX < startX) {
    moveToNextSlide();
  } else if (endX > startX) {
    moveToPrevSlide();
  }
}

function clickToArrowAction(): void {
  const nextButton = document.querySelector('.HeroSlider__Arrow-next');
  const previousButton = document.querySelector('.HeroSlider__Arrow-previous');
  if (nextButton) {
    nextButton.addEventListener('click', () => moveToNextSlide());
  }
  if (previousButton) {
    previousButton.addEventListener('click', () => moveToPrevSlide());
  }
}

function touchScreenAction() {
  window.addEventListener('resize', touchScreenAction);
  const mq = window.matchMedia( "(max-width: 900px)" );
  const heroSlider = document.querySelectorAll('.HeroSlider__Item');
  if (mq.matches) {
    heroSlider.forEach((item: any) => {
      item.addEventListener('touchstart',touchStart, true);
      item.addEventListener('touchend',touchEnd, true );
    });
  } else {
    heroSlider.forEach((item: any) => {
      item.removeEventListener('touchstart',touchStart, true);
      item.removeEventListener('touchend',touchEnd, true );
    });
  }
}

export function updateIndicators(): void {
  const indicators = document.querySelectorAll('.HeroSlider__Bar');
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
}

export function toggleSlider() {
  clickToArrowAction();
  touchScreenAction();
}


