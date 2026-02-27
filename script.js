        // Number counter animation
        function animateCounter(element) {
            const target = parseInt(element.getAttribute('data-target'));
            const prefix = element.getAttribute('data-prefix') || '';
            const suffix = element.getAttribute('data-suffix') || '+';
            const duration = 2000; // 2 seconds
            const start = 0;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const current = Math.floor(start + (target - start) * easeOutQuart);

                element.textContent = prefix + current + suffix;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    // Add animation class when complete
                    element.classList.add('animate');
                }
            }

            requestAnimationFrame(update);
        }

        // Intersection Observer to trigger animation when stats are visible
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statCards = entry.target.querySelectorAll('.stat-card');
                    const statNumbers = entry.target.querySelectorAll('.stat-number');

                    // Animate cards first
                    statCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('show');
                        }, index * 100);
                    });

                    // Then animate numbers
                    statNumbers.forEach((number, index) => {
                        setTimeout(() => {
                            animateCounter(number);
                        }, 400 + index * 150);
                    });

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Start observing when page loads
        document.addEventListener('DOMContentLoaded', () => {
            const statsSection = document.querySelector('.stats');
            if (statsSection) {
                observer.observe(statsSection);
            }

            // Scroll animation for fade-in-up elements
            const fadeObserverOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        fadeObserver.unobserve(entry.target);
                    }
                });
            }, fadeObserverOptions);

            // Observe all fade-in-up elements
            const fadeElements = document.querySelectorAll('.fade-in-up');
            fadeElements.forEach(el => {
                fadeObserver.observe(el);
            });

            // Active navigation link on scroll
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a');
            const header = document.querySelector('header');

            // Add shadow to header on scroll
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Highlight active section in navigation
            window.addEventListener('scroll', () => {
                let current = '';
                const scrollPosition = window.scrollY + 150; // Offset for better activation

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href');
                    if (href === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });

            // Smooth scroll for navigation links
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);

                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 80; // Header offset
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Mobile menu toggle
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileNav = document.getElementById('mobileNav');
            const mobileNavLinks = mobileNav?.querySelectorAll('a');

            if (mobileMenuBtn && mobileNav) {
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenuBtn.classList.toggle('active');
                    mobileNav.classList.toggle('active');
                });

                // Close mobile menu when clicking a link
                mobileNavLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenuBtn.classList.remove('active');
                        mobileNav.classList.remove('active');
                    });
                });

                // Close mobile menu when clicking outside
                document.addEventListener('click', (e) => {
                    if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
                        mobileMenuBtn.classList.remove('active');
                        mobileNav.classList.remove('active');
                    }
                });

                // Smooth scroll for mobile nav links
                mobileNavLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const targetId = link.getAttribute('href');
                        const targetSection = document.querySelector(targetId);

                        if (targetSection) {
                            const offsetTop = targetSection.offsetTop - 80;
                            window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    });
                });

                // Update active state in mobile nav
                window.addEventListener('scroll', () => {
                    let current = '';
                    const scrollPosition = window.scrollY + 150;

                    sections.forEach(section => {
                        const sectionTop = section.offsetTop;
                        const sectionHeight = section.clientHeight;

                        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                            current = section.getAttribute('id');
                        }
                    });

                    mobileNavLinks.forEach(link => {
                        link.classList.remove('active');
                        const href = link.getAttribute('href');
                        if (href === `#${current}`) {
                            link.classList.add('active');
                        }
                    });
                });
            }
        });
