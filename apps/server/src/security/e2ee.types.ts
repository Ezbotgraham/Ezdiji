export interface EndToEndEncryptionState {
  enabled: boolean
  algorithm: 'x25519-aes-gcm'
  keyRotationIntervalHours: number
  verifiedSession: boolean
}

export const DEFAULT_E2EE_STATE: EndToEndEncryptionState = {
  enabled: false,
  algorithm: 'x25519-aes-gcm',
  keyRotationIntervalHours: 24,
  verifiedSession: false,
}
