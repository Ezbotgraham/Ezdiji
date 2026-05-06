export interface MessageReaction {
  emoji: string
  userIds: string[]
}

export interface MessageReactionState {
  messageId: string
  reactions: MessageReaction[]
}
