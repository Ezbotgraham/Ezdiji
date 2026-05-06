export interface AdaptiveStreamProfile {
  resolution: '480p' | '720p' | '1080p' | '1440p'
  fps: number
  bitrate: number
}

export class AdaptiveStreamManager {
  getProfile(latency: number, bandwidth: number): AdaptiveStreamProfile {
    if (bandwidth < 2_000_000 || latency > 250) {
      return {
        resolution: '480p',
        fps: 24,
        bitrate: 1200000,
      }
    }

    if (bandwidth < 6_000_000) {
      return {
        resolution: '720p',
        fps: 30,
        bitrate: 3500000,
      }
    }

    return {
      resolution: '1080p',
      fps: 60,
      bitrate: 8000000,
    }
  }
}
