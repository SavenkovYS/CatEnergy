'use strict';

const exampleSection = document.querySelector('.example');
const btnBefore = exampleSection.querySelector('.example__toggle-button--before');
const btnAfter = exampleSection.querySelector('.example__toggle-button--after');
const toggleMobile = exampleSection.querySelector('.example__toggle-mobile');

btnBefore.addEventListener('click', () => {
    exampleSection.classList.remove('example--after');
})

btnAfter.addEventListener('click', () => {
    exampleSection.classList.add('example--after');
})

toggleMobile.addEventListener('click', () => {
    exampleSection.classList.toggle('example--after');
})