import { JwtService } from './jwt.service'

export class AuthGuard {
  private jwt = new JwtService()

  authenticate(token?: string) {
    if (!token) {
      return null
    }

    return this.jwt.verify(token)
  }
}
