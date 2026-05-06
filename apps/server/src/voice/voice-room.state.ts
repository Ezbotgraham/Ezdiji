export interface VoiceRoomMember {
  userId: string
  muted: boolean
  deafened: boolean
  streaming: boolean
  videoEnabled: boolean
  soundboardEnabled: boolean
  joinedAt: number
}

export interface VoiceRoomState {
  roomId: string
  members: VoiceRoomMember[]
  bitrateLimit: number
  userLimit?: number
  rtcRegion?: string
}
