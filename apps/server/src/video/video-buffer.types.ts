export interface VideoBufferState {
  adaptiveBuffering: boolean
  frameRecovery: boolean
  frameDropProtection: boolean
  dynamicFrameSkip: boolean
}

export const DEFAULT_VIDEO_BUFFER: VideoBufferState = {
  adaptiveBuffering: true,
  frameRecovery: true,
  frameDropProtection: true,
  dynamicFrameSkip: true,
}
