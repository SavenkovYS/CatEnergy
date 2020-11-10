'use strict'

const mainNav = document.querySelector('.main-nav')
const btnOpen = mainNav.querySelector('.main-nav__button--open')
const btnClose = mainNav.querySelector('.main-nav__button--close')

mainNav.classList.add('main-nav--closed')

btnOpen.addEventListener('click', () => {
    mainNav.classList.remove('main-nav--closed')
})

btnClose.addEventListener('click', () => {
    mainNav.classList.add('main-nav--closed')
})