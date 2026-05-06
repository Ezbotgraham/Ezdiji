export interface DeviceInfo {
  id: string
  platform: string
  browser?: string
  os?: string
  trusted: boolean
  lastSeenAt: number
}
