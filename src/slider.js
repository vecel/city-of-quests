/* eslint-disable */
const slider = document.querySelector('div#slider');

const slides = slider.querySelectorAll('#slider .slide');
const previousSlide = slider.querySelectorAll('button.previous');
const nextSlide = slider.querySelectorAll('button.next');

// console.log(previousSlide);

let activeSlide = 0;

const showSlide = function(n) {
    let slideToShow = n
    if (n < 0) {
        slideToShow = slides.length - 1;
    }
    if (n >= slides.length) {
        slideToShow = 0;
    }
    slides[activeSlide].classList.remove('active-slide');
    slides[slideToShow].classList.add('active-slide');
    activeSlide = slideToShow;
}

const moveSlide = function(n) {
    activeSlide += n;
    showSlide(activeSlide);
}

console.log('it works')
// previousSlide.addEventListener('click', () => {
//     console.log('hello')
// })

showSlide(activeSlide);
