import * as React from 'react'
import { User } from '../../generated/graphql'

interface PostAuthorInfoProps {
  author: User
}

const PostAuthorInfo: React.FC<PostAuthorInfoProps> = ({ author }) => {
  return (
    <div className="flex w-full items-center font-sans px-4 py-12">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={author.avatar}
        alt="Avatar of Author"
      />
      <div className="flex-1 px-2">
        <p className="text-base font-bold md:text-xl leading-none mb-2">
          {author.name}
        </p>
        <p className="text-gray-600 text-xs md:text-base">
          Minimal Blog Tailwind CSS template by{' '}
          <a
            className="text-teal-500 no-underline hover:underline"
            href={`mailto:${author.email}`}
          >
            TailwindToolbox.com
          </a>
        </p>
      </div>
      <div className="justify-end">
        <button
          type="button"
          className="bg-transparent border border-gray-500 hover:border-teal-500 text-xs text-gray-500 hover:text-teal-500 font-bold py-2 px-4 rounded-full"
        >
          Read More
        </button>
      </div>
    </div>
  )
}

export default PostAuthorInfo
