export interface ClipboardSyncState {
  enabled: boolean
  encrypted: boolean
  maxClipboardSizeKb: number
}

export const DEFAULT_CLIPBOARD_SYNC: ClipboardSyncState = {
  enabled: true,
  encrypted: true,
  maxClipboardSizeKb: 512,
}
