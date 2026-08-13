// ===============================
// Navigation elements
// ===============================

const menuButton = document.getElementById('menu-btn');
const navigation = document.getElementById('nav-menu');


// ===============================
// Smooth scroll for navigation
// ===============================

document.querySelectorAll('#nav-menu a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

        // Close mobile menu
        navigation.classList.remove('active');

    });

});


// ===============================
// Mobile navigation
// ===============================

menuButton.addEventListener('click', () => {

    navigation.classList.toggle('active');

});


// ===============================
// Dynamic copyright year
// ===============================

document.getElementById('year').textContent =
    new Date().getFullYear();


// ===============================
// Scroll reveal animation
// ===============================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


document.querySelectorAll(
    '.section-heading, .project-card, .stat-card, .experience-card, .skill-group'
).forEach(element => {

    element.classList.add('reveal');

    observer.observe(element);

});