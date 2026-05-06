export interface VoiceConnectionQuality {
  userId: string
  ping: number
  jitter: number
  packetLoss: number
  speakingLatency: number
  quality: 'bad' | 'medium' | 'good'
}

export class VoiceQualityMonitor {
  calculateQuality(packetLoss: number, jitter: number) {
    if (packetLoss > 8 || jitter > 120) {
      return 'bad'
    }

    if (packetLoss > 3 || jitter > 60) {
      return 'medium'
    }

    return 'good'
  }
}
