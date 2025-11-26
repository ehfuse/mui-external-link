/**
 * dialogs/index.ts
 *
 * @license MIT
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 */

export { default as DialogHeader } from "./DialogHeader";
export { default as DialogFooter } from "./DialogFooter";
export { default as PopupBlockedDialog } from "./PopupBlockedDialog";
export { default as IframeDialog } from "./IframeDialog";
export { default as ExternalLinkWarningDialog } from "./ExternalLinkWarningDialog";

export type { DialogHeaderProps } from "./DialogHeader";
export type { DialogFooterProps } from "./DialogFooter";
export type { PopupBlockedDialogProps } from "./PopupBlockedDialog";
export type { IframeDialogProps } from "./IframeDialog";
export type { ExternalLinkWarningDialogProps } from "./ExternalLinkWarningDialog";
