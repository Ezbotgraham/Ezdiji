import { Module } from '@nestjs/common'
import { Gateway } from './gateway/gateway'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [AuthModule],
  providers: [Gateway],
})
export class AppModule {}
