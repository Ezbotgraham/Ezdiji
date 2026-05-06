import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'

import { Server, Socket } from 'socket.io'
import { PresenceStore } from './presence.store'

@WebSocketGateway()
export class PresenceGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server

  private store = new PresenceStore()

  handleConnection(@ConnectedSocket() client: Socket) {
    const userId = client.handshake.auth.userId || client.id

    this.store.connect(userId, client.id)

    this.server.emit('presence:update', {
      online: this.store.getOnlineUsers(),
    })
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    const userId = client.handshake.auth.userId || client.id

    this.store.disconnect(userId, client.id)

    this.server.emit('presence:update', {
      online: this.store.getOnlineUsers(),
    })
  }
}
