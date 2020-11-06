import gql from 'graphql-tag'

export const PostInput = gql`
  input PostInput {
    title: String!
    slug: String!
    subtitle: String
    tags: [String]
    body: String!
    featuredImage: Upload!
    status: Status!
    category: String
  }
`

const postTypes = gql`
  enum Status {
    DRAFT
    PUBLISHED
  }

  ${PostInput}

  type Post {
    id: ID!
    slug: String!
    title: String!
    subtitle: String!
    body: String!
    featuredImage: String
    category: String!
    tags: [String]
    status: Status!
    author: User!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    AllPosts(limit: Int): [Post]
    GetPostBySlug(slug: String): Post!
  }

  extend type Mutation {
    CreatePost(post: PostInput): Post!
    UpdatePost(postId: ID!, post: PostInput): Post!
    DeletePost(id: ID): Post!
  }
`

export default postTypes
