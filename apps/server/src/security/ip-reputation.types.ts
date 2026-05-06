export interface IPReputationState {
  ipAddress: string
  suspicious: boolean
  blocked: boolean
  failedAttempts: number
  lastSeenAt: number
}
