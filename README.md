# Graje - 멀티 웹사이트 플랫폼

GitHub Pages를 사용한 통합 웹사이트 플랫폼입니다.

## 🌐 라이브 사이트
[https://gogocar7982-cyber.github.io/graje](https://gogocar7982-cyber.github.io/graje)

## 📁 프로젝트 구조
```
graje/
├── index.html              # 메인 홈페이지
├── kakao-promo.html        # 카카오톡 오픈채팅방 홍보 페이지
├── clipboard.html          # 클립보드 툴 소개 페이지
├── style.css              # 메인 스타일시트
├── kakao-style.css        # 카톡 홍보 페이지 스타일
├── clipboard-style.css    # 클립보드 페이지 스타일
├── script.js              # 메인 JavaScript
├── kakao-script.js        # 카톡 페이지 JavaScript
├── clipboard-script.js    # 클립보드 페이지 JavaScript
└── README.md              # 프로젝트 설명서
```

## 🎯 포함된 페이지들

### 1. 메인 홈페이지 (index.html)
- Graje 소개 및 서비스 안내
- 다른 페이지들로의 네비게이션

### 2. 카카오톡 오픈채팅방 홍보 페이지 (kakao-promo.html)
- 신규 코인 상장 실시간 알림방 홍보
- 채팅방 참여 가이드 및 혜택 소개
- 반응형 디자인 및 인터랙티브 요소

### 3. 클립보드 툴 페이지 (clipboard.html)
- ClipBoard Pro 소개 및 다운로드
- 간소화된 설치 가이드 (3단계)
- 사용법 및 작동 원리 설명

## 🚀 GitHub와 연동하는 방법

### 1단계: Git 설치 (Windows)
```bash
# PowerShell에서 실행
winget install Git.Git
```

### 2단계: Git 초기 설정
```bash
# 사용자 정보 설정
git config --global user.name "당신의 이름"
git config --global user.email "당신의 이메일"
```

### 3단계: 로컬 저장소 초기화
```bash
# 프로젝트 폴더에서 실행
git init
git add .
git commit -m "첫 번째 커밋: 웹사이트 초기 버전"
```

### 4단계: GitHub 저장소와 연결
```bash
# GitHub 저장소와 연결
git remote add origin https://github.com/gogocar7982-cyber/graje.git
git branch -M main
git push -u origin main
```

### 5단계: GitHub Pages 설정
1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source**를 "Deploy from a branch"로 설정
5. **Branch**를 "main"으로 선택
6. **Save** 클릭

## 🔧 로컬 개발 환경

### 파일 수정 후 업데이트하는 방법
```bash
# 변경사항 확인
git status

# 모든 변경사항 스테이징
git add .

# 커밋 메시지와 함께 저장
git commit -m "설명적인 커밋 메시지"

# GitHub에 업로드
git push origin main
```

### 브라우저에서 로컬 테스트
1. `index.html` 파일을 더블클릭하여 브라우저에서 열기
2. 또는 Live Server 확장프로그램 사용 (VS Code)

## 🎨 커스터마이징 가이드

### 색상 변경
각 페이지별로 다른 테마 색상을 사용합니다:
- **메인**: `#4a90e2` (파란색)
- **카톡 홍보**: `#FFE066`, `#FF6B35` (노란색-주황색)
- **클립보드**: `#4facfe`, `#00f2fe` (청록색)

### 콘텐츠 수정
각 HTML 파일에서 해당 페이지의 내용을 수정할 수 있습니다.

### 기능 추가
각 페이지별 JavaScript 파일에서 추가 기능을 구현할 수 있습니다.

## 📱 반응형 디자인
모든 페이지가 다음 기기들에서 최적화되어 작동합니다:
- 데스크톱 (1200px+)
- 태블릿 (768px - 1199px)
- 모바일 (767px 이하)

## 🛠️ 사용된 기술
- **HTML5**: 웹페이지 구조
- **CSS3**: 스타일링 및 애니메이션
- **JavaScript**: 인터랙티브 기능
- **GitHub Pages**: 호스팅

## 📞 지원

문제가 발생하거나 질문이 있으시면:
1. GitHub Issues 탭에서 새 이슈 생성
2. 이메일: contact@graje.com

## 📄 라이선스
이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**즐거운 웹 개발 되세요! 🎉**
