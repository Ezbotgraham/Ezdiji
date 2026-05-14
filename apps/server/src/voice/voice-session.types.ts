export interface VoiceSessionState {
  sessionId: string
  channelId: string
  connectedUsers: string[]
  startedAt: number
  active: boolean
}
