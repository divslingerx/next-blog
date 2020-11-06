import { gql } from '@apollo/client'
import userFields from '../fragments/userFields'

const Me = gql`
  ${userFields}

  query Me {
    Me {
      ...userFields
    }
  }
`

export default Me
