import * as React from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'

const Me = gql`
  query Me {
    UserCount
    Me {
      id
      avatar
      name
      email
    }
  }
`

const useAuth = (): void => {
  const router = useRouter()
  const { data, loading, error } = useQuery(Me)
  const hasAuth = data?.Me
  const shouldRedirect = !(loading || error || hasAuth)

  React.useEffect(() => {
    if (shouldRedirect) {
      router.push('/admin/login')
    }
  }, [shouldRedirect])
}

export default useAuth
