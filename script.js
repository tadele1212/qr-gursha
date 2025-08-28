// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Animation on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.focus-card, .service-card, .partner-card');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    // Toggle menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && 
            !navLinks.contains(e.target) && 
            navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Optional: Hide menu on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        document.querySelector('.navbar').style.top = '-80px';
    } else {
        // Scrolling up
        document.querySelector('.navbar').style.top = '0';
    }
    lastScrollTop = scrollTop;
}); 