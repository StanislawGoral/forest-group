const nav = document.querySelector(".header__nav-list")
const navLinks = nav.querySelectorAll(".header__nav-item")

const anchors = document.querySelectorAll(".anchor")

let userOffsetTop
let highestNavIndex = 0
const scrollspy = () => {
	userOffsetTop = document.documentElement.scrollTop
	for (let i = 0; i < anchors.length; i++) {
		if(anchors[i].offsetTop <= userOffsetTop+70){
            highestNavIndex = i;
        }
    }
}

const cleanup = () => {
    for (let i = 0; i < anchors.length; i++) {
        if (i == highestNavIndex) {
            navLinks[i].classList.add("header__nav-item--active")
        }

        else {
            navLinks[i].classList.remove("header__nav-item--active")
        }
    }
}

document.addEventListener("scroll", () => {
    scrollspy()
    cleanup()
})

scrollspy()
cleanup()
