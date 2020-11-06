import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '../../Components/Layout/Header'
import Footer from '../../Components/Layout/Footer'
import { Divider } from '../../admin/components/common'
import NewsletterSignUp from '../../Components/NewsletterSignUp'
import PostAuthorInfo from '../../Components/PostPage/PostAuthorInfo'
import { useGetPostBySlugQuery, Post } from '../../generated/graphql'

// const POST_BY_SLUG_QUERY = gql`
//   query GetPostBySlug($slug: String!) {
//     GetPostBySlug(slug: $slug) {
//       id
//       slug
//       title
//       subtitle
//       featuredImage
//       category
//       createdAt
//       updatedAt
//       body
//       author {
//         id
//         name
//         avatar
//       }
//     }
//   }
// `

const PostPage: React.FC = () => {
  const router = useRouter()
  const { data, error, loading } = useGetPostBySlugQuery({
    variables: { slug: router.query.slug as string },
  })

  if (loading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <p>Sorry, something went wrong while requesting this post</p>
  }

  const post = data.GetPostBySlug as Post

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Header />

      {/* <!--Container--> */}
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div
          className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
          style={{ fontFamily: 'Georgia,serif' }}
        >
          {/* <!--Title--> */}
          <div className="font-sans">
            <span className="text-base md:text-sm text-teal-500 font-bold">
              <Link href="/">
                <a className="text-base md:text-sm text-teal-500 font-bold no-underline hover:underline">
                  &lt; BACK TO BLOG
                </a>
              </Link>
            </span>
            <h1 className="text-right font-bold font-sans break-normal text-gray-900 pt-6 pb-1 text-3xl md:text-4xl">
              {post.title}
            </h1>
            <p className="text-right text-sm md:text-base font-normal text-gray-600">
              Published {new Date(Number('1594322492007')).toLocaleDateString()}
              {post.updatedAt !== post.createdAt &&
                `Updated ${post.updatedAt.toLocaleDateString()}`}
            </p>
            <img
              className="object-fit w-full"
              src={post.featuredImage}
              alt="featured"
            />
          </div>

          {/* <!--Post Content--> */}

          {/* <!--Lead Para--> */}
          <p className="py-6">{post.body}</p>

          {/* <!--/ Post Content--> */}
        </div>

        {/* <!--Tags --> */}
        <div className="text-base md:text-sm text-gray-500 px-4 py-6">
          Tags:{' '}
          <a
            href="www.google.com"
            className="text-base md:text-sm text-teal-500 no-underline hover:underline"
          >
            Link
          </a>{' '}
          .{' '}
          <a
            href="www.google.com"
            className="text-base md:text-sm text-teal-500 no-underline hover:underline"
          >
            Link
          </a>
        </div>

        {/* <!--Divider--> */}
        <Divider />

        {/* <!--Subscribe-->	 */}
        <NewsletterSignUp />

        {/* <!-- /Subscribe--> */}

        {/* <!--Author--> */}
        <PostAuthorInfo author={post.author} />
        {/* <!--/Author--> */}

        {/* <!--Divider--> */}
        <Divider />

        {/* <!--Next & Prev Links--> */}
        <div className="font-sans flex justify-between content-center px-4 pb-12">
          <div className="text-left">
            <span className="text-xs md:text-sm font-normal text-gray-600">
              &lt; Previous Post
            </span>
            <br />
            <p>
              <a
                href="www.google.com"
                className="break-normal text-base md:text-sm text-teal-500 font-bold no-underline hover:underline"
              >
                Blog title
              </a>
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs md:text-sm font-normal text-gray-600">
              Next Post &gt;
            </span>
            <br />
            <p>
              <a
                href="www.google.com"
                className="break-normal text-base md:text-sm text-teal-500 font-bold no-underline hover:underline"
              >
                Blog title
              </a>
            </p>
          </div>
        </div>

        {/* <!--/Next & Prev Links--> */}
      </div>
      {/* <!--/container--> */}

      <Footer />
    </div>
  )
}

export default PostPage
