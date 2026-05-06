export interface RTCConnectionState {
  peerId: string
  connected: boolean
  iceState:
    | 'new'
    | 'checking'
    | 'connected'
    | 'completed'
    | 'failed'
    | 'disconnected'
    | 'closed'

  relayFallback: boolean
  reconnectAttempts: number
  encrypted: boolean
}
