export interface TwoFactorState {
  enabled: boolean
  backupCodesGenerated: boolean
  lastVerifiedAt?: number
}
