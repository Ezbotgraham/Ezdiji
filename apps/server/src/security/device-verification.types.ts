export interface DeviceVerificationState {
  trusted: boolean
  fingerprint: string
  lastVerificationAt?: number
  suspicious: boolean
}
