/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import bcrypt from 'bcryptjs'
import { ApolloError, UserInputError } from 'apollo-server-micro'
import createTokens from '../../utils/createtokens'
import { MutationResolvers, QueryResolvers } from '../../../generated/graphql'
import User from '../../mongo/models/User'
import Token from '../../mongo/models/Token'

interface UserResolvers {
  Query: QueryResolvers
  Mutation: MutationResolvers
}

const userResolvers: UserResolvers = {
  Query: {
    UserById: async (root, { id }) => User.findById(id),

    AllUsers: async (root, { limit = 20 }) =>
      User.find({}).limit(limit).sort({ createdAt: -1 }),

    Me: async (root, args, { req }) => User.findById(req.userId),

    // UserCount: () => User.estimatedDocumentCount(),
  },

  Mutation: {
    RegisterUser: async (root, { name, email, password }, { res }) => {
      // TODO validate input
      /*  IF EMAIL EXISTS IN DB, RETURN ERROR */
      const foundUser = await User.findOne({ email })

      if (foundUser) {
        throw new ApolloError('An account with this email already exists')
      }

      // create new user
      const newUser = await new User({
        name,
        email,
        password,
      }).save()

      res.createCookies(createTokens(newUser))

      // if everything worked we save the user and return the users info
      return newUser
    },

    SignIn: async (root, { email, password }, { res }) => {
      // get user with password from db
      const user = await User.findOne({
        email,
      })
        .select('+password')
        .exec()
        .catch(() => {
          throw new UserInputError('The Email Or Password Was Incorrect')
        })

      // // throw error if there is no user
      // if (!user) {
      //   validationErrors.email = 'No User Found With This Email'
      //   throw new UserInputError('The Email Or Password Was Incorrect')
      // }

      // decrypt the password and compare to password arg
      const isMatch = await bcrypt
        .compare(password, user.password)
        .catch((err) => console.log(err))

      // throw error if not matched
      if (!isMatch) {
        throw new UserInputError('Sorry, that password is not correct')
      }

      // made available through micro cookie wmiddleware
      res.createAuthCookies(createTokens(user))

      return user
    },

    SignOut: async (root, SignOutOptions, { res }) => {
      // made available through micro cookie wmiddleware
      res.destroyAuthCookies()
      return true
    },

    InvalidateTokens: async (root, args, { req }) => {
      if (!req.userId) {
        throw new ApolloError('No user signed in')
      }

      await User.findByIdAndUpdate(
        req.userId,
        { $inc: { count: 1 } },
        { new: true }
      ).catch((err) => console.log(err))

      // clear Cookies?
      // res.cookie("accessToken", null);
      // res.cookie("refreshToken", null);

      return true
    },

    // SendVerificationEmail: async (root, args, { req }) => {
    //   const user = await User.findById(req.userId)
    //   const { token } = await new Token({ user: user.id }).save()

    //   const verificationEmail = {
    //     to: user.email,
    //     from: 'toreilly317@gmail.com',
    //     subject: 'Welcome To Your Blog!',
    //     text: `Your verification code is ${token}`,
    //   }

    //   const sendEmail = (email = verificationEmail) => {
    //     return email
    //   }

    //   sendEmail()
    // },

    VerifyEmail: async (root, { code }, { req }) => {
      const token = await Token.findOne({ token: code })

      if (token.user.toString() === req.userId) {
        const user = await User.findByIdAndUpdate(
          req.userId,
          {
            emailVerified: true,
          },
          { new: true }
        )
        return user
      }
    },
  },
}

export default userResolvers
