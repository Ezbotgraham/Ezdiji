export interface MediaPriorityState {
  prioritizeVoice: boolean
  prioritizeScreenShare: boolean
  prioritizeStreams: boolean
  throttleBackgroundMedia: boolean
}

export const DEFAULT_MEDIA_PRIORITY: MediaPriorityState = {
  prioritizeVoice: true,
  prioritizeScreenShare: true,
  prioritizeStreams: false,
  throttleBackgroundMedia: true,
}
