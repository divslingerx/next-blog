import gql from 'graphql-tag'

export const userParts = gql`
  fragment userParts on User {
    accountLocked
    avatar
    createdAt
    email
    emailVerified
    id
    name
    updatedAt
  }
`

export const SIGN_IN = gql`
  ${userParts}
  mutation SignIn($email: String!, $password: String!) {
    SignIn(email: $email, password: $password) {
      ...userParts
    }
  }
`

export const CREATE_POST = gql`
  mutation CREATE_POST($post: PostInput) {
    CreatePost(post: $post) {
      id
      title
      subtitle
      body
      category
      featuredImage
      author {
        id
        name
      }
    }
  }
`

export const UpdatePost = gql`
  mutation($postId: ID!, $post: PostInput) {
    UpdatePost(postId: $postId, post: $PostInput) {
      id
    }
  }
`

export const DeletePost = gql`
  mutation($id: ID!) {
    DeletePost(id: $id) {
      success
    }
  }
`
