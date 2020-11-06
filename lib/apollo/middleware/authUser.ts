/* eslint-disable @typescript-eslint/no-explicit-any */
import { verify } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import User from '../../mongo/models/User'
import createTokens from '../../utils/createtokens'

interface CookieOpts {
  maxAge: number
}

interface CookieObject {
  cookie: (cookieName: string, data: string, opts?: CookieOpts) => void
}

type ResWithCookies = NextApiResponse & CookieObject
type RequestWithContext = NextApiRequest & { userId?: string }

const authUserCookies = async (
  req: RequestWithContext,
  res: ResWithCookies,
  next: () => void
): Promise<any> => {
  // get cookies off req
  const { accessToken = '', refreshToken = '' } = req.cookies

  // if one or both cookies dont exist return
  if (!accessToken || !refreshToken) {
    return next()
  }

  // validate access token
  try {
    const decoded: any = verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    req.userId = decoded.id
    return next()
  } catch (err) {
    console.log(err)
  }

  // validate refresh token
  let data
  try {
    data = verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    req.userId = data.id
  } catch {
    return next()
  }

  // find user and compare the count
  const user = await User.findById(data.userId)

  // token has been invalided
  if (!user || user.count !== data.count) {
    return next()
  }

  const tokens = createTokens(user)
  req.userId = user.id

  res.cookie('accessToken', tokens.accessToken, {
    // 15 min
    maxAge: 15,
  })

  res.cookie('refreshToken', tokens.refreshToken, {
    // one week
    maxAge: 1000 * 60 * 24 * 7,
  })

  return next()
}

export default authUserCookies
