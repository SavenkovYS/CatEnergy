'use strict';

const TABLET_WIDTH = 768;
const docWidth = document.documentElement.clientWidth;

const exampleSection = document.querySelector('.example');
const btnBefore = exampleSection.querySelector('.example__toggle-button--before');
const btnAfter = exampleSection.querySelector('.example__toggle-button--after');
const toggleMobile = exampleSection.querySelector('.example__toggle-mobile');
const imgBefore = exampleSection.querySelector('.example__comparison-image-wrapper--before');
const imgAfter = exampleSection.querySelector('.example__comparison-image-wrapper--after');
const range = exampleSection.querySelector('.example__toggle-desktop');

btnBefore.addEventListener('click', () => {
    exampleSection.classList.remove('example--after');
})

btnAfter.addEventListener('click', () => {
    exampleSection.classList.add('example--after');
})

toggleMobile.addEventListener('click', () => {
    exampleSection.classList.toggle('example--after');
})

if(docWidth >= TABLET_WIDTH) {
    range.addEventListener('input', () => {
        changeImageSize()
    })
    
    btnBefore.addEventListener('click', () => {
        range.value = 0;
        changeImageSize()
    })
    
    btnAfter.addEventListener('click', () => {
        range.value = 100;
        changeImageSize()
    })
    
    function changeImageSize() {
        imgBefore.style.clipPath = `polygon(0 0, ${100 - range.value}% 0, ${100 - range.value}% 100%, 0 100%)`;
        imgAfter.style.clipPath = `polygon(${100 - range.value}% 0, 100% 0, 100% 100%, ${100 - range.value}% 100%)`;
    }
}