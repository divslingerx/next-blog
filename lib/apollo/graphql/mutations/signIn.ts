import { gql } from '@apollo/client'
import userParts from '../fragments/userParts'

const SignIn = gql`
  ${userParts}
  mutation SignIn($email: String!, $password: String!) {
    SignIn(email: $email, password: $password) {
      ...userParts
    }
  }
`
export default SignIn
