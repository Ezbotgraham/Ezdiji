export interface NoiseIsolationState {
  enabled: boolean
  aiIsolation: boolean
  keyboardReduction: boolean
  fanNoiseReduction: boolean
  backgroundSpeechReduction: boolean
  aggressiveness: 1 | 2 | 3 | 4 | 5
}

export const DEFAULT_NOISE_ISOLATION: NoiseIsolationState = {
  enabled: true,
  aiIsolation: false,
  keyboardReduction: true,
  fanNoiseReduction: true,
  backgroundSpeechReduction: true,
  aggressiveness: 3,
}
