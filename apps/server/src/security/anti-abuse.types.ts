export interface AbuseDetectionState {
  spamDetected: boolean
  suspiciousUploads: number
  rapidReconnects: number
  mutedUntil?: number
  blockedUntil?: number
}
