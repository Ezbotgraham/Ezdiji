export interface VideoBandwidthProfile {
  maxBitrate: number
  maxResolution: '480p' | '720p' | '1080p'
  fps: number
}

export class VideoBandwidthManager {
  selectProfile(bandwidth: number): VideoBandwidthProfile {
    if (bandwidth < 2_000_000) {
      return {
        maxBitrate: 1200000,
        maxResolution: '480p',
        fps: 24,
      }
    }

    if (bandwidth < 5_000_000) {
      return {
        maxBitrate: 3500000,
        maxResolution: '720p',
        fps: 30,
      }
    }

    return {
      maxBitrate: 8000000,
      maxResolution: '1080p',
      fps: 60,
    }
  }
}
