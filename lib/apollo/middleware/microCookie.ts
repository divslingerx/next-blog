/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

/**
 * This sets `cookie` on `res` object
 */

const cookie = (
  name: string,
  value: string,
  options: CookieSerializeOptions = { maxAge: 1000 * 60 * 24 * 7 }
) => {
  const stringValue =
    typeof value === 'object' ? `j:${JSON.stringify(value)}` : String(value)

  if ('maxAge' in options) {
    options.expires = new Date(Date.now() + options.maxAge)
    options.maxAge /= 1000
  }

  return serialize(name, String(stringValue), options)
}

/**
 * Adds `cookie` function on `res.cookie` to set cookies for response
 */

export type Handler = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>

const cookies: string[] = []

const useMicroCookie = (handler: Handler) => (req: any, res: any) => {
  res.cookie = (name: string, value: any, options: CookieSerializeOptions) => {
    cookies.push(cookie(name, value, options))
    res.setHeader('Set-Cookie', cookies)
  }

  res.createAuthCookies = ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string
    refreshToken: string
  }) => {
    // create cookies
    res.cookie('accessToken', accessToken, {
      // 15 min
      maxAge: 1000 * 60 * 15,
    })

    res.cookie('refreshToken', refreshToken, {
      // one week
      maxAge: 1000 * 60 * 60 * 24 * 7,
    })
  }

  res.destroyAuthCookies = () => {
    console.log('COOKIE')
    res.cookie('accessToken', '', {
      // make cookie instantly invalid
      maxAge: 0,
    })

    res.cookie('refreshToken', '', {
      // make cookie instantly invalid
      maxAge: 0,
    })
  }

  if (req.cookies) {
    jwt.verify(
      req.cookies.accessToken,
      process.env.ACCESS_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          return err
        }

        req.userId = decoded.id
      }
    )
  } else {
    req.userId = false
  }

  return handler(req, res)
}

export default useMicroCookie
