/**
 * DialogHeader.tsx
 *
 * @license MIT
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 */

import type { CSSProperties } from "react";
import { DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export interface DialogHeaderProps {
    id?: string;
    title: string;
    onClose: () => void;
    titleStyle?: CSSProperties; // 타이틀 CSS 스타일
    showCloseButton?: boolean; // X 아이콘 버튼 표시 여부 (기본값: true)
}

export default function DialogHeader({
    id,
    title,
    onClose,
    titleStyle,
    showCloseButton = true,
}: DialogHeaderProps) {
    return (
        <DialogTitle
            id={id}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                pr: 2,
            }}
            style={titleStyle}
        >
            {title}
            {showCloseButton && (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{ color: "grey.500", marginRight: "-0.3rem" }}
                >
                    <CloseIcon />
                </IconButton>
            )}
        </DialogTitle>
    );
}
