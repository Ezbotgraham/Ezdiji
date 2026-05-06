import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets'

import { Server, Socket } from 'socket.io'

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class Gateway {
  @WebSocketServer()
  server: Server

  handleConnection(client: Socket) {
    console.log('client connected', client.id)
  }

  handleDisconnect(client: Socket) {
    console.log('client disconnected', client.id)
  }

  @SubscribeMessage('chat:send')
  handleChat(
    @MessageBody() body: any,
    @ConnectedSocket() client: Socket,
  ) {
    this.server.emit('chat:receive', {
      id: client.id,
      message: body.message,
      createdAt: Date.now(),
    })
  }
}
