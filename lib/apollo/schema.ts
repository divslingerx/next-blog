import { makeExecutableSchema } from 'graphql-tools'

// types

import gql from 'graphql-tag'
import { uploadTypes } from '../apollo-upload'
import userTypes from './types/user'
import postTypes from './types/post'
import resolvers from './resolvers'

/* currently we need to have these _empty types.
This allows us to extend Query and Mutation within and keep schema modular */
const Query = gql`
  type Query {
    _empty: String
  }
`

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`
// This allows createdAt and updatedAt to be returned as a Date from mongoose (intended behavior)
const Scalars = gql`
  scalar Date
`
// TODO I believe the order here matters need to test and figure out a less fragil way if so.
const types = [Scalars, uploadTypes, userTypes, postTypes]

const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation, ...types],
  resolvers,
})

export default schema
