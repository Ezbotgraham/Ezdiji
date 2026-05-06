export interface PushToTalkState {
  enabled: boolean
  keybind: string
  activationDelayMs: number
  releaseDelayMs: number
}

export const DEFAULT_PUSH_TO_TALK: PushToTalkState = {
  enabled: false,
  keybind: 'Mouse5',
  activationDelayMs: 0,
  releaseDelayMs: 120,
}
