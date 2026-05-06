export interface ServerTemplate {
  id: string
  name: string
  description?: string
  category: 'gaming' | 'community' | 'development' | 'education'
  createdBy: string
}
