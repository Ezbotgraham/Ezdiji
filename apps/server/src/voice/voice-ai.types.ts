export interface VoiceAIState {
  realtimeTranslation: boolean
  subtitleGeneration: boolean
  speakerDetection: boolean
  language?: string
}

export const DEFAULT_VOICE_AI: VoiceAIState = {
  realtimeTranslation: false,
  subtitleGeneration: false,
  speakerDetection: true,
}
