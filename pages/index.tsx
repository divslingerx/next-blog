import * as React from 'react'
import Link from 'next/link'
import Header from '../Components/Layout/Header'
import NewsletterSignUp from '../Components/NewsletterSignUp'
import Footer from '../Components/Layout/Footer'
import { useAllPostsQuery, Post } from '../generated/graphql'

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4 shadow-sm  rounded-md ">
      <img
        className="object-fit w-auto"
        src={post.featuredImage}
        alt="featured"
      />
      <div className="px-6 py-4">
        <Link href={`/post/${post.slug}`}>
          <div className="font-bold text-xl mb-2">{post.title}</div>
        </Link>

        <p className="text-gray-700 text-base">{post.subtitle}</p>
      </div>
      <div className="px-6 py-4">
        {post.tags &&
          post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {`#${tag}`}
            </span>
          ))}
      </div>
    </div>
  )
}

const HomePage: React.FC = () => {
  const { data, error, loading } = useAllPostsQuery()

  React.useEffect(() => {
    console.table({ data, error })
  }, [data, error])
  return (
    <div>
      <Header />
      <div className="mb-4 flex flex-wrap">
        {error && (
          <p>Sorry, something went wrong while trying to load the posts</p>
        )}
        {!loading &&
          data.AllPosts?.map((post) => (
            <PostCard key={post.id} post={post as Post} />
          ))}
      </div>
      <NewsletterSignUp />
      <Footer />
    </div>
  )
}

export default HomePage
