export interface ClusterNode {
  id: string
  region: string
  cpuUsage: number
  memoryUsage: number
  activeUsers: number
  healthy: boolean
}
