import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'

const SignOut = gql`
  mutation SignOut {
    SignOut
  }
`

const useSignOut = (): unknown => {
  const router = useRouter()
  const [signOut] = useMutation<unknown, { signOut: boolean }>(SignOut, {
    onCompleted: (signedOut) => {
      if (signedOut) {
        router.push('/admin/login')
      }
    },
    onError: (error) => console.log(error),
  })

  return signOut
}

export default useSignOut
