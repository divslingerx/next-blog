import { gql } from '@apollo/client'
import PostParts from '../fragments/postParts'

export const GetPostBySlug = gql`
  query GetPostBySlug($slug: String!) {
    GetPostBySlug(slug: $slug) {
      ...PostParts
    }
  }
  ${PostParts}
`

export default GetPostBySlug
