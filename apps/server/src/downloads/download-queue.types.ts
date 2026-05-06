export interface DownloadQueueItem {
  id: string
  filename: string
  size: number
  progress: number
  speedBytesPerSecond: number
  paused: boolean
  createdAt: number
}

export interface DownloadQueueState {
  items: DownloadQueueItem[]
  maxConcurrentDownloads: number
}
