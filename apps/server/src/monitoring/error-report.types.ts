export interface ErrorReport {
  id: string
  type: 'client' | 'server' | 'rtc' | 'database'
  message: string
  stack?: string
  createdAt: number
}
