import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: any) {
    const passwordHash = await this.authService.hashPassword(body.password)

    return {
      username: body.username,
      email: body.email,
      passwordHash,
    }
  }
}
