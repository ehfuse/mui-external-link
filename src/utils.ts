/**
 * utils.ts
 *
 * @license MIT
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 */

import React from "react";

/**
 * URL에서 도메인 부분을 하이라이트하여 반환
 * @param url - 하이라이트할 URL
 * @returns 도메인이 강조된 React 요소
 */
export function highlightDomain(url: string): React.ReactNode {
    try {
        const urlObj = new URL(url);
        const protocol = urlObj.protocol + "//";
        const domain = urlObj.hostname;
        const rest = url.substring(protocol.length + domain.length);

        return React.createElement(
            "span",
            null,
            protocol,
            React.createElement(
                "span",
                { style: { fontWeight: "bold", color: "#1976d2" } },
                domain
            ),
            rest
        );
    } catch {
        return url;
    }
}
