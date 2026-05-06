export interface IceServerConfig {
  urls: string[]
  username?: string
  credential?: string
}

export interface RTCTransportConfig {
  stunServers: IceServerConfig[]
  turnServers: IceServerConfig[]
  forceRelay: boolean
  tcpFallback: boolean
}

export const DEFAULT_RTC_TRANSPORT: RTCTransportConfig = {
  stunServers: [
    {
      urls: ['stun:stun.l.google.com:19302'],
    },
  ],
  turnServers: [],
  forceRelay: false,
  tcpFallback: true,
}
