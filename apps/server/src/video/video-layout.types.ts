export interface VideoLayoutSettings {
  mode: 'grid' | 'speaker' | 'cinema'
  showUserNames: boolean
  dynamicLayout: boolean
  prioritizeActiveSpeaker: boolean
}

export const DEFAULT_VIDEO_LAYOUT: VideoLayoutSettings = {
  mode: 'grid',
  showUserNames: true,
  dynamicLayout: true,
  prioritizeActiveSpeaker: true,
}
