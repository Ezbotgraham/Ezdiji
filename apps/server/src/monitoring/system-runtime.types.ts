export interface SystemRuntimeState {
  websocketConnections: number
  activeRtcSessions: number
  uploadsInProgress: number
  averageLatencyMs: number
  memoryUsageMb: number
  cpuUsagePercent: number
}
