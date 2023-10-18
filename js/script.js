/*=============== toggle icon navbar ================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=============== scroll sections active link ================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    const currentPos = window.scrollY;
    sections.forEach(sec => {
        const top = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (currentPos >= top && currentPos < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', currentPos > 100);

    /*=============== remove toggle icon and navbar when click navbar link (scroll) ================*/
    if (window.innerWidth < 768) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

/*=============== smooth scrolling on anchor link clicks ================*/
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        const topOffset = 100; // Adjust this value to offset the scroll position
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - topOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-col-1, .h1', { origin: 'top' });
ScrollReveal().reveal('.home-col-2, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-col-1 h1, .about-col-2', { origin: 'left' });
ScrollReveal().reveal('.home-col-1 p, .about-col-1', { origin: 'right' });


