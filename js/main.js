
// Show-Menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// Remove mobile menu

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll Sections Active Link

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrolly = window.pageYOffset

    sections.forEach(current =>{
       const sectionHeight = current.offsetHeight
       const sectionTop = current.offsetTop - 50
       sectionId = current.getAttribute('id')

       if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
           document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
       }
       else{
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
       }
    })
     
}
window.addEventListener('scroll', scrollActive)

// Change BG header

function scrollHeader() {
    const header = document.getElementById('header')

    if (this.scrollY >= 200) {
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)

// Show Scroll Top

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')

    if (this.scrollY >= 200) {
        scrollTop.classList.add('show-scroll');
    }
    else {
        scrollTop.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollTop);


// MIXITUP FILTER

const mixer = mixitup('.portfolio_container', {
    selectors: {
        target: '.portfolio_content'
    },
    animation: {
        duration: 400
    }
});

// Link active portfolio

const linkPortfolio = document.querySelectorAll('.portfolio_item');

function activePortfolio() {
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'));
        this.classList.add('active-portfolio');
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio));

