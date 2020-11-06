import { gql } from '@apollo/client'

const CREATE_POST = gql`
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

export default CREATE_POST
