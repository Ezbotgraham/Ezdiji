export interface StressTestReport {
  id: string
  averageLatencyMs: number
  peakMemoryUsageMb: number
  peakCpuUsage: number
  droppedConnections: number
  generatedAt: number
}
