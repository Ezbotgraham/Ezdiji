export interface VideoCallParticipant {
  userId: string
  cameraEnabled: boolean
  microphoneEnabled: boolean
  screenSharing: boolean
  videoQuality: 'low' | 'medium' | 'high'
}

export interface VideoCallState {
  roomId: string
  participants: VideoCallParticipant[]
  maxParticipants: number
  activeSpeakerId?: string
}
