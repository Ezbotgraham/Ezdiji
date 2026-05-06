export interface MobilePushToken {
  userId: string
  platform: 'android' | 'ios'
  token: string
  createdAt: number
}
