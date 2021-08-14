/* eslint-disable */
const slider = document.querySelector('div#slider');

const slides = slider.querySelectorAll('.slide');
const previousSlide = slider.querySelector('button.previous');
const nextSlide = slider.querySelector('button.next');
const bottomNav = slider.querySelectorAll('ul#slider-bottom-nav li');

let activeSlide = 0;
let sliderInterval = setInterval(() => showSlide(activeSlide + 1), 5000);

const showSlide = function (n) {
    let slideToShow = n;
    if (n < 0) {
        slideToShow = slides.length - 1;
    }
    if (n >= slides.length) {
        slideToShow = 0;
    }
    switchSlides(slideToShow);
    highlightNavigationDot(slideToShow);
    activeSlide = slideToShow;
    sliderInterval = resetInterval(sliderInterval, () => showSlide(activeSlide + 1), 5000);
};

const switchSlides = function (slideToShow) {
    slides[activeSlide].classList.remove('active-slide');
    slides[slideToShow].classList.add('active-slide');
}

const highlightNavigationDot = function (slideToShow) {
    bottomNav[activeSlide].classList.remove('active');
    bottomNav[slideToShow].classList.add('active');
}

const resetInterval = function (intervalId, callback, delay) {
    clearInterval(intervalId);
    return setInterval(callback, delay);
}

previousSlide.addEventListener('click', () => showSlide(activeSlide - 1));
nextSlide.addEventListener('click', () => showSlide(activeSlide + 1));

for (const [i, navDot] of bottomNav.entries()) {
    navDot.addEventListener('click', showSlide.bind(this, i));
}

showSlide(activeSlide);
