document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animation au défilement (Scroll Reveal)
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    // Ciblage des éléments à faire apparaître dynamiquement
    const elementsToReveal = document.querySelectorAll('.veille-card, .spec-card, .certif-card, .skill-card, h1, h2, h3');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal'); // Initialise l'état invisible
        observer.observe(el);
    });

    // 2. Navigation fluide (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Espace pour le header fixe
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Changement d'aspect du header au scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            header.style.padding = '1rem 10%';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '1.5rem 10%';
        }
    });
});
