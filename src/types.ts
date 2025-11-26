/**
 * types.ts
 *
 * @license MIT
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 */

import type { ReactElement } from "react";

/**
 * ExternalLink 컴포넌트의 Props
 */
export interface ExternalLinkProps {
    /** 링크 URL */
    href: string;
    /** 링크 제목 (툴팁에 표시됨) */
    title?: string;
    /** 링크 내부 콘텐츠 */
    children: ReactElement | string;
    /** 추가 CSS 클래스 */
    className?: string;
    /**
     * 링크 열기 모드
     * - "dialog": Dialog 내부에 iframe으로 표시
     * - "popup": 새 팝업 창으로 열기
     * - undefined: 기본 동작 (외부 링크 시 확인 대화상자)
     */
    openMode?: "dialog" | "popup";
    /** 팝업/다이얼로그 너비 (픽셀) */
    width?: number;
    /** 팝업/다이얼로그 높이 (픽셀) */
    height?: number;
}

/**
 * useBreakpoint 훅의 반환 타입
 */
export interface BreakpointState {
    /** 현재 뷰포트 너비 */
    width: number;
    /** 브레이크포인트 상태 */
    breakpoint: {
        xs: boolean;
        sm: boolean;
        md: boolean;
        lg: boolean;
        xl: boolean;
    };
}
