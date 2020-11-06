import merge from 'lodash.merge'
import userResolvers from './resolvers/user'
import postResolvers from './resolvers/post'
import { uploadResolvers } from '../apollo-upload'

const resolvers = merge(uploadResolvers, userResolvers, postResolvers)

export default resolvers
