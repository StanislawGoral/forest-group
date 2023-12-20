const burgerIcon = document.querySelector('.header__mobile-burger')
const mobileNav = document.querySelector('.header__mobile-list')
const mobileNavItems = mobileNav.querySelectorAll('.header__nav-item')

const handleBurgerClick = () => {
    burgerIcon.classList.toggle('header__mobile-burger--active')
    mobileNav.classList.toggle('header__mobile-list--active')
}

burgerIcon.addEventListener('click', handleBurgerClick)
mobileNavItems.forEach(mobileNavItem => {
    mobileNavItem.addEventListener('click', () => {
        burgerIcon.classList.remove('header__mobile-burger--active')
        mobileNav.classList.remove('header__mobile-list--active')
    })
}
)