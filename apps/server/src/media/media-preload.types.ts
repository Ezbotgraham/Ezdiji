export interface MediaPreloadState {
  enabled: boolean
  preloadImages: boolean
  preloadVideos: boolean
  preloadAudio: boolean
  maxCacheSizeMb: number
}

export const DEFAULT_MEDIA_PRELOAD: MediaPreloadState = {
  enabled: true,
  preloadImages: true,
  preloadVideos: false,
  preloadAudio: true,
  maxCacheSizeMb: 512,
}
