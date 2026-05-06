export interface FrameLimiterState {
  enabled: boolean
  foregroundFps: number
  backgroundFps: number
  batterySaverFps: number
}

export const DEFAULT_FRAME_LIMITER: FrameLimiterState = {
  enabled: true,
  foregroundFps: 60,
  backgroundFps: 15,
  batterySaverFps: 30,
}
