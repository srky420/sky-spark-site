/**
 * Small utility to load HTML components like header and footer
 */
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        
        // RE-initialize Lucide icons after loading content
        if (window.lucide) {
            window.lucide.createIcons();
        }

        // If header was loaded, init mobile menu
        if (elementId === 'header-placeholder') {
            initMobileMenu();
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('header nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
            nav.classList.toggle('flex-col');
            nav.classList.toggle('absolute');
            nav.classList.toggle('top-full');
            nav.classList.toggle('left-0');
            nav.classList.toggle('w-full');
            nav.classList.toggle('bg-slate-900');
            nav.classList.toggle('p-6');
            nav.classList.toggle('border-b');
            nav.classList.toggle('border-slate-800');
        });
    }
}

function initHeaderScroll() {
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('py-2', 'bg-slate-900/95');
                header.classList.remove('py-4', 'bg-slate-900/80');
            } else {
                header.classList.add('py-4', 'bg-slate-900/80');
                header.classList.remove('py-2', 'bg-slate-900/95');
            }
        }
    });
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', 'components/header.html');
    loadComponent('footer-placeholder', 'components/footer.html');
    
    initHeaderScroll();
    
    // Initialize icons for static content
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Initialize AOS
    if (window.AOS) {
        window.AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
});
