'use strict';


const TABLET_WIDTH = 768;
const docWidth = document.documentElement.clientWidth;
const imgBefore = document.querySelector('.example__comparison-image-wrapper--before');
const imgAfter = document.querySelector('.example__comparison-image-wrapper--after');
const range = document.querySelector('.example__toggle-desktop');
const btnBefore = document.querySelector('.example__toggle-button--before');
const btnAfter = document.querySelector('.example__toggle-button--after');
console.log(docWidth)
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



// (function () {

//   // Progress block

//   var progress = document.querySelector('.demo__progress');

//   if (progress) {

//     if (docWidth >= tabletWidth) {
//       var imgBefore = progress.querySelector('.demo__illustration--before');
//       var imgAfter = progress.querySelector('.demo__illustration--after');
//       var scale = progress.querySelector('.demo__progress-bar');
//       var range = scale.querySelector('.demo__range');

//       range.addEventListener('input', function() {
//         imgBefore.style.width = (100 - range.value) + '%';
//         imgAfter.style.width = range.value + '%';
//       })

//       btnBefore.addEventListener('click', function () {
//         imgBefore.style.width = '100%';
//         imgAfter.style.width = '0%';
//         range.value = 0;
//       })

//       btnAfter.addEventListener('click', function () {
//         imgBefore.style.width = '0%';
//         imgAfter.style.width = '100%';
//         range.value = 100;
//       })
//     }
//   }

// })();