export interface CommunityServer {
  id: string
  name: string
  description?: string
  verified: boolean
  memberCount: number
  category: string
  bannerUrl?: string
}
