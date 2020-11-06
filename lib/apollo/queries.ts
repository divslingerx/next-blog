import gql from 'graphql-tag'

export const userFields = gql`
  fragment userFields on User {
    id
    name
    email
    createdAt
    updatedAt
    avatar
    accountLocked
    emailVerified
  }
`

// USER QUERIES
export const ALL_USERS = gql`
  query ALL_USERS {
    AllUsers {
      id
      name
      email
      role
      avatar
    }
  }
`

export const CURRENT_USER = gql`
  ${userFields}

  query {
    Me {
      ...userFields
    }
  }
`

// POST FRAGMENTS
export const PostParts = gql`
  fragment PostParts on Post {
    title
    subtitle
    featuredImage
    category
    tags
    body
    status
  }
`

// POST QUERIES
export const ALL_POSTS = gql`
  query ALL_POSTS {
    AllPosts {
      id
      title
      subtitle
      featuredImage
      category
      status
      tags
      updatedAt
      author {
        id
        name
        avatar
      }
    }
  }
`

export const GET_POST_BY_ID = gql`
  query PostById($id: ID!) {
    PostById(id: $id) {
      ...PostParts
    }
  }
  ${PostParts}
`
