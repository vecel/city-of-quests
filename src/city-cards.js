/* eslint-disable */
const cardView = document.querySelector('#cards-container');

const previousCards = document.querySelector('#city-selection .card-nav.previous');
const nextCards = document.querySelector('#city-selection .card-nav.next');

previousCards.addEventListener('click', () => {
    cardView.scrollLeft -= 992;
});

// previousCards.addEventListener('dblclick', () => {cardView.scrollLeft -= 10000; console.log('dbl')});

nextCards.addEventListener('click', () => {
    cardView.scrollLeft += 992;
});

// previousCards.addEventListener('dblclick', () => cardView.scrollLeft += 10000);
