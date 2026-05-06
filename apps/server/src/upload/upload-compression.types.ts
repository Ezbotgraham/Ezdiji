export interface UploadCompressionSettings {
  imageCompression: boolean
  videoCompression: boolean
  audioCompression: boolean
  automaticCompression: boolean
}

export const DEFAULT_UPLOAD_COMPRESSION: UploadCompressionSettings = {
  imageCompression: true,
  videoCompression: false,
  audioCompression: false,
  automaticCompression: true,
}
