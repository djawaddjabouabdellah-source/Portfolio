// Animation au défilement (Scroll Reveal)
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Menu sticky qui change de couleur au scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(26, 26, 26, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = '#1a1a1a';
    }
});
