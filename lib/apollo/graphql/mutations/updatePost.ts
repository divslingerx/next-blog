import { gql } from '@apollo/client'

export const UpdatePost = gql`
  mutation UpdatePost($postId: ID!, $post: PostInput) {
    UpdatePost(postId: $postId, post: $post) {
      id
    }
  }
`

export default UpdatePost
