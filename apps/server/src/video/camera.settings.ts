export interface CameraSettings {
  deviceId?: string
  resolution: '480p' | '720p' | '1080p'
  fps: 15 | 30 | 60
  backgroundBlur: boolean
  backgroundReplacement: boolean
  lowLightCompensation: boolean
}

export const DEFAULT_CAMERA_SETTINGS: CameraSettings = {
  resolution: '720p',
  fps: 30,
  backgroundBlur: false,
  backgroundReplacement: false,
  lowLightCompensation: true,
}
