/**
 * ExternalLink.tsx
 *
 * @license MIT
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 * @contact 010-3094-9944
 */

import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { ExternalLinkProps } from "./types";
import { useBreakpoint } from "./useBreakpoint";
import { highlightDomain } from "./utils";

export default function ExternalLink({
  href,
  title,
  children,
  openMode,
  width,
  height,
  className = "",
}: ExternalLinkProps) {
  const [open, setOpen] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [popupBlocked, setPopupBlocked] = useState(false);
  const { breakpoint } = useBreakpoint();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (openMode === "popup") {
      const popup_width = width ?? 1000;
      const popup_height = height ?? 850;
      const left = window.screenX + (window.outerWidth - popup_width) / 2;
      const top = window.screenY + (window.outerHeight - popup_height) / 2;

      const popupFeatures = `width=${popup_width},height=${popup_height},left=${left},top=${top},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`;

      const popupWindow = window.open(href, title || "popup", popupFeatures);

      if (!popupWindow || popupWindow.closed || typeof popupWindow.closed === "undefined") {
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

      if (title || targetUrl.hostname === currentHostname) {
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

  const closeButtonSx = {
    position: "absolute" as const,
    right: 8,
    top: 8,
    color: "grey.500",
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
          <Tooltip title={title}>
            {typeof children === "string" ? <span>{children}</span> : children}
          </Tooltip>
        ) : (
          children
        )}
      </a>

      {popupBlocked ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="popup-blocked-dialog"
          maxWidth="xs"
        >
          <DialogTitle id="popup-blocked-dialog-title">
            팝업 차단됨
            <IconButton aria-label="close" onClick={handleClose} sx={closeButtonSx}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              팝업이 차단되었습니다. 브라우저 설정에서 팝업을 허용하거나 새 탭에서 열기를 선택해주세요.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="inherit" variant="outlined">
              취소
            </Button>
            <Button onClick={handleConfirm} color="primary" variant="contained">
              새 탭에서 열기
            </Button>
          </DialogActions>
        </Dialog>
      ) : openMode === "dialog" ? (
        <Dialog
          open={open}
          onClose={handleClose}
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
          <DialogTitle id="iframe-dialog-title">
            {title || "웹 페이지 보기"}
            <IconButton aria-label="close" onClick={handleClose} sx={closeButtonSx}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers sx={{ padding: 0, display: "flex", flexDirection: "column" }}>
            {iframeError ? (
              <div style={{ padding: "24px", textAlign: "center" }}>
                <p style={{ marginBottom: "16px" }}>이 웹사이트는 Dialog에서 표시할 수 없습니다.</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
                >
                  새 탭에서 열기
                </Button>
              </div>
            ) : (
              <iframe
                src={href}
                title={title || "웹 페이지"}
                style={{ border: "none", width: "100%", height: "100%", flexGrow: 1 }}
                onError={handleIframeError}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="inherit" variant="outlined">
              닫기
            </Button>
            <Button
              onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
              color="primary"
              variant="contained"
            >
              새 탭에서 열기
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="external-link-dialog-title"
          maxWidth="xs"
          fullWidth
        >
          <DialogTitle id="external-link-dialog-title">
            웹 주소로 연결
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{ color: "grey.500", marginRight: "-0.3rem" }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <DialogContentText component="div">
              <div>
                알 수 없는 웹 주소(URL)로 연결 시 피싱 및 개인 정보 유출 등 보안 사고로 이어질 수 있습니다.
                <br />
                연결 전에 웹 주소(URL)가 안전한지 다시 한 번 확인해 주세요.
              </div>
              <div
                style={{
                  marginTop: "16px",
                  backgroundColor: "#f5f5f5",
                  padding: "16px 24px",
                  fontFamily: "monospace",
                  fontSize: "14px",
                  color: "#000",
                  wordBreak: "break-all",
                }}
              >
                {highlightDomain(href)}
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="inherit" variant="outlined">
              취소
            </Button>
            <Button onClick={handleConfirm} color="primary" variant="contained" autoFocus>
              연결
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
