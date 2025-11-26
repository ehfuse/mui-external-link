/**
 * IframeDialog.tsx
 *
 * @license MIT
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 */

import { Dialog, DialogContent, Button } from "@mui/material";
import { useBreakpoint } from "../hooks/useBreakpoint";
import DialogHeader from "./DialogHeader";
import DialogFooter from "./DialogFooter";

export interface IframeDialogProps {
    open: boolean;
    href: string;
    title?: string;
    width?: number;
    height?: number;
    iframeError: boolean;
    onClose: () => void;
    onIframeError: () => void;
}

export default function IframeDialog({
    open,
    href,
    title,
    width,
    height,
    iframeError,
    onClose,
    onIframeError,
}: IframeDialogProps) {
    const { breakpoint } = useBreakpoint();

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="iframe-dialog-title"
            fullWidth
            fullScreen={breakpoint.md}
            maxWidth="lg"
            sx={{
                "& .MuiDialog-paper": {
                    width: width ? `${width}px` : undefined,
                    maxWidth: width ? `${width}px` : undefined,
                    height: height ? `${height}px` : "80vh",
                },
            }}
        >
            <DialogHeader
                id="iframe-dialog-title"
                title={title || "웹 페이지 보기"}
                onClose={onClose}
            />
            <DialogContent
                dividers
                sx={{
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {iframeError ? (
                    <div style={{ padding: "24px", textAlign: "center" }}>
                        <p style={{ marginBottom: "16px" }}>
                            이 웹사이트는 Dialog에서 표시할 수 없습니다.
                        </p>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                                window.open(
                                    href,
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                        >
                            새 탭에서 열기
                        </Button>
                    </div>
                ) : (
                    <iframe
                        src={href}
                        title={title || "웹 페이지"}
                        style={{
                            border: "none",
                            width: "100%",
                            height: "100%",
                            flexGrow: 1,
                        }}
                        onError={onIframeError}
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                )}
            </DialogContent>
            <DialogFooter
                cancelText="닫기"
                onCancel={onClose}
                onConfirm={() =>
                    window.open(href, "_blank", "noopener,noreferrer")
                }
                confirmText="새 탭에서 열기"
            />
        </Dialog>
    );
}
