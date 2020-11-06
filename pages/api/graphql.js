import { ApolloServer } from 'apollo-server-micro'
import schema from '../../lib/apollo/schema'
import * as models from '../../lib/mongo/models'
import microCookie from '../../lib/apollo/middleware/microCookie'
import connectDB from '../../lib/mongo/connect'

const apolloServer = new ApolloServer({
  uploads: {
    // Limits here should be stricter than config for surrounding
    // infrastructure such as Nginx so errors can be handled elegantly by
    // graphql-upload:
    // https://github.com/jaydenseric/graphql-upload#type-processrequestoptions
    maxFileSize: 10000000, // 10 MB
    maxFiles: 20,
  },
  schema,
  playground: process.env !== 'production',
  context: ({ req, res }) => {
    const { userId } = req
    return {
      models,
      userId,
      req,
      res,
    }
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default connectDB(
  microCookie(apolloServer.createHandler({ path: '/api/graphql' }))
)
