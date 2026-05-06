import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'

import { Server, Socket } from 'socket.io'

@WebSocketGateway()
export class PresenceGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server

  private onlineUsers = new Set<string>()

  handleConnection(@ConnectedSocket() client: Socket) {
    this.onlineUsers.add(client.id)

    this.server.emit('presence:update', {
      online: Array.from(this.onlineUsers),
    })
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    this.onlineUsers.delete(client.id)

    this.server.emit('presence:update', {
      online: Array.from(this.onlineUsers),
    })
  }
}
