/**
 * DialogFooter.tsx
 *
 * @license MIT
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 */

import type { ReactNode } from "react";
import { DialogActions, Button, Box } from "@mui/material";

export interface DialogFooterProps {
    cancelText?: string;
    confirmText?: string;
    onCancel: () => void;
    onConfirm: () => void;
    autoFocus?: boolean;
    /** 왼쪽에 표시할 액션 영역 */
    leftActions?: ReactNode;
}

export default function DialogFooter({
    cancelText = "취소",
    confirmText = "확인",
    onCancel,
    onConfirm,
    autoFocus = false,
    leftActions,
}: DialogFooterProps) {
    return (
        <DialogActions sx={{ p: 2, gap: 1 }}>
            {leftActions && (
                <Box
                    sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
                >
                    {leftActions}
                </Box>
            )}
            <Button onClick={onCancel} color="inherit" variant="outlined">
                {cancelText}
            </Button>
            <Button
                onClick={onConfirm}
                color="primary"
                variant="contained"
                autoFocus={autoFocus}
            >
                {confirmText}
            </Button>
        </DialogActions>
    );
}
