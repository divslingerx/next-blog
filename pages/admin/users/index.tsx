import { useQuery } from '@apollo/client'
import * as React from 'react'
import { Layout } from '../../../admin'
import { ALL_USERS } from '../../../lib/apollo/queries'
import {
  Button,
  LinkButton,
  DangerButton,
  Table,
} from '../../../admin/components'

const AdminUsersPage: React.FC = () => {
  const { loading, data } = useQuery(ALL_USERS)

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'email',
        accessor: 'email',
      },
      {
        Header: 'Verified',
        accessor: 'emailVerified',
      },
      {
        Header: 'Tags',
        accessor: 'tags',
      },
      {
        Header: 'Updated',
        accessor: 'updatedAt',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Action',
        accessor: 'id',
        // eslint-disable-next-line react/display-name
        Cell: ({ value: id }) => (
          <div className="flex flex-col items-center ">
            <LinkButton href={`/admin/posts/edit/${id}`}>Edit</LinkButton>
            <DangerButton>Delete</DangerButton>
          </div>
        ),
      },
    ],
    []
  )

  return (
    <Layout>
      <div className="flex flex-col mt-8">
        <div className="text-right pt-8 pb-4">
          <Button>CREATE NEW +</Button>
        </div>
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Table data={data.AllUsers} columns={columns} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminUsersPage
