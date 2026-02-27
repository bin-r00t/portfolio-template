        // Translation object
        const translations = {
          en: {
            'nav.about': 'About',
            'nav.experience': 'Experience',
            'nav.achievements': 'Achievements',
            'nav.investments': 'Investments',
            'nav.contact': 'Contact',
            'hero.name': 'David Chen',
            'hero.title': 'Technology Visionary • AI Investor • Strategic Advisor',
            'hero.email': '✉️ david.chen@example.com',
            'hero.location': '📍 San Francisco',
            'hero.investor': '💰 Angel Investor',
            'hero.advisor': '🎯 Board Advisor',
            'hero.author': '📝 Bestselling Author',
            'stats.years': 'Years Experience',
            'stats.companies': 'Companies Invested',
            'stats.portfolio': 'Portfolio Value',
            'stats.exits': 'Exits',
            'about.title': 'About Me',
            'about.subtitle': 'Passionate about leveraging technology to create transformative change',
            'about.p1': "I'm a technology entrepreneur and angel investor with over 15 years of experience building and scaling innovative companies. My journey spans from engineering leadership to strategic investing, with a focus on artificial intelligence, machine learning, and enterprise technology.",
            'about.p2': "Currently, I serve as Managing Partner at Horizon Ventures, where I lead investments in early-stage AI and deep tech startups. I'm also an active advisor to several Fortune 500 companies on their digital transformation strategies.",
            'about.p3': "I believe in the power of technology to solve humanity's biggest challenges and am committed to supporting founders who share this vision.",
            'skills.ai': 'Artificial Intelligence',
            'skills.cloud': 'Cloud Architecture',
            'skills.vc': 'Venture Capital',
            'skills.product': 'Product Strategy',
            'skills.leadership': 'Executive Leadership',
            'skills.security': 'Enterprise Security',
            'experience.title': 'Experience',
            'experience.subtitle': 'A journey of innovation and leadership',
            'achievements.title': 'Achievements & Recognition',
            'achievements.subtitle': 'Making a lasting impact in technology and society',
            'investments.title': 'Investment Focus',
            'investments.subtitle': 'Where I see the future of technology',
            'contact.title': "Let's Connect",
            'contact.subtitle': 'Open to discussing investments, partnerships, and speaking opportunities',
            'contact.email': 'Email Me',
            'contact.linkedin': 'LinkedIn',
            'contact.twitter': 'Twitter',
            'footer.copyright': '© 2025 David Chen. All rights reserved.'
          },
          zh: {
            'nav.about': '关于我',
            'nav.experience': '工作经历',
            'nav.achievements': '成就荣誉',
            'nav.investments': '投资领域',
            'nav.contact': '联系方式',
            'hero.name': '陈大卫',
            'hero.title': '技术远见者 • AI投资人 • 战略顾问',
            'hero.email': '✉️ david.chen@example.com',
            'hero.location': '📍 旧金山',
            'hero.investor': '💰 天使投资人',
            'hero.advisor': '🎯 董事会顾问',
            'hero.author': '📝 畅销书作者',
            'stats.years': '工作年限',
            'stats.companies': '投资公司',
            'stats.portfolio': '投资组合',
            'stats.exits': '退出案例',
            'about.title': '关于我',
            'about.subtitle': '热衷于利用技术创造变革性影响',
            'about.p1': '我是一名技术创业者和天使投资人，拥有超过15年的创新公司建设和扩展经验。我的职业生涯涵盖工程领导到战略投资，专注于人工智能、机器学习和企业技术领域。',
            'about.p2': '目前，我担任Horizon Ventures的合伙人，负责AI和深科技早期初创企业的投资。我也是多家财富500强公司的数字化转型战略顾问。',
            'about.p3': '我相信技术的力量可以解决人类最大的挑战，并致力于支持拥有这一愿景的创业者。',
            'skills.ai': '人工智能',
            'skills.cloud': '云架构',
            'skills.vc': '风险投资',
            'skills.product': '产品战略',
            'skills.leadership': '高管领导力',
            'skills.security': '企业安全',
            'experience.title': '工作经历',
            'experience.subtitle': '创新与领导之旅',
            'achievements.title': '成就与荣誉',
            'achievements.subtitle': '在技术和社会领域产生持久影响',
            'investments.title': '投资重点',
            'investments.subtitle': '我看好的技术未来',
            'contact.title': '联系我',
            'contact.subtitle': '欢迎讨论投资、合作和演讲机会',
            'contact.email': '发送邮件',
            'contact.linkedin': '领英',
            'contact.twitter': '推特',
            'footer.copyright': '© 2025 陈大卫 版权所有'
          }
        };

        // Theme Management
        const ThemeManager = {
          init() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            this.setTheme(savedTheme);

            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
              themeToggle.addEventListener('click', () => this.toggle());
            }
          },

          toggle() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
          },

          setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
          }
        };

        // Language Management
        const LanguageManager = {
          currentLang: 'en',

          init() {
            const savedLang = localStorage.getItem('language') || 'en';
            this.setLanguage(savedLang);

            const langToggle = document.getElementById('langToggle');
            if (langToggle) {
              langToggle.addEventListener('click', () => this.toggle());
            }
          },

          toggle() {
            const newLang = this.currentLang === 'en' ? 'zh' : 'en';
            this.setLanguage(newLang);
          },

          setLanguage(lang) {
            this.currentLang = lang;
            localStorage.setItem('language', lang);
            document.documentElement.setAttribute('lang', lang);

            document.querySelectorAll('[data-i18n]').forEach(el => {
              const key = el.getAttribute('data-i18n');
              const translation = translations[lang][key];

              if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                  el.placeholder = translation;
                } else {
                  el.textContent = translation;
                }
              }
            });

            const langToggle = document.getElementById('langToggle');
            if (langToggle) {
              const langText = langToggle.querySelector('.lang-text');
              if (langText) {
                langText.textContent = lang === 'en' ? 'EN' : '中';
              }
            }
          },

          get(key) {
            return translations[this.currentLang][key] || key;
          }
        };

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
            // Initialize theme and language
            ThemeManager.init();
            LanguageManager.init();

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
