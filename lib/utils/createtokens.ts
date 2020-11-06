import jwt from 'jsonwebtoken'
import { UserDocument } from '../mongo/models/User'

interface Tokens {
  accessToken: string
  refreshToken: string
}

const createTokens = (user: UserDocument): Tokens => {
  const claims = {
    id: user.id,
  }

  const accessToken = jwt.sign(claims, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1h',
  })

  /* 
  The user.count on the refresh token is a way to help with security.
  the count starts at zero and upon a password reset or account lockout, 
  the count increments.
  Once the access token expires we check the count on the refresh token and only refresh 
  if the count matches. If it does not match we delete the cookies, 
  invalidate any tokens and sign the user out
  */
  const refreshToken = jwt.sign(
    { userId: user.id, count: user.count },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: '7d',
    }
  )

  return { accessToken, refreshToken }
}

export default createTokens
