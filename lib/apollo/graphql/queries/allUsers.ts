import { gql } from '@apollo/client'

const AllUsers = gql`
  query AllUsers {
    AllUsers {
      id
      name
      email
      role
      avatar
    }
  }
`

export default AllUsers
