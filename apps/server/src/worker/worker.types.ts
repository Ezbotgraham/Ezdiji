export interface BackgroundWorker {
  id: string
  type:
    | 'audio-processing'
    | 'video-processing'
    | 'noise-reduction'
    | 'upload-processing'
    | 'compression'

  active: boolean
  cpuUsage: number
  memoryUsage: number
}
