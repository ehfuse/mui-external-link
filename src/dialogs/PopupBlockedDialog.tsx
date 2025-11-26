/**
 * PopupBlockedDialog.tsx
 *
 * @license MIT
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 */

import type { ReactNode, CSSProperties } from "react";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import DialogHeader from "./DialogHeader";
import DialogFooter from "./DialogFooter";

export interface PopupBlockedDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    titleText?: string;
    titleStyle?: CSSProperties;
    showCloseButton?: boolean;
    leftActions?: ReactNode;
}

export default function PopupBlockedDialog({
    open,
    onClose,
    onConfirm,
    titleText,
    titleStyle,
    showCloseButton,
    leftActions,
}: PopupBlockedDialogProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="popup-blocked-dialog"
            maxWidth="xs"
        >
            <DialogHeader
                id="popup-blocked-dialog-title"
                title={titleText || "팝업 차단됨"}
                onClose={onClose}
                titleStyle={titleStyle}
                showCloseButton={showCloseButton}
            />
            <DialogContent>
                <DialogContentText>
                    팝업이 차단되었습니다. 브라우저 설정에서 팝업을 허용하거나
                    새 탭에서 열기를 선택해주세요.
                </DialogContentText>
            </DialogContent>
            <DialogFooter
                onCancel={onClose}
                onConfirm={onConfirm}
                confirmText="새 탭에서 열기"
                leftActions={leftActions}
            />
        </Dialog>
    );
}
