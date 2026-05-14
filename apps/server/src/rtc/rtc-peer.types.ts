export interface RtcPeerState {
  peerId: string
  userId: string
  connected: boolean
  audioEnabled: boolean
  videoEnabled: boolean
  screenSharing: boolean
}
