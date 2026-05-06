export interface PresenceState {
  userId: string
  status: 'online' | 'idle' | 'dnd' | 'offline'
  customStatus?: string
  lastSeenAt: number
}
