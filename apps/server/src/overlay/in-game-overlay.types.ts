export interface InGameOverlayState {
  enabled: boolean
  showSpeakingUsers: boolean
  showNotifications: boolean
  showPerformanceStats: boolean
  minimalMode: boolean
}

export const DEFAULT_INGAME_OVERLAY: InGameOverlayState = {
  enabled: true,
  showSpeakingUsers: true,
  showNotifications: true,
  showPerformanceStats: false,
  minimalMode: false,
}
