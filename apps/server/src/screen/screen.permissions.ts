export interface ScreenPermissions {
  canShare: boolean
  canControl: boolean
  canRequestControl: boolean
}

export const DEFAULT_SCREEN_PERMISSIONS: ScreenPermissions = {
  canShare: true,
  canControl: false,
  canRequestControl: true,
}
