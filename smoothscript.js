{
    // 1. Fakana ireo zavatra ilaina rehetra (Selectors)
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const revealElements = document.querySelectorAll('.reveal');

    // 2. --- MENU BURGER ---
    if (btn && menu) {
        btn.onclick = () => {
            menu.classList.toggle('hidden');
        };

        mobileLinks.forEach(link => {
            link.onclick = () => menu.classList.add('hidden');
        });
    }

    // 3. --- NAVBAR SCROLL EFFECT ---
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 4. --- SMOOTH SCROLL ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 5. --- REVEAL ANIMATION ON SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach((el) => observer.observe(el));
}

// Rehefa misokatra ny pejy
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return; // Fisorahana error raha tsy misy navbar ilay pejy

    const isHasHero = document.body.classList.contains('has-hero');
    const isNoHero = document.body.classList.contains('no-hero');
    const scrolled = window.scrollY > 50;

    if (isHasHero) {
        // PEJY MISY HERO (Index)
        if (scrolled) {
            navbar.classList.add('bg-slate-900', 'shadow-lg', 'py-4', 'text-white');
            navbar.classList.remove('py-6');
        } else {
            navbar.classList.remove('bg-slate-900', 'shadow-lg', 'py-4', 'text-white');
            navbar.classList.add('py-6');
        }
    } 
    else if (isNoHero) {
        // PEJY FOTSY (Suite Royale, Propos)
        if (scrolled) {
            navbar.classList.add('py-4', 'shadow-md');
            navbar.classList.remove('py-6');
            // Ataontsika antoka fa tsy mivadika text-white izy eto
            navbar.classList.remove('text-white');
        } else {
            navbar.classList.add('py-6');
            navbar.classList.remove('py-4', 'shadow-md');
        }
    }
});