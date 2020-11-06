export interface User {
  id: string
  name: string
  email: string
  role: string
  avatar: string
  createdAt: number
  updatedAt: number
  count: number
}

export interface Post {
  text: string
  id: string
  title: string
  subtitle: string
  body: string
  featuredImage: string
  category: string
  tags: string[]
  author: User
  status: string
  createdAt: number
  updatedAt: number
}

export type AllPostResolver = () => {
  AllPosts: Post[]
}
