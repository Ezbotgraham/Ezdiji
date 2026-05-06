export interface OverlaySettings {
  enabled: boolean
  showActiveSpeaker: boolean
  showChannelName: boolean
  compactMode: boolean
  opacity: number
  clickThrough: boolean
}

export const DEFAULT_OVERLAY_SETTINGS: OverlaySettings = {
  enabled: true,
  showActiveSpeaker: true,
  showChannelName: true,
  compactMode: false,
  opacity: 85,
  clickThrough: false,
}
