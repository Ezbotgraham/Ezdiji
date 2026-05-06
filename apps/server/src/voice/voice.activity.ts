export interface VoiceActivityState {
  userId: string
  speaking: boolean
  volume: number
  lastDetectedAt: number
}
