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
    
    // 탭 전환 기능
    window.showTab = function(tabId) {
        // 모든 탭 내용 숨기기
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // 모든 탭 버튼 비활성화
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // 선택된 탭 내용 보이기
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }
        
        // 선택된 탭 버튼 활성화
        const selectedButton = document.querySelector(`[onclick="showTab('${tabId}')"]`);
        if (selectedButton) {
            selectedButton.classList.add('active');
        }
    };
    
    // 다운로드 기능
    window.downloadFile = function() {
        // 실제 파일이 없으므로 알림으로 대체
        alert('📋 ClipBoard Pro 다운로드\n\n현재 데모 페이지입니다.\n실제 파일은 개발 완료 후 제공됩니다.\n\n문의: support@clipboardpro.com');
        
        // 실제 구현 시에는 다음과 같이 사용:
        // const link = document.createElement('a');
        // link.href = 'path/to/ClipBoard_Pro_v1.0.exe';
        // link.download = 'ClipBoard_Pro_v1.0.exe';
        // link.click();
        
        console.log('다운로드 버튼 클릭됨');
    };
    
    // 소스 코드 보기
    window.viewSource = function() {
        alert('📝 소스 코드\n\n소스 코드는 GitHub에서 확인할 수 있습니다.\n\n🔗 https://github.com/your-repo/clipboard-pro');
        console.log('소스 코드 보기 클릭됨');
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
    const animateElements = document.querySelectorAll('.feature-card, .step, .usage-card, .principle-card');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = `all 0.8s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // 데모 윈도우 애니메이션
    function animateDemo() {
        const clipboardItems = document.querySelectorAll('.clipboard-item');
        clipboardItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, (index + 1) * 800);
        });
    }
    
    // 데모 윈도우가 보이면 애니메이션 시작
    const demoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateDemo, 1000);
                demoObserver.unobserve(entry.target);
            }
        });
    });
    
    const demoWindow = document.querySelector('.demo-window');
    if (demoWindow) {
        demoObserver.observe(demoWindow);
    }
    
    // 타이핑 효과
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // 타이핑 텍스트 애니메이션
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const messages = [
            '클립보드 내용 자동 감지중...',
            '새로운 텍스트가 복사되었습니다.',
            '자동 처리 규칙을 적용중...',
            '히스토리에 저장 완료!'
        ];
        
        let messageIndex = 0;
        
        function cycleMessages() {
            typeWriter(typingText, messages[messageIndex], 80);
            messageIndex = (messageIndex + 1) % messages.length;
        }
        
        // 처음 메시지 표시
        setTimeout(cycleMessages, 2000);
        
        // 5초마다 메시지 변경
        setInterval(cycleMessages, 5000);
    }
    
    // 통계 카운터 애니메이션
    function animateCounter(element, target, suffix = '', duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + suffix;
            }
        }
        
        updateCounter();
    }
    
    // 통계 섹션 애니메이션
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = document.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    if (text.includes('100')) {
                        animateCounter(stat, 100, '%');
                    } else if (text.includes('50')) {
                        animateCounter(stat, 50, 'KB');
                    }
                    // Win10+는 텍스트이므로 애니메이션 없음
                });
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
    
    // 코드 블록 복사 기능
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        block.style.position = 'relative';
        block.style.cursor = 'pointer';
        
        const copyButton = document.createElement('button');
        copyButton.textContent = '📋 복사';
        copyButton.style.position = 'absolute';
        copyButton.style.top = '10px';
        copyButton.style.right = '10px';
        copyButton.style.background = 'rgba(79, 172, 254, 0.8)';
        copyButton.style.color = 'white';
        copyButton.style.border = 'none';
        copyButton.style.padding = '5px 10px';
        copyButton.style.borderRadius = '5px';
        copyButton.style.fontSize = '0.8rem';
        copyButton.style.cursor = 'pointer';
        copyButton.style.opacity = '0';
        copyButton.style.transition = 'opacity 0.3s ease';
        
        block.appendChild(copyButton);
        
        block.addEventListener('mouseenter', () => {
            copyButton.style.opacity = '1';
        });
        
        block.addEventListener('mouseleave', () => {
            copyButton.style.opacity = '0';
        });
        
        copyButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const text = block.textContent.replace('📋 복사', '').trim();
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    copyButton.textContent = '✅ 복사됨';
                    setTimeout(() => {
                        copyButton.textContent = '📋 복사';
                    }, 2000);
                });
            } else {
                // 폴백 방법
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                copyButton.textContent = '✅ 복사됨';
                setTimeout(() => {
                    copyButton.textContent = '📋 복사';
                }, 2000);
            }
        });
    });
    
    // 버튼 클릭 효과
    const buttons = document.querySelectorAll('button, .download-button, .demo-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // 동적 배경 효과
    function createParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 6 + 4 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = 'rgba(79, 172, 254, 0.3)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${4 + Math.random() * 4}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 4 + 's';
            particle.style.zIndex = '1';
            hero.appendChild(particle);
        }
    }
    
    createParticles();
    
    // 페이지 로드 완료 로그
    console.log('📋 ClipBoard Pro 페이지가 로드되었습니다!');
    
    // 개발자 콘솔 메시지
    console.log('%c📋 ClipBoard Pro', 'color: #4facfe; font-size: 20px; font-weight: bold;');
    console.log('%c클립보드 자동화의 새로운 경험을 시작하세요!', 'color: #666; font-size: 14px;');
});
