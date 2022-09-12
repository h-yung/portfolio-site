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
    document.querySelector('#freeze').classList.toggle('invert')
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

const freezeAnimOnClick = document.querySelector('#freeze')
freezeAnimOnClick.addEventListener('click', stopMoving)

// stop animations from running
function stopMoving(){
    let smallAnim = document.querySelector('[data-info="anim"]')
    let bkgAnim = document.querySelector('#top')

    smallAnim.src = "images/AHUber-instructions_transp_light.png"
    bkgAnim.style.backgroundImage = "url(images/AHUber-instructions_transp.png)";
    bkgAnim.style.backgroundRepeat = "no-repeat";
    bkgAnim.style.animation = "none";

    //web dev work statics
    document.querySelector('.work__shopList').src = "images/web-dev-static/smartshopping_promo.jpg"
    document.querySelector('.work__naginata').src = "images/web-dev-static/heroku-db-naginata_v3.png"
    document.querySelector('.work__jargon').src = "images/web-dev-static/jargon_desktop_1.jpg"
    document.querySelector('.work__cafe').src = "images/web-dev-static/idyll_preview.jpg"
    document.querySelector('.work__memory').src = "images/web-dev-static/game_pokememory.jpg"
    document.querySelector('.work__seasons').src = "images/design-static/logo_seasons_still.jpg"
    document.querySelector('.work__ryuko').src = "images/design-static/logo_ryuuko-taikai.jpg"

    //below:buggy
    // if (window.innerWidth < 598){
    //     bkgAnim.style.backgroundPosition = "top center";
    // }
}