const slider = document.querySelector('div#slider');

const slides = slider.querySelectorAll('.slide');
const previousSlide = slider.querySelector('button.previous');
const nextSlide = slider.querySelector('button.next');
const bottomNav = slider.querySelectorAll('ul#slider-bottom-nav li');

let activeSlide = 0;
let sliderInterval;

const switchSlides = function (slideToShow) {
    slides[activeSlide].classList.remove('active-slide');
    slides[slideToShow].classList.add('active-slide');
};

const highlightNavDot = function highlightBottomNavigationDot(slideToShow) {
    bottomNav[activeSlide].classList.remove('active');
    bottomNav[slideToShow].classList.add('active');
};

const resetInterval = function (intervalId, callback, delay) {
    clearInterval(intervalId);
    return setInterval(callback, delay);
};

const showSlide = function showSlideNumberN(n) {
    let slideToShow = n;
    if (n < 0) slideToShow = slides.length - 1;
    if (n >= slides.length) slideToShow = 0;

    switchSlides(slideToShow);
    highlightNavDot(slideToShow);
    activeSlide = slideToShow;
    sliderInterval = resetInterval(sliderInterval, () => showSlide(activeSlide + 1), 5000);
};

previousSlide.addEventListener('click', () => showSlide(activeSlide - 1));
nextSlide.addEventListener('click', () => showSlide(activeSlide + 1));
bottomNav.forEach((navDot, i) => navDot.addEventListener('click', showSlide.bind(this, i)));

showSlide(activeSlide);
