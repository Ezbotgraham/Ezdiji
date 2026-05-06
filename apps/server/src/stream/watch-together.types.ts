export interface WatchTogetherSession {
  id: string
  roomId: string
  hostUserId: string
  mediaUrl: string
  paused: boolean
  currentTime: number
  createdAt: number
}
