import { loadComponent } from './utils/dom.js';

/**
 * Menginisialisasi semua logika DOM setelah komponen dimuat.
 */
function initializeAppLogic() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const header = document.getElementById('header');
    const contactForm = document.getElementById('contactForm');

    // 1. Dark Mode Initialization
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }

    // 2. Mobile Navigation Toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // 3. Navigation Link Click & Close Menu
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Update active class on click (for immediate feedback)
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // 4. Scroll Effects (Header & Active Link)
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        const sections = document.querySelectorAll('.section');
        // Offset scroll position slightly below the header
        const scrollPosition = window.scrollY + (header ? header.offsetHeight + 20 : 100);

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // 5. Intersection Observer for Animations (Fade In)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.skill-item, .project-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 6. Intersection Observer for Lazy Loading Images
    const projectImages = document.querySelectorAll('.project-image img');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Note: Since the images already have loading="lazy" in HTML,
                // this part is mostly redundant but kept for consistency if we were to change the HTML attribute.
                // We will just unobserve.
                imageObserver.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '50px'
    });

    projectImages.forEach(img => {
        imageObserver.observe(img);
    });

    // 7. Contact Form Validation (Demo)
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Mohon lengkapi semua field!');
                return false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Format email tidak valid!');
                return false;
            }

            if (message.length < 10) {
                alert('Pesan minimal 10 karakter!');
                return false;
            }

            alert(`Terima kasih ${name}! Pesan Anda telah terkirim.\n\nIni adalah demo form. Di versi production, form ini akan mengirim data ke server.`);

            contactForm.reset();

            return false;
        });
    }

    // 8. Smooth Scroll
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Recalculate header height dynamically
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 9. Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navToggle) {
            const isClickInsideNav = navMenu.contains(e.target) || navToggle.contains(e.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    });
}

/**
 * Fungsi utama untuk memuat semua komponen.
 */
async function loadAllComponents() {
    // Load structural components
    await loadComponent('/components/Header.html', 'header-container');
    await loadComponent('/pages/Home.html', 'main-content');
    await loadComponent('/components/Footer.html', 'footer-container');

    // Load sections into the main content placeholders
    await loadComponent('/components/Hero.html', 'hero-container');
    await loadComponent('/components/About.html', 'about-container');
    await loadComponent('/components/Projects.html', 'projects-container');
    await loadComponent('/components/Contact.html', 'contact-container');

    // Once all components are loaded, initialize the JavaScript logic
    initializeAppLogic();
}

// Start the application
loadAllComponents();