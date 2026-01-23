document.addEventListener("DOMContentLoaded", function () {

    // --- 1. Modal Logic (Optimized) ---
    const modal = document.getElementById("servicePopup");
    const closeBtn = document.querySelector(".close-btn");
    const serviceSelect = document.getElementById("service-select");

    // Auto-open popup after 1.5 seconds if not seen before
    if (modal && !sessionStorage.getItem('popupShown')) {
        setTimeout(() => {
            modal.style.display = "block";
            sessionStorage.setItem('popupShown', 'true');
        }, 1500);
    }

    // Close logic (Null-safe)
    if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => {
        if (modal && e.target == modal) modal.style.display = "none";
    };


    // Prefill Service
    window.prefillService = function (serviceName) {
        modal.style.display = "none";

        // Smooth scroll to contact
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });

        if (serviceSelect) {
            serviceSelect.value = serviceName;
            // Highlight the selection visual effect
            serviceSelect.style.borderColor = 'var(--accent-color)';
            setTimeout(() => {
                serviceSelect.style.borderColor = '#e2e8f0';
            }, 1000);
        }
    }

    // --- 2. Enhanced Navbar Scroll Effect ---
    const header = document.querySelector("header");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        // Add shadow/color on scroll
        if (currentScroll > 50) {
            header.style.padding = "0"; // Shrink slightly
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        } else {
            header.style.padding = "10px 0"; // Original spacing
            header.style.boxShadow = "none";
        }

        lastScroll = currentScroll;
    });

    // --- 3. Intersection Observer for Fade-Ins ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Apply fade-in to sections and cards
    document.querySelectorAll('.service-card, .process-step, .about-text').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });

    // --- 4. Mobile Menu Toggle ---
    window.toggleMobileMenu = function () {
        // Simple toggle for demo - ideally adds a class to show/hide nav
        const nav = document.querySelector('.nav-links');
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '90px';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.background = 'var(--primary-color)';
            nav.style.padding = '20px';
        }
    }

    // --- 5. FAQ Toggle (Refined) ---
    const faqContainer = document.querySelector('.faq-container');
    if (faqContainer) {
        faqContainer.addEventListener('click', (e) => {
            const question = e.target.closest('.faq-question');
            if (question) {
                const item = question.closest('.faq-item');
                if (item) {
                    // Optional: Close other items when one is opened
                    // document.querySelectorAll('.faq-item').forEach(otherItem => {
                    //     if (otherItem !== item) otherItem.classList.remove('active');
                    // });
                    item.classList.toggle('active');
                }
            }
        });
    }

});
