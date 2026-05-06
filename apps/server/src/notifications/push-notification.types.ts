export interface PushNotification {
  id: string
  userId: string
  title: string
  body: string
  iconUrl?: string
  deepLink?: string
  createdAt: number
}
