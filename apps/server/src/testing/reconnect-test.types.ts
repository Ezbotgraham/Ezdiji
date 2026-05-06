export interface ReconnectTestResult {
  reconnectsAttempted: number
  reconnectsSucceeded: number
  averageReconnectTimeMs: number
  sessionRecovered: boolean
}
