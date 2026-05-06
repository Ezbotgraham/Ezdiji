export interface EncryptionState {
  algorithm: 'aes-256-gcm'
  encrypted: boolean
  keyRotationEnabled: boolean
  lastRotationAt?: number
}
