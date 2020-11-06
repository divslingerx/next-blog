import * as React from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import AdminStats from '../../admin/components/Stats'
import { Layout, Spinner } from '../../admin/components'

const DBCounts = gql`
  query DBCounts {
    UserCount
  }
`

const AdminDashboard: React.FC = () => {
  const { data, loading, error } = useQuery(DBCounts)

  if (!loading && !error) {
    return (
      <Layout>
        <AdminStats userCount={data.UserCount} />
      </Layout>
    )
  }

  return (
    <p>
      <Spinner />
    </p>
  )
}

export default AdminDashboard
