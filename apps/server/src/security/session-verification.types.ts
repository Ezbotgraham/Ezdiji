export interface SessionVerificationState {
  sessionId: string
  verified: boolean
  deviceName?: string
  ipAddress?: string
  suspiciousActivity: boolean
}
