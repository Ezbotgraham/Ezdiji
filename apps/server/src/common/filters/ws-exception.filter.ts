import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
} from '@nestjs/common'

@Catch()
export class WsExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const client = host.switchToWs().getClient()

    client.emit('error', {
      message: exception?.message || 'Internal websocket error',
    })
  }
}
