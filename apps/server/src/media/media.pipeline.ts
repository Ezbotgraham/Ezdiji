export interface MediaPipelineState {
  hardwareEncoding: boolean
  adaptiveBitrate: boolean
  codec: 'opus' | 'vp9' | 'h264' | 'av1'
  currentBitrate: number
  packetLossCompensation: boolean
  lowLatencyMode: boolean
}

export class MediaPipelineManager {
  optimizeForNetwork(latency: number, packetLoss: number) {
    if (latency > 200 || packetLoss > 8) {
      return {
        bitrate: 32000,
        quality: 'low',
      }
    }

    return {
      bitrate: 64000,
      quality: 'high',
    }
  }
}
