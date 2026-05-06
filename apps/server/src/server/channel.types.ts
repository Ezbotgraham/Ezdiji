export interface ServerChannel {
  id: string
  serverId: string
  categoryId?: string
  name: string
  type: 'text' | 'voice' | 'announcement' | 'forum'
  position: number
}
