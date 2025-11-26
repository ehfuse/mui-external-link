/**
 * ExternalLink.tsx
 *
 * @license MIT
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 * @contact 010-3094-9944
 */

import React, { useState } from "react";
import { Tooltip, styled } from "@mui/material";
import type { TooltipProps } from "@mui/material";
import type { ExternalLinkProps } from "./types";
import {
    PopupBlockedDialog,
    IframeDialog,
    ExternalLinkWarningDialog,
} from "./dialogs";

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
    "& .MuiTooltip-tooltip": {
        backgroundColor: "#000",
        fontSize: "0.875rem",
    },
    "& .MuiTooltip-arrow": {
        color: "#000",
    },
}));

export default function ExternalLink({
    href,
    title,
    children,
    openMode,
    width,
    height,
    className = "",
    dialog,
    trusted = false,
}: ExternalLinkProps) {
    const [open, setOpen] = useState(false);
    const [iframeError, setIframeError] = useState(false);
    const [popupBlocked, setPopupBlocked] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        if (openMode === "popup") {
            const popup_width = width ?? 1000;
            const popup_height = height ?? 850;
            const left = window.screenX + (window.outerWidth - popup_width) / 2;
            const top =
                window.screenY + (window.outerHeight - popup_height) / 2;

            const popupFeatures = `width=${popup_width},height=${popup_height},left=${left},top=${top},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`;

            const popupWindow = window.open(
                href,
                title || "popup",
                popupFeatures
            );

            if (
                !popupWindow ||
                popupWindow.closed ||
                typeof popupWindow.closed === "undefined"
            ) {
                console.warn("팝업이 차단되었습니다.");
                setPopupBlocked(true);
                setOpen(true);
            } else {
                popupWindow.focus();
            }
            return;
        }

        if (openMode === "dialog") {
            setOpen(true);
            setIframeError(false);
            return;
        }

        if (
            href.startsWith("/") ||
            href.startsWith("./") ||
            href.startsWith("../") ||
            (!href.startsWith("http://") && !href.startsWith("https://"))
        ) {
            window.open(href, "_blank", "noopener,noreferrer");
            return;
        }

        try {
            const currentHostname = window.location.hostname;
            const targetUrl = new URL(href);

            if (trusted || targetUrl.hostname === currentHostname) {
                window.open(href, "_blank", "noopener,noreferrer");
                return;
            }
        } catch (error) {
            console.error("URL 파싱 오류:", error);
            window.open(href, "_blank", "noopener,noreferrer");
            return;
        }

        setOpen(true);
    };

    const handleConfirm = () => {
        window.open(href, "_blank", "noopener,noreferrer");
        setOpen(false);
        setPopupBlocked(false);
    };

    const handleClose = () => {
        setOpen(false);
        setIframeError(false);
        setPopupBlocked(false);
    };

    const handleIframeError = () => {
        setIframeError(true);
    };

    return (
        <>
            <a
                href={href}
                onClick={handleClick}
                className={className}
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center" }}
            >
                {title ? (
                    <StyledTooltip
                        title={title}
                        arrow
                        disableInteractive
                        leaveDelay={0}
                    >
                        {typeof children === "string" ? (
                            <span>{children}</span>
                        ) : (
                            children
                        )}
                    </StyledTooltip>
                ) : (
                    children
                )}
            </a>

            {popupBlocked ? (
                <PopupBlockedDialog
                    open={open}
                    onClose={handleClose}
                    onConfirm={handleConfirm}
                    titleText={dialog?.titleText}
                    titleStyle={dialog?.titleStyle}
                    showCloseButton={dialog?.showCloseButton}
                    leftActions={dialog?.leftActions}
                />
            ) : openMode === "dialog" ? (
                <IframeDialog
                    open={open}
                    href={href}
                    title={title}
                    width={width}
                    height={height}
                    iframeError={iframeError}
                    onClose={handleClose}
                    onIframeError={handleIframeError}
                />
            ) : (
                <ExternalLinkWarningDialog
                    open={open}
                    href={href}
                    onClose={handleClose}
                    onConfirm={handleConfirm}
                    titleText={dialog?.titleText}
                    titleStyle={dialog?.titleStyle}
                    showCloseButton={dialog?.showCloseButton}
                    leftActions={dialog?.leftActions}
                />
            )}
        </>
    );
}
