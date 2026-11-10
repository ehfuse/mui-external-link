/**
 * ExternalLinkWarningDialog.tsx
 *
 * @license MIT
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 */

import { useState, type ReactNode, type CSSProperties } from "react";
import { Dialog, DialogContent, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { highlightDomain } from "../utils";
import DialogHeader from "./DialogHeader";
import DialogFooter from "./DialogFooter";

export interface ExternalLinkWarningDialogProps {
    open: boolean;
    href: string;
    onClose: () => void;
    onConfirm: () => void;
    titleText?: string;
    titleStyle?: CSSProperties;
    showCloseButton?: boolean;
    leftActions?: ReactNode;
}

export default function ExternalLinkWarningDialog({
    open,
    href,
    onClose,
    onConfirm,
    titleText,
    titleStyle,
    showCloseButton,
    leftActions,
}: ExternalLinkWarningDialogProps) {
    const [copied, setCopied] = useState(false);

    /** 웹 주소를 클립보드에 복사하고 잠시 복사 완료 표시를 띄운다. */
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(href);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
        } catch {
            // 클립보드 접근 실패는 무시한다.
        }
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="external-link-dialog-title"
            maxWidth="xs"
            fullWidth
        >
            <DialogHeader
                id="external-link-dialog-title"
                title={titleText || "웹 주소로 연결"}
                onClose={onClose}
                titleStyle={titleStyle}
                showCloseButton={showCloseButton}
            />
            <DialogContent dividers sx={{ fontSize: "14px" }}>
                <div>
                    <div>
                        알 수 없는 웹 주소(URL)로 연결 시 피싱 및 개인 정보 유출
                        등 보안 사고로 이어질 수 있습니다.
                        <br />
                        연결 전에 웹 주소(URL)가 안전한지 다시 한 번 확인해
                        주세요.
                    </div>
                    <div
                        style={{
                            marginTop: "16px",
                            backgroundColor: "#f5f5f5",
                            padding: "12px 12px 12px 24px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        <div
                            style={{
                                flex: 1,
                                minWidth: 0,
                                fontFamily: "monospace",
                                fontSize: "14px",
                                fontWeight: 700,
                                color: "#000",
                                wordBreak: "break-all",
                            }}
                        >
                            {highlightDomain(href)}
                        </div>
                        <Tooltip title={copied ? "복사됨" : "주소 복사"}>
                            <IconButton
                                size="small"
                                onClick={handleCopy}
                                sx={{ flexShrink: 0, alignSelf: "center", color: copied ? "success.main" : "action.active" }}
                                aria-label="웹 주소 복사"
                            >
                                {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </DialogContent>
            <DialogFooter
                onCancel={onClose}
                onConfirm={onConfirm}
                confirmText="연결"
                autoFocus
                leftActions={leftActions}
            />
        </Dialog>
    );
}
