import { gql } from '@apollo/client'

const AllPosts = gql`
  query AllPosts {
    AllPosts {
      id
      title
      subtitle
      featuredImage
      category
      status
      tags
      slug
      updatedAt
      author {
        id
        name
        avatar
      }
    }
  }
`

export default AllPosts
