import { gql } from '@apollo/client'

// POST FRAGMENTS
const PostParts = gql`
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

export default PostParts
