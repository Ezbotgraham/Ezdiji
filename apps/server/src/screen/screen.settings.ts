export interface ScreenShareSettings {
  sourceId?: string
  sourceType: 'screen' | 'window' | 'browser'
  fps: number
  resolution: '720p' | '1080p' | '1440p'
  codec: 'h264' | 'vp9' | 'av1'
  hardwareAcceleration: boolean
  includeAudio: boolean
}

export const DEFAULT_SCREEN_SETTINGS: ScreenShareSettings = {
  sourceType: 'screen',
  fps: 60,
  resolution: '1080p',
  codec: 'h264',
  hardwareAcceleration: true,
  includeAudio: true,
}
