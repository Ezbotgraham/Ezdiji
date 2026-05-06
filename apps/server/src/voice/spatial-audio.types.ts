export interface SpatialAudioState {
  enabled: boolean
  surroundMode: boolean
  roomSimulation: boolean
  attenuationDistance: number
}

export const DEFAULT_SPATIAL_AUDIO: SpatialAudioState = {
  enabled: false,
  surroundMode: true,
  roomSimulation: false,
  attenuationDistance: 100,
}
