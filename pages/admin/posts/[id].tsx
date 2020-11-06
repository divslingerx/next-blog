import * as React from 'react'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { PostForm, Layout, Spinner } from '../../../admin'

import { UpdatePost } from '../../../lib/apollo/mutations'
import { GET_POST_BY_ID } from '../../../lib/apollo/queries'
import { Post } from '../../../types'

const EditPostPage: React.FC = () => {
  const { query } = useRouter()
  const { loading, data } = useQuery(GET_POST_BY_ID, {
    variables: { id: query.id },
  })

  const router = useRouter()
  const [createPost] = useMutation(UpdatePost, {
    onCompleted: () => router.push('/admin/post'),
  })
  const handleOnSubmit = (updatedPost: Post) => {
    createPost({ variables: { post: updatedPost } }).catch((err: Error) =>
      console.error(err)
    )
  }

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <PostForm onSubmit={handleOnSubmit} post={data.PostById} />
      )}
    </Layout>
  )
}

export default EditPostPage
