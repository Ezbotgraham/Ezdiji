export interface VoiceBufferState {
  jitterBufferMs: number
  packetRecovery: boolean
  forwardErrorCorrection: boolean
  adaptiveBuffering: boolean
}

export const DEFAULT_VOICE_BUFFER: VoiceBufferState = {
  jitterBufferMs: 60,
  packetRecovery: true,
  forwardErrorCorrection: true,
  adaptiveBuffering: true,
}
