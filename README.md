# Graje - 나의 첫 웹사이트

GitHub Pages를 사용한 개인 웹사이트입니다.

## 🌐 라이브 사이트
[https://gogocar7982-cyber.github.io/graje](https://gogocar7982-cyber.github.io/graje)

## 📁 프로젝트 구조
```
graje/
├── index.html          # 메인 HTML 파일
├── style.css           # CSS 스타일시트
├── script.js           # JavaScript 파일
└── README.md           # 프로젝트 설명서
```

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
`style.css` 파일에서 다음 색상들을 수정할 수 있습니다:
- 주요 색상: `#4a90e2`
- 배경 색상: `#f8f9fa`
- 텍스트 색상: `#333`

### 콘텐츠 수정
`index.html` 파일에서 다음 내용들을 수정할 수 있습니다:
- 제목과 설명
- 서비스 내용
- 연락처 정보

### 기능 추가
`script.js` 파일에서 추가 JavaScript 기능을 구현할 수 있습니다.

## 📱 반응형 디자인
이 웹사이트는 다음 기기들에서 최적화되어 작동합니다:
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
