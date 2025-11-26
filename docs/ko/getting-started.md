# 시작하기

외부 링크 클릭 시 보안 경고 다이얼로그를 표시하는 MUI 기반 React 컴포넌트입니다.

## 설치

```bash
npm install @ehfuse/mui-external-link
```

### Peer Dependencies

이 패키지는 다음 패키지에 의존합니다:

-   `react` >= 18.0.0
-   `react-dom` >= 18.0.0
-   `@mui/material` >= 5.0.0
-   `@mui/icons-material` >= 5.0.0
-   `@emotion/react` >= 11.0.0
-   `@emotion/styled` >= 11.0.0

## 기본 사용법

```tsx
import { ExternalLink } from "@ehfuse/mui-external-link";

function App() {
    return <ExternalLink href="https://github.com">GitHub로 이동</ExternalLink>;
}
```

외부 도메인 링크 클릭 시 자동으로 보안 경고 다이얼로그가 표시됩니다.

## 주요 기능

### 1. 자동 외부 링크 감지

현재 도메인과 다른 외부 링크 클릭 시 자동으로 경고 다이얼로그를 표시합니다.

### 2. 신뢰할 수 있는 링크

`trusted` prop을 사용하면 경고창 없이 바로 이동합니다.

```tsx
<ExternalLink href="https://google.com" trusted>
    Google로 이동
</ExternalLink>
```

### 3. 다이얼로그 모드

`openMode="dialog"`를 사용하면 iframe으로 페이지를 표시합니다.

```tsx
<ExternalLink href="https://example.com" openMode="dialog">
    다이얼로그로 열기
</ExternalLink>
```

### 4. 팝업 모드

`openMode="popup"`을 사용하면 새 팝업 창으로 열립니다.

```tsx
<ExternalLink
    href="https://example.com"
    openMode="popup"
    width={800}
    height={600}
>
    팝업으로 열기
</ExternalLink>
```

---

## 관련 문서

-   [API 레퍼런스](./api.md)
-   [예제](./examples.md)
