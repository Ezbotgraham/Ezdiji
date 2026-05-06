export interface LoadTestScenario {
  id: string
  concurrentUsers: number
  voiceChannels: number
  activeStreams: number
  messageRatePerSecond: number
  durationSeconds: number
}
