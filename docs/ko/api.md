# API 레퍼런스

## 목차

-   [ExternalLinkProps](#externallinkprops)
-   [DialogOptions](#dialogoptions)

---

## ExternalLinkProps

`ExternalLink` 컴포넌트의 Props입니다.

| Prop                    | 타입                     | 기본값  | 설명                                        |
| ----------------------- | ------------------------ | ------- | ------------------------------------------- |
| [href](#href)           | `string`                 | (필수)  | 링크 URL                                    |
| [title](#title)         | `string`                 | -       | 툴팁 텍스트                                 |
| [children](#children)   | `ReactElement \| string` | (필수)  | 링크 내부 콘텐츠                            |
| [className](#classname) | `string`                 | `""`    | 추가 CSS 클래스                             |
| [openMode](#openmode)   | `"dialog" \| "popup"`    | -       | 링크 열기 모드                              |
| [width](#width)         | `number`                 | `1000`  | 팝업/다이얼로그 너비 (픽셀)                 |
| [height](#height)       | `number`                 | `850`   | 팝업/다이얼로그 높이 (픽셀)                 |
| [dialog](#dialog)       | `DialogOptions`          | -       | 다이얼로그 커스터마이징 옵션                |
| [trusted](#trusted)     | `boolean`                | `false` | 신뢰할 수 있는 링크 (경고창 없이 바로 이동) |

---

### href

링크 URL입니다.

```tsx
<ExternalLink href="https://github.com">GitHub</ExternalLink>
```

### title

툴팁 텍스트입니다. 링크에 마우스를 올리면 툴팁이 표시됩니다.

```tsx
<ExternalLink href="https://github.com" title="GitHub 홈페이지">
    GitHub
</ExternalLink>
```

### children

링크 내부에 표시될 콘텐츠입니다. 문자열 또는 React 엘리먼트를 사용할 수 있습니다.

```tsx
// 문자열
<ExternalLink href="https://github.com">GitHub</ExternalLink>

// React 엘리먼트
<ExternalLink href="https://github.com">
    <GitHubIcon /> GitHub
</ExternalLink>
```

### className

추가 CSS 클래스입니다.

```tsx
<ExternalLink href="https://github.com" className="my-link">
    GitHub
</ExternalLink>
```

### openMode

링크 열기 모드입니다.

| 값          | 설명                                          |
| ----------- | --------------------------------------------- |
| `undefined` | 기본 동작 (외부 링크 시 경고 다이얼로그 표시) |
| `"dialog"`  | 다이얼로그 내부에 iframe으로 페이지 표시      |
| `"popup"`   | 새 팝업 창으로 열기                           |

```tsx
// 다이얼로그 모드
<ExternalLink href="https://example.com" openMode="dialog">
    다이얼로그로 열기
</ExternalLink>

// 팝업 모드
<ExternalLink href="https://example.com" openMode="popup">
    팝업으로 열기
</ExternalLink>
```

### width

팝업 또는 다이얼로그의 너비입니다 (픽셀 단위).

```tsx
<ExternalLink href="https://example.com" openMode="popup" width={800}>
    팝업으로 열기
</ExternalLink>
```

### height

팝업 또는 다이얼로그의 높이입니다 (픽셀 단위).

```tsx
<ExternalLink href="https://example.com" openMode="popup" height={600}>
    팝업으로 열기
</ExternalLink>
```

### dialog

다이얼로그 커스터마이징 옵션입니다. [DialogOptions](#dialogoptions)를 참조하세요.

```tsx
<ExternalLink
    href="https://example.com"
    dialog={{
        titleText: "외부 사이트 이동",
        showCloseButton: false,
    }}
>
    링크
</ExternalLink>
```

### trusted

`true`로 설정하면 경고창 없이 바로 새 탭에서 열립니다.

```tsx
<ExternalLink href="https://google.com" trusted>
    Google로 이동
</ExternalLink>
```

---

## DialogOptions

다이얼로그 커스터마이징 옵션입니다.

| Prop                                | 타입            | 기본값             | 설명                     |
| ----------------------------------- | --------------- | ------------------ | ------------------------ |
| [titleText](#titletext)             | `string`        | `"웹 주소로 연결"` | 다이얼로그 타이틀 텍스트 |
| [titleStyle](#titlestyle)           | `CSSProperties` | -                  | 타이틀 CSS 스타일        |
| [showCloseButton](#showclosebutton) | `boolean`       | `true`             | X 아이콘 버튼 표시 여부  |
| [leftActions](#leftactions)         | `ReactNode`     | -                  | 하단 왼쪽 액션 영역      |

---

### titleText

다이얼로그 타이틀 텍스트입니다.

```tsx
<ExternalLink
    href="https://example.com"
    dialog={{ titleText: "외부 사이트로 이동합니다" }}
>
    링크
</ExternalLink>
```

### titleStyle

타이틀에 적용할 CSS 스타일입니다.

```tsx
<ExternalLink
    href="https://example.com"
    dialog={{
        titleText: "⚠️ 주의",
        titleStyle: { color: "#d32f2f", fontWeight: "bold" },
    }}
>
    링크
</ExternalLink>
```

### showCloseButton

X 아이콘 버튼 표시 여부입니다. `false`로 설정하면 닫기 버튼이 숨겨집니다.

```tsx
<ExternalLink href="https://example.com" dialog={{ showCloseButton: false }}>
    링크
</ExternalLink>
```

### leftActions

다이얼로그 하단 왼쪽에 표시할 콘텐츠입니다. 체크박스, 버튼 등을 추가할 수 있습니다.

```tsx
<ExternalLink
    href="https://example.com"
    dialog={{
        leftActions: (
            <Button size="small" onClick={() => alert("도움말")}>
                도움말
            </Button>
        ),
    }}
>
    링크
</ExternalLink>
```

---

## 관련 문서

-   [시작하기](./getting-started.md)
-   [예제](./examples.md)
