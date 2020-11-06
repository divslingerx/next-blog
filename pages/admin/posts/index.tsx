/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { useQuery } from '@apollo/client'
import Layout from '../../../admin/components/Layout/Layout'
import { ALL_POSTS } from '../../../lib/apollo/queries'
import { Spinner, Table } from '../../../admin/components/common'
import { Post } from '../../../types'

interface ALL_POST_QUERY {
  __typename: string
  AllPosts: Post[]
}

const PostDashboard: React.FC = () => {
  const { data, loading } = useQuery<ALL_POST_QUERY>(ALL_POSTS)
  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title', // accessor is the "key" in the data
      },
      {
        Header: 'Author',
        accessor: 'author.name',
      },
      {
        Header: 'Category',
        accessor: 'category',
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
    ],
    []
  )

  return (
    <Layout>
      <div className="text-right pt-8 pb-4">
        <button
          type="button"
          className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          CREATE NEW +
        </button>
      </div>
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          {loading || !data.AllPosts ? (
            <Spinner />
          ) : (
            <Table data={data.AllPosts} columns={columns} />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default PostDashboard
