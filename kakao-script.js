// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 부드러운 스크롤 네비게이션
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 스크롤 함수
    window.scrollToSection = function(sectionId) {
        const targetSection = document.querySelector('#' + sectionId);
        if (targetSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };
    
    // 스크롤 시 헤더 스타일 변경
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }
    });
    
    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // 애니메이션 대상 요소들
    const animateElements = document.querySelectorAll('.feature-card, .benefit-item');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = `all 0.8s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // 카운터 애니메이션
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                if (target === 1000) {
                    element.textContent = Math.floor(start) + '+';
                } else {
                    element.textContent = Math.floor(start) + '%';
                }
                requestAnimationFrame(updateCounter);
            } else {
                if (target === 1000) {
                    element.textContent = '1000+';
                } else {
                    element.textContent = target + '%';
                }
            }
        }
        
        updateCounter();
    }
    
    // 통계 카운터 애니메이션
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = document.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    if (text.includes('1000')) {
                        animateCounter(stat, 1000);
                    } else if (text.includes('100')) {
                        animateCounter(stat, 100);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
    
    // 채팅 메시지 애니메이션
    function animateChatMessages() {
        const messages = document.querySelectorAll('.message');
        messages.forEach((message, index) => {
            setTimeout(() => {
                message.style.opacity = '0';
                message.style.transform = 'translateX(50px)';
                message.style.transition = 'all 0.5s ease';
                
                setTimeout(() => {
                    message.style.opacity = '1';
                    message.style.transform = 'translateX(0)';
                }, 100);
            }, index * 800);
        });
    }
    
    // 폰 목업이 보이면 채팅 애니메이션 시작
    const phoneObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateChatMessages, 1000);
                phoneObserver.unobserve(entry.target);
            }
        });
    });
    
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        phoneObserver.observe(phoneMockup);
    }
    
    // 참여 버튼 클릭 추적
    const joinButtons = document.querySelectorAll('.join-button, .main-join-button');
    joinButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 클릭 효과
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // 간단한 클릭 추적 (실제 서비스에서는 GA 등 사용)
            console.log('카카오톡 참여 버튼 클릭됨');
        });
    });
    
    // 페이지 로드 완료 로그
    console.log('🚀 카카오톡 오픈채팅 홍보 페이지가 로드되었습니다!');
    
    // 동적 배경 효과 (선택사항)
    function createFloatingElements() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        for (let i = 0; i < 5; i++) {
            const element = document.createElement('div');
            element.style.position = 'absolute';
            element.style.width = Math.random() * 100 + 50 + 'px';
            element.style.height = element.style.width;
            element.style.background = 'rgba(255, 255, 255, 0.1)';
            element.style.borderRadius = '50%';
            element.style.left = Math.random() * 100 + '%';
            element.style.top = Math.random() * 100 + '%';
            element.style.animation = `float ${3 + Math.random() * 2}s ease-in-out infinite`;
            element.style.animationDelay = Math.random() * 2 + 's';
            hero.appendChild(element);
        }
    }
    
    createFloatingElements();
});
