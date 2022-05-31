import 'bootstrap';

//homepage nav background color when begin to scroll down
const navbar = document.querySelector('nav')

window.onscroll = function () {
    // pageYOffset or scrollY
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}

// homepage scrollspy navigation active links
var scrollSpy = document.querySelector('[data-bs-spy="scroll"]')
window.addEventListener('activate.bs.scrollspy', function () {
})
