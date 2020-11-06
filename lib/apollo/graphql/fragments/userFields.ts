import { gql } from '@apollo/client'

const userFields = gql`
  fragment userFields on User {
    id
    name
    email
    createdAt
    updatedAt
    avatar
    accountLocked
    emailVerified
  }
`
export default userFields
