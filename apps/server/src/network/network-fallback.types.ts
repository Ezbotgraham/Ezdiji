export interface NetworkFallbackState {
  websocketFallback: boolean
  pollingFallback: boolean
  rtcRelayFallback: boolean
  reconnectBackoff: boolean
}

export const DEFAULT_NETWORK_FALLBACK: NetworkFallbackState = {
  websocketFallback: true,
  pollingFallback: true,
  rtcRelayFallback: true,
  reconnectBackoff: true,
}
