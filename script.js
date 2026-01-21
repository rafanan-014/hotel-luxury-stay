const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');

    // Manokatra sy manakatona ny menu rehefa kitiho ny burger
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Manakatona ny menu rehefa misy kitiho ny lien iray (ho an'ny finday)
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });