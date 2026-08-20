document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PRELOADER
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        if (preloader) preloader.classList.add('hidden');
    });

    // 2. CUSTOM CURSOR (Desktop only)
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (window.innerWidth > 768 && cursorDot && cursorOutline) {
        document.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursorDot.style.transform = `translate(${posX}px, ${posY}px)`;
            setTimeout(() => {
                cursorOutline.style.transform = `translate(${posX}px, ${posY}px)`;
            }, 50);
        });

        const hoverables = document.querySelectorAll('a, button, .btn, .subject-card, .feature-card, .process-step, .pricing-card');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => cursorOutline.classList.add('grow'));
            el.addEventListener('mouseleave', () => cursorOutline.classList.remove('grow'));
        });
    }

    // 3. NAVBAR SCROLL EFFECT
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        });
    }

    // 4. MOBILE MENU TOGGLE
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link, .btn-nav, .btn-nav-outline').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 5. SCROLL REVEAL ANIMATIONS
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        revealElements.forEach(el => revealObserver.observe(el));
    }

    // 6. STAT COUNTER ANIMATION
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseFloat(el.getAttribute('data-target'));
                    let current = 0;
                    const increment = target / 100;

                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            if (target === 4.9) {
                                el.textContent = current.toFixed(1);
                            } else {
                                el.textContent = Math.ceil(current);
                            }
                            requestAnimationFrame(updateCounter);
                        } else {
                            el.textContent = target === 4.9 ? '4.9' : target + '+';
                        }
                    };
                    updateCounter();
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        statNumbers.forEach(el => counterObserver.observe(el));
    }

    // 7. RATING STAR INTERACTION
    const stars = document.querySelectorAll('.stars i');
    let selectedRating = 0;

    if (stars.length > 0) {
        stars.forEach(star => {
            star.addEventListener('click', () => {
                selectedRating = parseInt(star.getAttribute('data-value'));
                updateStars(selectedRating);
            });
            star.addEventListener('mouseenter', () => {
                updateStars(parseInt(star.getAttribute('data-value')));
            });
            star.addEventListener('mouseleave', () => {
                updateStars(selectedRating);
            });
        });
    }

    function updateStars(count) {
        stars.forEach(star => {
            const value = parseInt(star.getAttribute('data-value'));
            if (value <= count) {
                star.classList.remove('far');
                star.classList.add('fas', 'active');
            } else {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            }
        });
    }

    // 8. FEEDBACK FORM SUBMISSION - DEMO MODE (No backend required)
    const feedbackForm = document.getElementById('feedbackForm');
    const alertBox = document.getElementById('formAlert');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const subject = document.getElementById('fbSubject').value.trim();
            const category = document.getElementById('fbCategory').value;
            const message = document.getElementById('fbMessage').value.trim();

            if (!subject || !category || !message || selectedRating === 0) {
                showAlert('Please fill in all fields and provide a rating.', 'error');
                return;
            }

            // Simulate successful submission (no backend)
            showAlert('Thank you! Your feedback has been received.', 'success');
            feedbackForm.reset();
            selectedRating = 0;
            updateStars(0);
            
            // Log the feedback data for debugging (optional)
            console.log('Feedback submitted:', {
                subject,
                category,
                rating: selectedRating,
                message,
                timestamp: new Date().toISOString()
            });
        });
    }

    function showAlert(message, type) {
        if (!alertBox) return;
        alertBox.textContent = message;
        alertBox.className = `alert-box ${type}`;
        alertBox.style.display = 'block';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 5000);
    }

    // 9. DASHBOARD NAVIGATION - Smooth redirect to dashboard
    const dashboardLinks = document.querySelectorAll('a[href="/pages/dashboard.html"]');
    dashboardLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Optional: Add a smooth transition or analytics tracking
            console.log('Navigating to dashboard from:', window.location.pathname);
        });
    });

    // 10. SMOOTH SCROLL FOR NAV LINKS (with offset for fixed header)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 11. KEYBOARD ACCESSIBILITY - Close mobile menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});