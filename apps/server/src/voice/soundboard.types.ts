export interface SoundboardSound {
  id: string
  name: string
  fileUrl: string
  volume: number
  uploadedBy: string
  createdAt: number
}

export interface SoundboardState {
  enabled: boolean
  maxSimultaneousSounds: number
}

export const DEFAULT_SOUNDBOARD_STATE: SoundboardState = {
  enabled: true,
  maxSimultaneousSounds: 2,
}
