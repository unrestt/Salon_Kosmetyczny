document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // 2. Pricing Tabs
    const tabs = document.querySelectorAll('.pricing-tab');
    const contents = document.querySelectorAll('.pricing-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-category');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // 3. Reviews Slider - REMOVED (Switched to Grid)

    // 4. Scroll Animations (Fade In)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeSections = document.querySelectorAll('.fade-in-section');
    fadeSections.forEach(section => {
        observer.observe(section);
    });

    // 5. Cookie Banner
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');

    // Check if user already accepted (simulated with localStorage)
    if (!localStorage.getItem('cookiesAccepted')) {
        // Show banner (it is visible by default in HTML, so we just let it be)
    } else {
        cookieBanner.style.display = 'none';
    }

    acceptBtn.addEventListener('click', () => {
        cookieBanner.style.opacity = '0';
        cookieBanner.style.transform = 'translateY(20px)';
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 500);
        localStorage.setItem('cookiesAccepted', 'true');
    });

    // Reset Cookies (for testing)
    const resetBtn = document.getElementById('resetCookies');
    if (resetBtn) {
        resetBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('cookiesAccepted');
            location.reload();
        });
    }
});
