export interface RichPresenceState {
  userId: string
  application?: string
  details?: string
  state?: string
  largeImageUrl?: string
  smallImageUrl?: string
  joinable: boolean
}
