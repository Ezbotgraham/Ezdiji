export interface RemoteFileTransfer {
  id: string
  fromUserId: string
  toUserId: string
  filename: string
  size: number
  encrypted: boolean
  accepted: boolean
}
