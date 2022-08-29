// variables
    // sections
    const intro = document.querySelector('#intro')
    const deskNav = document.querySelector('header nav.menu')

    //interactive
    const ctaImportant = document.querySelector('button.cta')
    const toggleMode = document.querySelector('#toggleMode')
    const showAll = document.querySelector('#showAll')
    const showDev = document.querySelector('#showDev')
    const showDesign = document.querySelector('#showDesign')
    const mobileNav = document.querySelector('.mobile.wrapper')

// change mode
toggleMode.addEventListener('click', toggleLightDark)

function toggleLightDark(){
    // const useLight = window.matchMedia("(prefers-color-scheme: light)")

    
    // despite structural efforts, currently a bit specific
    intro.classList.toggle('invert')
    // ctaImportant.classList.toggle('invert')
    document.querySelector('#feature').classList.toggle('invert')
    document.querySelector('#myWork').classList.toggle('invert')
    document.querySelector('#services').classList.toggle('invert')
    document.querySelector('#about').classList.toggle('invert')
    document.querySelector('#contact').classList.toggle('invert')
    document.querySelector('footer').classList.toggle('invert')
}

// close mobile nav - a temporary fix
const mobileNavLinks = Array.from(mobileNav.childNodes)
mobileNavLinks.forEach(element => element.addEventListener('click', closeMenu))

function closeMenu(){
    console.log('target')
    document.querySelector('#burgerInput').checked = false;
}

