
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


// SWIPER CAROUSSELL

const swiper = new Swiper('.testimonial_container', {
    
    spaceBetween:16,
    loop: true,
    grabCursor: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        640:{
           slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    }
  });

//   GSAP ANIMATION

gsap.from('.home_img', {opacity: 0, duration: 2, delay: .5, x:60});
gsap.from('.home_data', {opacity: 0, duration: 2, delay: .8, y:25});
gsap.from('.home_name, .home_profession, .home_button', {opacity: 0, duration: 2, delay: 1, y:25, ease: 'expo.out', stagger:.2});
gsap.from('.nav_logo, .nav_toggle', {opacity: 0, duration: 2, delay: 1.5, y:25, ease: 'expo.out', stagger:.2});
gsap.from('.nav_item', {opacity: 0, duration: 2, delay: 1.8, y:25, ease: 'expo.out', stagger:.2});
gsap.from('.home_social-icon', {opacity: 0, duration: 2, delay: 2.3, y:25, ease: 'expo.out', stagger:.2});
  