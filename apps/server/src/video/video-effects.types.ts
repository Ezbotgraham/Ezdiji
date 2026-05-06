export interface VideoEffectsState {
  backgroundBlur: boolean
  backgroundReplacement: boolean
  cinematicMode: boolean
  faceTracking: boolean
  autoExposure: boolean
  lowLightBoost: boolean
}

export const DEFAULT_VIDEO_EFFECTS: VideoEffectsState = {
  backgroundBlur: false,
  backgroundReplacement: false,
  cinematicMode: false,
  faceTracking: false,
  autoExposure: true,
  lowLightBoost: true,
}
