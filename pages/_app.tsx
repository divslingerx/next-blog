/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo/client'
import '../styles/index.css'

// TODO?: how do you type a react component as a prop

interface Props {
  Component: any
  pageProps?: { [key: string]: any }
}
const App: React.FC<Props> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
