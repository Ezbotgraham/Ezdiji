export interface ChatChannel {
  id: string
  serverId: string
  name: string
  topic?: string
  slowmodeSeconds?: number
  createdAt: number
}
