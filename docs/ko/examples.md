# 예제

## 목차

-   [기본 사용법](#기본-사용법)
-   [툴팁 표시](#툴팁-표시)
-   [신뢰할 수 있는 링크](#신뢰할-수-있는-링크)
-   [다이얼로그 모드](#다이얼로그-모드)
-   [팝업 모드](#팝업-모드)
-   [커스텀 타이틀](#커스텀-타이틀)
-   [커스텀 타이틀 스타일](#커스텀-타이틀-스타일)
-   [X 버튼 숨기기](#x-버튼-숨기기)
-   [왼쪽 액션 버튼](#왼쪽-액션-버튼)

---

## 기본 사용법

외부 링크 클릭 시 보안 경고 다이얼로그가 표시됩니다.

```tsx
import { ExternalLink } from "@ehfuse/mui-external-link";

<ExternalLink href="https://github.com">GitHub로 이동</ExternalLink>;
```

---

## 툴팁 표시

`title` prop을 사용하면 링크에 마우스를 올렸을 때 툴팁이 표시됩니다.

```tsx
<ExternalLink href="https://google.com" title="Google 검색 엔진입니다">
    Google로 이동
</ExternalLink>
```

---

## 신뢰할 수 있는 링크

`trusted` prop을 사용하면 경고창 없이 바로 새 탭에서 열립니다.

```tsx
<ExternalLink href="https://google.com" trusted>
    Google로 이동 (경고창 없음)
</ExternalLink>
```

---

## 다이얼로그 모드

`openMode="dialog"`를 사용하면 페이지를 다이얼로그 내부 iframe에서 표시합니다.

```tsx
<ExternalLink
    href="https://example.com"
    openMode="dialog"
    width={800}
    height={600}
>
    다이얼로그로 열기
</ExternalLink>
```

---

## 팝업 모드

`openMode="popup"`을 사용하면 새 팝업 창으로 열립니다.

```tsx
<ExternalLink
    href="https://example.com"
    openMode="popup"
    width={1000}
    height={850}
>
    팝업으로 열기
</ExternalLink>
```

---

## 커스텀 타이틀

`dialog.titleText`를 사용하여 다이얼로그 타이틀을 변경할 수 있습니다.

```tsx
<ExternalLink
    href="https://kakao.com"
    dialog={{
        titleText: "카카오로 이동합니다",
    }}
>
    카카오로 이동
</ExternalLink>
```

---

## 커스텀 타이틀 스타일

`dialog.titleStyle`를 사용하여 타이틀 스타일을 변경할 수 있습니다.

```tsx
<ExternalLink
    href="https://daum.net"
    dialog={{
        titleText: "⚠️ 외부 사이트 이동",
        titleStyle: {
            color: "#d32f2f",
            fontWeight: "bold",
        },
    }}
>
    다음으로 이동 (빨간색 굵은 타이틀)
</ExternalLink>
```

---

## X 버튼 숨기기

`dialog.showCloseButton`을 `false`로 설정하면 X 버튼이 숨겨집니다.

```tsx
<ExternalLink
    href="https://tistory.com"
    dialog={{
        showCloseButton: false,
    }}
>
    티스토리로 이동 (X 버튼 없음)
</ExternalLink>
```

---

## 왼쪽 액션 버튼

`dialog.leftActions`를 사용하여 다이얼로그 하단 왼쪽에 버튼이나 체크박스를 추가할 수 있습니다.

```tsx
import { Button } from "@mui/material";

<ExternalLink
    href="https://naver.com"
    dialog={{
        leftActions: (
            <Button size="small" onClick={() => alert("도움말 클릭!")}>
                도움말
            </Button>
        ),
    }}
>
    네이버로 이동 (왼쪽 도움말 버튼)
</ExternalLink>;
```

---

## 관련 문서

-   [시작하기](./getting-started.md)
-   [API 레퍼런스](./api.md)
