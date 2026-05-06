export interface VoicePriorityState {
  userId: string
  prioritySpeaker: boolean
  duckOthers: boolean
  attenuationPercent: number
}

export const DEFAULT_VOICE_PRIORITY: Omit<VoicePriorityState, 'userId'> = {
  prioritySpeaker: false,
  duckOthers: true,
  attenuationPercent: 45,
}
