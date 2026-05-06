export interface VideoRecording {
  id: string
  roomId: string
  createdBy: string
  participants: string[]
  startedAt: number
  endedAt?: number
  fileUrl?: string
}
