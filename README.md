# 신안스마트팜 하얀솔트 · 홈페이지

2026-09-16에 제작한 하얀솔트 홈페이지 시안을 참고해 만든 **배포용 시범 홈페이지**입니다.

## 포함 내용
- 반응형 HTML/CSS/JavaScript 홈페이지 (서버·DB·패키지 설치 불필요)
- 홈, 회사소개, 스마트팜, 생산공정, 제품소개, 품질관리, B2B·수출, 고객센터
- GitHub → Render Static Site 연동용 `render.yaml`
- 이전 디자인 시안은 `reference/` 폴더에 보관 (배포 제외)

## 로컬에서 확인
`index.html`을 브라우저에서 열어도 됩니다. 로컬 웹서버를 쓰려면:

```bash
python -m http.server 8000
```

브라우저에서 http://localhost:8000 접속

## GitHub 업로드
1. GitHub에서 새 빈 Repository (예: `hayan-salt-website`)를 만듭니다.
2. ZIP을 풀고 **안의 모든 파일**을 저장소 루트에 올립니다. (`render.yaml`이 루트에 있어야 합니다.)
3. 또는 다음 명령을 실행합니다.

```bash
git init
git add .
git commit -m "Initial Hayan Salt website"
git branch -M main
git remote add origin https://github.com/내계정/hayan-salt-website.git
git push -u origin main
```

## Render 배포 (Blueprint)
1. https://dashboard.render.com 에 GitHub 계정을 연결합니다.
2. **New → Blueprint** 선택 후 이 GitHub Repository를 선택합니다.
3. `render.yaml`을 읽어 정적 사이트가 생성됩니다. 배포 완료 후 Render가 제공한 `onrender.com` 주소로 접근합니다.
4. 이후 GitHub에 커밋을 푸시하면 Render가 자동 배포합니다 (자동 배포가 활성화된 경우).

수동 설정 시 **New → Static Site**로 연결하고 아래처럼 입력합니다.
- Build Command: `mkdir -p dist && cp index.html dist/index.html && cp -R assets dist/assets && cp robots.txt dist/robots.txt`
- Publish Directory: `dist`

## 출시 전 꼭 수정
- `assets/app.js` 맨 위 `settings`의 공식 전화번호, 이메일, 상세 주소 (현재 확인되지 않아 미표기)
- 제품 용량·생산공정·인증·품질·허가 등 사실관계와 법적 표시 사항
- 제품 이미지는 실제 촬영본으로 교체 (현재 CSS 일러스트 예시)
- `reference/`의 기존 시안은 참고용이며 실제 사진·표시는 검증 필요
- 고객센터는 복사 기능이며 **실제 발송/수신 기능이 아닙니다.** 작동하는 문의폼을 원하면 별도 백엔드나 폼 서비스 필요
- robots.txt, 개인정보처리방침, 사업자정보 등 실제 서비스에 필요한 항목

## 데이터 수정
- 브랜드 설정: `assets/app.js`의 `settings`
- 제품 구성: `products` 배열
- 메뉴와 페이지 내용: `nav`, `pages`, `simple()`
- 디자인: `assets/style.css`


## V2 이미지 파일 교체
`IMAGE_GUIDE.md` 참고. 로고/메인 슬라이드/회사소개/제품 이미지는 `images/` 폴더에서 로드합니다.


## V3 변경 사항 (Render)

- `render.yaml`의 서비스 이름을 `white-salt`로 변경했습니다.
- `buildCommand`가 `images/` 폴더까지 `dist/images/`에 복사합니다.
- 메인 슬라이드 3장, 제품 이미지 4장, 회사소개 이미지, 투명 배경 로고를 `images/`에서 로드합니다.
- GitHub 저장소 루트에 압축을 푼 **내용 전체**를 업로드하세요. 폴더 `White_salt_V3` 자체를 업로드하면 안 됩니다.
- 이미 존재하는 Render 서비스는 이름 변경만으로 기존 `onrender.com` 주소가 바뀌지 않습니다. 새 서비스로 생성할 경우에도 `white-salt` 주소 사용 가능 여부에 따라 달라집니다. 기존 서비스 삭제 전 새 배포를 확인하세요.
