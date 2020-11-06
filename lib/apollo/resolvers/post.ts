/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ApolloError, AuthenticationError } from 'apollo-server-micro'
import uploadSingle from '../../apollo-upload/uploadSingle'
import { MutationResolvers, QueryResolvers } from '../../../generated/graphql'

import Post from '../../mongo/models/Post'

interface PostResolvers {
  Query: QueryResolvers
  Mutation: MutationResolvers
}

const postResolvers: PostResolvers = {
  Query: {
    AllPosts: async (parent, { limit }) => {
      return Post.find({}).limit(limit).sort({ createdAt: -1 })
    },
    GetPostBySlug: async (parent, { slug }) => {
      const post = await Post.findOne({ slug })

      if (post) {
        return post
      }

      return new ApolloError('No post was found with this ID')
    },
  },

  Mutation: {
    CreatePost: async (parent, args, { userId }) => {
      if (!userId) {
        return new AuthenticationError('You must be signed in')
      }

      const res: { url?: string } = await uploadSingle(args.post.featuredImage)
      const { title, subtitle, status, body, category } = args.post

      if (userId) {
        const post = await new Post({
          title,
          subtitle,
          body,
          status,
          category,
          featuredImage: res.url,
          author: userId,
        }).save()
        return post
      }
      return new ApolloError('You Are Not Signed In')
    },
    UpdatePost: async (parent, { postId, post }) => {
      return Post.findOneAndUpdate({ id: postId }, post)
    },
    DeletePost: async (parent, { id }, { models, user }) => {
      const post = await models.Post.findById(id)

      if (post.author.toString() === user.id) {
        post.remove()
        return post
      }

      return post
    },
  },

  // Post: {
  //   // TODO! implement batch loader. The current code will hit the DB once for parent and then once for each post within the parent.  will lead to exponential horror show.
  //   author: async (post, args, { userId, models, userLoader }, info) => {
  //     return models.User.findById(post.author._id)
  //   },
  // },
}

export default postResolvers
