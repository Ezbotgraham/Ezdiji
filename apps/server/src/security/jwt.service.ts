import crypto from 'crypto'

export class JwtService {
  private secret = process.env.JWT_SECRET || 'change_me'

  sign(payload: object) {
    const body = Buffer.from(JSON.stringify(payload)).toString('base64url')

    const signature = crypto
      .createHmac('sha256', this.secret)
      .update(body)
      .digest('base64url')

    return `${body}.${signature}`
  }

  verify(token: string) {
    const [body, signature] = token.split('.')

    const expected = crypto
      .createHmac('sha256', this.secret)
      .update(body)
      .digest('base64url')

    if (signature !== expected) {
      return null
    }

    return JSON.parse(Buffer.from(body, 'base64url').toString())
  }
}
