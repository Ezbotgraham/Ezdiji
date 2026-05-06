export interface MediaTranscodingJob {
  id: string
  type: 'video' | 'audio' | 'image'
  sourceUrl: string
  targetFormat: string
  status: 'queued' | 'processing' | 'completed' | 'failed'
}
