export interface UserAudioState {
  userId: string
  muted: boolean
  deafened: boolean
  localSoundboardMuted: boolean
  localUserVolume: number
  noiseSuppressionEnabled: boolean
  streamVolume: number
}

export const DEFAULT_USER_AUDIO_STATE: Omit<UserAudioState, 'userId'> = {
  muted: false,
  deafened: false,
  localSoundboardMuted: false,
  localUserVolume: 100,
  noiseSuppressionEnabled: true,
  streamVolume: 100,
}
