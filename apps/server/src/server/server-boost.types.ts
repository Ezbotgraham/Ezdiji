export interface ServerBoostState {
  level: 0 | 1 | 2 | 3
  boostCount: number
  unlockedFeatures: string[]
}

export const BOOST_FEATURES = {
  1: ['higher-bitrate', 'animated-banner'],
  2: ['1080p-stream', 'better-audio'],
  3: ['custom-backgrounds', 'priority-relay'],
}
