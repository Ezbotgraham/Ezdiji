export interface CDNNode {
  id: string
  region: string
  baseUrl: string
  healthy: boolean
  latencyMs: number
}

export interface CDNState {
  enabled: boolean
  imageCaching: boolean
  videoCaching: boolean
  attachmentCaching: boolean
}

export const DEFAULT_CDN_STATE: CDNState = {
  enabled: true,
  imageCaching: true,
  videoCaching: true,
  attachmentCaching: true,
}
