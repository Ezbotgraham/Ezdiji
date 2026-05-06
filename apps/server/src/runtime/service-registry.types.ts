export interface RuntimeServiceRegistry {
  websocketReady: boolean
  rtcReady: boolean
  databaseReady: boolean
  cacheReady: boolean
  uploadReady: boolean
  notificationReady: boolean
}
