# @ehfuse/mui-external-link

외부 링크 클릭 시 보안 경고 다이얼로그를 표시하는 MUI 기반 React 컴포넌트입니다.

## 설치

```bash
npm install @ehfuse/mui-external-link
```

## 시그니처

```tsx
interface ExternalLinkProps {
    href: string; // 링크 URL
    title?: string; // 툴팁 텍스트
    children: ReactElement | string; // 링크 내부 콘텐츠
    className?: string; // 추가 CSS 클래스
    openMode?: "dialog" | "popup"; // 링크 열기 모드
    width?: number; // 팝업/다이얼로그 너비 (픽셀)
    height?: number; // 팝업/다이얼로그 높이 (픽셀)
    dialog?: DialogOptions; // 다이얼로그 커스터마이징 옵션
    trusted?: boolean; // 신뢰할 수 있는 링크 (경고창 없이 바로 이동)
}

interface DialogOptions {
    titleText?: string; // 다이얼로그 타이틀 텍스트
    titleStyle?: CSSProperties; // 타이틀 CSS 스타일
    showCloseButton?: boolean; // X 아이콘 버튼 표시 여부 (기본값: true)
    leftActions?: ReactNode; // 하단 왼쪽 액션 영역
}
```

## 문서

-   [한국어 문서](./docs/ko/getting-started.md)

## 라이선스

MIT © 김영진 (Kim Young Jin)
