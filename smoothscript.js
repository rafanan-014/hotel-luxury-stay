// --- MENU BURGER ---
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const links = document.querySelectorAll('.mobile-link');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}

// --- SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Raha toa ka lien mankany amin'ny pejy hafa (ohatra: contact.html) dia avela amin'izao
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// --- REVEAL ANIMATION ON SCROLL ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 }); // 10% amin'ilay zavatra no hita dia mandeha ny animation

// Tadiavo ny zavatra rehetra misy class "reveal"
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => observer.observe(el));

const navbar = document.getElementById('navbar');

window.onscroll = function() {
    if (window.scrollY > 50) {
        // Rehefa midina: Lasa mainty sy kely
        navbar.classList.add('bg-black/90', 'backdrop-blur-md', 'py-4', 'shadow-lg');
        navbar.classList.remove('py-6');
    } else {
        // Rehefa any an-tampony: Miverina mangarahara sy lehibe
        navbar.classList.remove('bg-black/90', 'backdrop-blur-md', 'py-4', 'shadow-lg');
        navbar.classList.add('py-6');
    }
};