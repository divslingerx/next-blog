import gql from 'graphql-tag'

const userTypes = gql`
  type User {
    id: ID!
    name: String
    email: String!
    role: String
    avatar: String
    createdAt: String!
    updatedAt: String!
    emailVerified: Boolean!
    accountLocked: Boolean!
  }

  extend type Query {
    UserById(id: ID!): User
    AllUsers(limit: Int, skip: Int): [User]
    UserCount: Int
    Me: User
  }

  extend type Mutation {
    InvalidateTokens: Boolean!
    RegisterUser(name: String!, email: String!, password: String!): User!
    SignIn(email: String, password: String): User!
    SignInWithToken(token: String): User!
    SendVerificationEmail: Boolean!
    VerifyEmail(code: String!): User
    SignOut: Boolean!
  }
`

export default userTypes
