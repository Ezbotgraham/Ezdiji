export interface WebsocketEvent<T = unknown> {
  event: string
  payload: T
  timestamp: number
}
