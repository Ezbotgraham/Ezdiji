export interface VideoAIState {
  autoFraming: boolean
  backgroundSegmentation: boolean
  eyeContactCorrection: boolean
  gestureDetection: boolean
}

export const DEFAULT_VIDEO_AI: VideoAIState = {
  autoFraming: false,
  backgroundSegmentation: false,
  eyeContactCorrection: false,
  gestureDetection: false,
}
