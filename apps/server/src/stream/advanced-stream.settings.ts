export interface AdvancedStreamSettings {
  resolution: '480p' | '720p' | '1080p' | '1440p'
  fps: 15 | 24 | 30 | 60 | 120
  bitrateMode: 'auto' | 'manual'
  bitrate: number
  codec: 'h264' | 'vp9' | 'av1'
  encoder: 'cpu' | 'nvenc' | 'amf' | 'qsv'
  latencyMode: 'quality' | 'balanced' | 'ultra-low-latency'
  streamPriority: 'performance' | 'quality' | 'battery'
}

export const DEFAULT_ADVANCED_STREAM_SETTINGS: AdvancedStreamSettings = {
  resolution: '1080p',
  fps: 60,
  bitrateMode: 'auto',
  bitrate: 8000000,
  codec: 'h264',
  encoder: 'cpu',
  latencyMode: 'balanced',
  streamPriority: 'quality',
}
