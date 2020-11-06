import { gql } from '@apollo/client'

const DBCounts = gql`
  query DBCounts {
    UserCount
  }
`

export default DBCounts
