/**
 * useBreakpoint.ts
 *
 * @license MIT
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 */

import { useState, useEffect } from "react";
import type { BreakpointState } from "../types";

// MUI 기본 브레이크포인트 값
const BREAKPOINTS = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
};

/**
 * 뷰포트 크기에 따른 브레이크포인트 상태를 반환하는 훅
 */
export function useBreakpoint(): BreakpointState {
    const [width, setWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1200
    );

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        width,
        breakpoint: {
            xs: width < BREAKPOINTS.sm,
            sm: width >= BREAKPOINTS.sm && width < BREAKPOINTS.md,
            md: width < BREAKPOINTS.md,
            lg: width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl,
            xl: width >= BREAKPOINTS.xl,
        },
    };
}
