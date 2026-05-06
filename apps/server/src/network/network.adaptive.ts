export interface AdaptiveNetworkState {
  latency: number
  packetLoss: number
  bitrate: number
  quality: 'low' | 'medium' | 'high'
}

export class AdaptiveNetworkManager {
  calculateQuality(latency: number, packetLoss: number) {
    if (latency > 250 || packetLoss > 10) {
      return 'low'
    }

    if (latency > 120 || packetLoss > 5) {
      return 'medium'
    }

    return 'high'
  }
}
