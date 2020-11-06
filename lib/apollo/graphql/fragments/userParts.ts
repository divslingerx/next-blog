import { gql } from '@apollo/client'

const userParts = gql`
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

export default userParts
