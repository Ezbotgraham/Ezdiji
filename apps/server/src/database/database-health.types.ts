export interface DatabaseHealthState {
  connected: boolean
  latencyMs: number
  activeConnections: number
  replicationEnabled: boolean
  lastBackupAt?: number
}
