export interface ServerBackup {
  id: string
  serverId: string
  createdAt: number
  createdBy: string
  includesMessages: boolean
  includesRoles: boolean
  includesChannels: boolean
}
