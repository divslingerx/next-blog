import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import gql from 'graphql-tag'
import { User } from '../../lib/types'

const Me = gql`
  query Me {
    Me {
      id
      avatar
      name
      email
    }
  }
`

interface Results {
  hasAuth: boolean
  user: User
}

const useIsAuthenticated = (redirectUrl = '/admin/login'): Results => {
  const router = useRouter()
  const { data, loading, error } = useQuery(Me)
  const hasAuth = data?.Me && !loading
  const shouldRedirect = !(loading || error || hasAuth)

  useEffect(() => {
    if (shouldRedirect) {
      router.push(redirectUrl)
    }
  }, [shouldRedirect])

  // if (error) {
  //   return <p>{error.message}</p>
  // }

  return {
    hasAuth: true,
    user: (data && data.Me) || {},
  }
}

export default useIsAuthenticated
