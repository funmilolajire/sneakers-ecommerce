const burgerNav = document.getElementById('mobile-nav-control');
const closeNav = document.getElementById('mobile-nav-close')
const navEl = document.getElementById('nav')

const openMobileNav = () => {
    if (!navEl?.classList.contains('header__nav--is-open')&&window.innerWidth<850) {
        navEl?.classList.add('header__nav--is-open')
    }
}

const closeMobileNav = () => {
    if (navEl?.classList.contains('header__nav--is-open')) {
        navEl?.classList.remove('header__nav--is-open')
    }
}

burgerNav?.addEventListener('click', openMobileNav)
closeNav?.addEventListener('click', closeMobileNav)