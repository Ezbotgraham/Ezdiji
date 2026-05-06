export interface VoicePermissions {
  canSpeak: boolean
  canStream: boolean
  canUseSoundboard: boolean
  prioritySpeaker: boolean
}

export const DEFAULT_VOICE_PERMISSIONS: VoicePermissions = {
  canSpeak: true,
  canStream: true,
  canUseSoundboard: true,
  prioritySpeaker: false,
}
