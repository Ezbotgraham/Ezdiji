export interface AudioSettings {
  inputDeviceId?: string
  outputDeviceId?: string
  inputVolume: number
  outputVolume: number
  noiseSuppression: boolean
  echoCancellation: boolean
  automaticGainControl: boolean
  backgroundVoiceReduction: boolean
  codec: 'opus' | 'aac' | 'pcm'
  bitrate: number
}

export const DEFAULT_AUDIO_SETTINGS: AudioSettings = {
  inputVolume: 100,
  outputVolume: 100,
  noiseSuppression: true,
  echoCancellation: true,
  automaticGainControl: true,
  backgroundVoiceReduction: false,
  codec: 'opus',
  bitrate: 64000,
}
