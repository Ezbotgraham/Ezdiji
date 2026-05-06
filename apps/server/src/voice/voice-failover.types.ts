export interface VoiceFailoverState {
  automaticRegionSwitching: boolean
  reconnectOnFailure: boolean
  backupRegionId?: string
  lastFailoverAt?: number
}

export const DEFAULT_VOICE_FAILOVER: VoiceFailoverState = {
  automaticRegionSwitching: true,
  reconnectOnFailure: true,
}
