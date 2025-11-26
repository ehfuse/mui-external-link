/**
 * types.ts
 *
 * @license MIT
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 */

import type { ReactElement, ReactNode, CSSProperties } from "react";

/**
 * 다이얼로그 커스터마이징 옵션
 */
export interface DialogOptions {
    titleText?: string; // 다이얼로그 타이틀 텍스트
    titleStyle?: CSSProperties; // 타이틀 CSS 스타일
    showCloseButton?: boolean; // X 아이콘 버튼 표시 여부 (기본값: true)
    leftActions?: ReactNode; // 하단 왼쪽 액션 영역 (예: 체크박스, 링크 등)
}

/**
 * ExternalLink 컴포넌트의 Props
 */
export interface ExternalLinkProps {
    href: string; // 링크 URL
    title?: string; // 툴팁 텍스트
    children: ReactElement | string; // 링크 내부 콘텐츠
    className?: string; // 추가 CSS 클래스
    openMode?: "dialog" | "popup"; // 링크 열기 모드: "dialog" | "popup" | undefined(기본)
    width?: number; // 팝업/다이얼로그 너비 (픽셀)
    height?: number; // 팝업/다이얼로그 높이 (픽셀)
    dialog?: DialogOptions; // 다이얼로그 커스터마이징 옵션
    trusted?: boolean; // 신뢰할 수 있는 링크 (경고창 없이 바로 이동)
}

/**
 * useBreakpoint 훅의 반환 타입
 */
export interface BreakpointState {
    width: number; // 현재 뷰포트 너비
    breakpoint: {
        xs: boolean;
        sm: boolean;
        md: boolean;
        lg: boolean;
        xl: boolean;
    };
}
