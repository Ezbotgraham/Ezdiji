export interface LoginAttempt {
  email: string
  ipAddress: string
  successful: boolean
  attemptedAt: number
  userAgent?: string
}
