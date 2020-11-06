import { gql } from '@apollo/client'

const DeletePost = gql`
  mutation DeletePost($id: ID!) {
    DeletePost(id: $id) {
      id
    }
  }
`

export default DeletePost
