export interface ServerInvite {
  code: string
  serverId: string
  createdBy: string
  expiresAt?: number
  usageLimit?: number
  usageCount: number
}
