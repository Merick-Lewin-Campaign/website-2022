import 'bootstrap';
window.bootstrap = require('bootstrap');

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
document.addEventListener("DOMContentLoaded", function () {
    var myScrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#home-navbar"
    })
});

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false
})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})