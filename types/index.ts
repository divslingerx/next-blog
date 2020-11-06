export interface User {
  id: string
  name: string
  emailVerified: boolean
  accountLocked: boolean
  avatar: string
  role: string
  count: number
}

export interface Post {
  id: string
  title: string
  subtitle: string
  body: string
  featuredImage: string
  category: string
  tags: string[]
  author: User
  status: string
}
