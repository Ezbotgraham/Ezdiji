import { ChatMessage } from './message.types'

export class MessageStore {
  private messages = new Map<string, ChatMessage[]>()

  addMessage(roomId: string, message: ChatMessage) {
    const current = this.messages.get(roomId) || []

    current.push(message)

    if (current.length > 5000) {
      current.shift()
    }

    this.messages.set(roomId, current)
  }

  getMessages(roomId: string) {
    return this.messages.get(roomId) || []
  }
}
