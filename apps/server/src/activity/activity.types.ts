export interface UserActivity {
  userId: string
  type: 'game' | 'editor' | 'browser' | 'music'
  name: string
  details?: string
  startedAt: number
}
