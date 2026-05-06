export interface ServerEvent {
  id: string
  title: string
  description: string
  createdBy: string
  startsAt: number
  endsAt?: number
  createdAt: number
}
