export interface AudioEffectState {
  bassBoost: boolean
  voiceEnhancer: boolean
  limiter: boolean
  compressor: boolean
  reverb: boolean
  pitchShift: boolean
}

export const DEFAULT_AUDIO_EFFECTS: AudioEffectState = {
  bassBoost: false,
  voiceEnhancer: true,
  limiter: true,
  compressor: true,
  reverb: false,
  pitchShift: false,
}
