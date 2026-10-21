# White_salt V4 (GitHub + Render)

- `index.html` 기존 홈페이지
- `editor.html` 각 페이지별 이미지/텍스트 레이아웃 편집기
- `data/pages.json` 페이지별 섹션 설정 및 본문 텍스트 관리
- `images/` 교체 가능한 이미지 (스틱 상품 및 SNS 이미지 포함)
- `favicon.ico` 로고 심볼 파비콘
- `render.yaml` Render Blueprint 정적 사이트 설정

## 편집 방법
1. 배포 후 `/editor.html` 접속 또는 파일을 로컬 웹서버로 열기.
2. 상단에서 페이지 선택 → 섹션 추가 → 섹션별 레이아웃(좌/우/가로/카드/텍스트) 선택.
3. 문구와 `images/이미지명.jpg` 경로 입력.
4. `pages.json 다운로드` 클릭.
5. GitHub 저장소의 `data/pages.json`을 새 파일로 교체하고 필요한 이미지를 `images/`에 업로드.
6. GitHub 커밋 후 Render 자동 배포.

**정적 사이트의 관리자 편집 화면은 GitHub 파일을 직접 수정하지 않습니다.** 기존 홈페이지 기본 본문은 유지되며, `data/pages.json` 섹션이 각 페이지 아래에 덧붙습니다.
편집기에는 인증 기능이 없으므로 공개 배포 시 누구나 화면을 열어 로컬 편집/다운로드할 수 있으나 서버 변경은 할 수 없습니다.


### V5 favicon / SNS 수정
`render.yaml`에서 최상위 파비콘 파일을 모두 복사하고, `index.html`에서 SNS 이미지 절대 주소 및 버전 쿼리를 사용합니다. 기존 GitHub 파일과 폴더를 V5로 교체하십시오.
