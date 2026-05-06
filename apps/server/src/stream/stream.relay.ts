export interface RelayNode {
  id: string
  region: string
  latency: number
  active: boolean
}

export class StreamRelayManager {
  private relays: RelayNode[] = []

  selectBestRelay(region: string) {
    return this.relays
      .filter((relay) => relay.region === region && relay.active)
      .sort((a, b) => a.latency - b.latency)[0]
  }
}
