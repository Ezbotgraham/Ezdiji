export interface TokenRotationState {
  accessTokenLifetimeMinutes: number
  refreshTokenLifetimeDays: number
  automaticRotation: boolean
  revokeOnSuspiciousActivity: boolean
}

export const DEFAULT_TOKEN_ROTATION: TokenRotationState = {
  accessTokenLifetimeMinutes: 15,
  refreshTokenLifetimeDays: 30,
  automaticRotation: true,
  revokeOnSuspiciousActivity: true,
}
