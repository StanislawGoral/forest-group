const header = document.querySelector('.header')
const navList = document.querySelector(".header__nav-list")
const navLinks = navList.querySelectorAll(".header__nav-item")
const anchors = document.querySelectorAll(".anchor")

let headerHeight
let userOffsetTop
let navIDs = []

const getLinks = () => {
	navLinks.forEach(navLink => {
		let navID = navLink.firstChild.getAttribute("href").replace("-link", "")
		navID = navID
			.replace("/index.html#", "")
			.replace("/", "")
			.replace(".html", "")
		navIDs.push(navID)
	})
}

const scrollWatch = () => {
	userOffsetTop = document.documentElement.scrollTop
    headerHeight = header.clientHeight+1
	anchors.forEach(anchor => {
		if (anchor.offsetTop < userOffsetTop+headerHeight) {
			for (let i = 0; i < navLinks.length; i++) {
				if (
					navLinks[i]
						.getAttribute("id")
						.includes(anchor.getAttribute("id").replace("-anchor", ""))
				) {
					navLinks[i].classList.add("header__nav-item--active")
				}

                else {
                    navLinks[i].classList.remove("header__nav-item--active")
                }
			}
		}

        
	})
}

getLinks()
scrollWatch()

document.addEventListener("scroll", scrollWatch)