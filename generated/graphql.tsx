/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable camelcase */

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  Upload: any
}

export type Query = {
  __typename?: 'Query'
  _empty?: Maybe<Scalars['String']>
  getImageUrl: ImageUrl
  uploads?: Maybe<Array<Maybe<Scalars['String']>>>
  UserById?: Maybe<User>
  AllUsers?: Maybe<Array<Maybe<User>>>
  UserCount?: Maybe<Scalars['Int']>
  Me?: Maybe<User>
  AllPosts?: Maybe<Array<Maybe<Post>>>
  GetPostBySlug: Post
}

export type QueryGetImageUrlArgs = {
  imageName: Scalars['String']
  transformOptions?: Maybe<TransformImageOptionsInput>
}

export type QueryUserByIdArgs = {
  id: Scalars['ID']
}

export type QueryAllUsersArgs = {
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type QueryAllPostsArgs = {
  limit?: Maybe<Scalars['Int']>
}

export type QueryGetPostBySlugArgs = {
  slug?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  _empty?: Maybe<Scalars['String']>
  uploadImage: UploadedImage
  InvalidateTokens: Scalars['Boolean']
  RegisterUser: User
  SignIn: User
  SignInWithToken: User
  SendVerificationEmail: Scalars['Boolean']
  VerifyEmail?: Maybe<User>
  SignOut: Scalars['Boolean']
  CreatePost: Post
  UpdatePost: Post
  DeletePost: Post
}

export type MutationUploadImageArgs = {
  file: Scalars['Upload']
  uploadOptions?: Maybe<UploadOptionsInput>
}

export type MutationRegisterUserArgs = {
  name: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationSignInArgs = {
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
}

export type MutationSignInWithTokenArgs = {
  token?: Maybe<Scalars['String']>
}

export type MutationVerifyEmailArgs = {
  code: Scalars['String']
}

export type MutationCreatePostArgs = {
  post?: Maybe<PostInput>
}

export type MutationUpdatePostArgs = {
  postId: Scalars['ID']
  post?: Maybe<PostInput>
}

export type MutationDeletePostArgs = {
  id?: Maybe<Scalars['ID']>
}

export type File = {
  __typename?: 'File'
  filename: Scalars['String']
  mimetype: Scalars['String']
  encoding: Scalars['String']
}

export type TransformImageOptionsInput = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  crop?: Maybe<Scalars['String']>
}

export type CategoryInput = {
  name?: Maybe<Scalars['String']>
}

export type TagInput = {
  tag_name: Scalars['String']
}

export type Tag = {
  __typename?: 'Tag'
  tag_name: Scalars['String']
}

export type UploadOptionsInput = {
  public_id?: Maybe<Scalars['String']>
  folder?: Maybe<Scalars['String']>
  use_filename?: Maybe<Scalars['Boolean']>
  unique_filename?: Maybe<Scalars['Boolean']>
  resource_type?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  access_mode?: Maybe<Scalars['String']>
  discard_original_filename?: Maybe<Scalars['Boolean']>
  overwrite?: Maybe<Scalars['Boolean']>
  tags?: Maybe<Array<Maybe<TagInput>>>
  colors?: Maybe<Scalars['Boolean']>
  faces?: Maybe<Scalars['Boolean']>
  quality_analysis?: Maybe<Scalars['Boolean']>
  cinemegraph_analysis?: Maybe<Scalars['Boolean']>
  image_metadata?: Maybe<Scalars['Boolean']>
  phash?: Maybe<Scalars['Boolean']>
  auto_tagging?: Maybe<Scalars['Boolean']>
  categorization?: Maybe<Array<Maybe<CategoryInput>>>
}

export type UploadedImage = {
  __typename?: 'UploadedImage'
  asset_id?: Maybe<Scalars['String']>
  public_id?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['Int']>
  version_id?: Maybe<Scalars['String']>
  signature?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  format?: Maybe<Scalars['String']>
  resource_type?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  bytes?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['String']>
  etag?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['Boolean']>
  url?: Maybe<Scalars['String']>
  secure_url?: Maybe<Scalars['String']>
  original_filename?: Maybe<Scalars['String']>
}

export type ImageUrl = {
  __typename?: 'ImageUrl'
  imageLink: Scalars['String']
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  email: Scalars['String']
  role?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
  emailVerified: Scalars['Boolean']
  accountLocked: Scalars['Boolean']
}

export enum Status {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export type PostInput = {
  title: Scalars['String']
  slug: Scalars['String']
  subtitle?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  body: Scalars['String']
  featuredImage: Scalars['Upload']
  status: Status
  category?: Maybe<Scalars['String']>
}

export type Post = {
  __typename?: 'Post'
  id: Scalars['ID']
  slug: Scalars['String']
  title: Scalars['String']
  subtitle: Scalars['String']
  body: Scalars['String']
  featuredImage?: Maybe<Scalars['String']>
  category: Scalars['String']
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  status: Status
  author: User
  createdAt: Scalars['Date']
  updatedAt: Scalars['Date']
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  Mutation: ResolverTypeWrapper<{}>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Date: ResolverTypeWrapper<Scalars['Date']>
  Upload: ResolverTypeWrapper<Scalars['Upload']>
  File: ResolverTypeWrapper<File>
  TransformImageOptionsInput: TransformImageOptionsInput
  CategoryInput: CategoryInput
  TagInput: TagInput
  Tag: ResolverTypeWrapper<Tag>
  UploadOptionsInput: UploadOptionsInput
  UploadedImage: ResolverTypeWrapper<UploadedImage>
  ImageUrl: ResolverTypeWrapper<ImageUrl>
  User: ResolverTypeWrapper<User>
  Status: Status
  PostInput: PostInput
  Post: ResolverTypeWrapper<Post>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {}
  String: Scalars['String']
  ID: Scalars['ID']
  Int: Scalars['Int']
  Mutation: {}
  Boolean: Scalars['Boolean']
  Date: Scalars['Date']
  Upload: Scalars['Upload']
  File: File
  TransformImageOptionsInput: TransformImageOptionsInput
  CategoryInput: CategoryInput
  TagInput: TagInput
  Tag: Tag
  UploadOptionsInput: UploadOptionsInput
  UploadedImage: UploadedImage
  ImageUrl: ImageUrl
  User: User
  PostInput: PostInput
  Post: Post
}>

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  getImageUrl?: Resolver<
    ResolversTypes['ImageUrl'],
    ParentType,
    ContextType,
    RequireFields<QueryGetImageUrlArgs, 'imageName'>
  >
  uploads?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  UserById?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByIdArgs, 'id'>
  >
  AllUsers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryAllUsersArgs, never>
  >
  UserCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  Me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  AllPosts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Post']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryAllPostsArgs, never>
  >
  GetPostBySlug?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPostBySlugArgs, never>
  >
}>

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  uploadImage?: Resolver<
    ResolversTypes['UploadedImage'],
    ParentType,
    ContextType,
    RequireFields<MutationUploadImageArgs, 'file'>
  >
  InvalidateTokens?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >
  RegisterUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationRegisterUserArgs, 'name' | 'email' | 'password'>
  >
  SignIn?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationSignInArgs, never>
  >
  SignInWithToken?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationSignInWithTokenArgs, never>
  >
  SendVerificationEmail?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >
  VerifyEmail?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationVerifyEmailArgs, 'code'>
  >
  SignOut?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  CreatePost?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePostArgs, never>
  >
  UpdatePost?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePostArgs, 'postId'>
  >
  DeletePost?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<MutationDeletePostArgs, never>
  >
}>

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type FileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']
> = ResolversObject<{
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']
> = ResolversObject<{
  tag_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UploadedImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UploadedImage'] = ResolversParentTypes['UploadedImage']
> = ResolversObject<{
  asset_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  public_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  version_id?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  signature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  resource_type?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  created_at?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  tags?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  bytes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  etag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  placeholder?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  secure_url?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  original_filename?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ImageUrlResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ImageUrl'] = ResolversParentTypes['ImageUrl']
> = ResolversObject<{
  imageLink?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  emailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  accountLocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PostResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  subtitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  featuredImage?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  tags?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = any> = ResolversObject<{
  Query?: QueryResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Date?: GraphQLScalarType
  Upload?: GraphQLScalarType
  File?: FileResolvers<ContextType>
  Tag?: TagResolvers<ContextType>
  UploadedImage?: UploadedImageResolvers<ContextType>
  ImageUrl?: ImageUrlResolvers<ContextType>
  User?: UserResolvers<ContextType>
  Post?: PostResolvers<ContextType>
}>

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>

export const PostPartsFragmentDoc = gql`
  fragment PostParts on Post {
    title
    subtitle
    featuredImage
    category
    tags
    body
    status
  }
`
export const UserFieldsFragmentDoc = gql`
  fragment userFields on User {
    id
    name
    email
    createdAt
    updatedAt
    avatar
    accountLocked
    emailVerified
  }
`
export const UserPartsFragmentDoc = gql`
  fragment userParts on User {
    accountLocked
    avatar
    createdAt
    email
    emailVerified
    id
    name
    updatedAt
  }
`
export const Create_PostDocument = gql`
  mutation CREATE_POST($post: PostInput) {
    CreatePost(post: $post) {
      id
      title
      subtitle
      body
      category
      featuredImage
      author {
        id
        name
      }
    }
  }
`
export type Create_PostMutationFn = Apollo.MutationFunction<
  Create_PostMutation,
  Create_PostMutationVariables
>

/**
 * __useCreate_PostMutation__
 *
 * To run a mutation, you first call `useCreate_PostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_PostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreate_PostMutation({
 *   variables: {
 *      post: // value for 'post'
 *   },
 * });
 */
export function useCreate_PostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Create_PostMutation,
    Create_PostMutationVariables
  >
) {
  return Apollo.useMutation<Create_PostMutation, Create_PostMutationVariables>(
    Create_PostDocument,
    baseOptions
  )
}
export type Create_PostMutationHookResult = ReturnType<
  typeof useCreate_PostMutation
>
export type Create_PostMutationResult = Apollo.MutationResult<
  Create_PostMutation
>
export type Create_PostMutationOptions = Apollo.BaseMutationOptions<
  Create_PostMutation,
  Create_PostMutationVariables
>
export const DeletePostDocument = gql`
  mutation DeletePost($id: ID!) {
    DeletePost(id: $id) {
      id
    }
  }
`
export type DeletePostMutationFn = Apollo.MutationFunction<
  DeletePostMutation,
  DeletePostMutationVariables
>

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePostMutation,
    DeletePostMutationVariables
  >
) {
  return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(
    DeletePostDocument,
    baseOptions
  )
}
export type DeletePostMutationHookResult = ReturnType<
  typeof useDeletePostMutation
>
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<
  DeletePostMutation,
  DeletePostMutationVariables
>
export const SignInDocument = gql`
  mutation SignIn($email: String!, $password: String!) {
    SignIn(email: $email, password: $password) {
      ...userParts
    }
  }
  ${UserPartsFragmentDoc}
`
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >
) {
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    baseOptions
  )
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>
export const UpdatePostDocument = gql`
  mutation UpdatePost($postId: ID!, $post: PostInput) {
    UpdatePost(postId: $postId, post: $post) {
      id
    }
  }
`
export type UpdatePostMutationFn = Apollo.MutationFunction<
  UpdatePostMutation,
  UpdatePostMutationVariables
>

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      post: // value for 'post'
 *   },
 * });
 */
export function useUpdatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >
) {
  return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(
    UpdatePostDocument,
    baseOptions
  )
}
export type UpdatePostMutationHookResult = ReturnType<
  typeof useUpdatePostMutation
>
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<
  UpdatePostMutation,
  UpdatePostMutationVariables
>
export const UploadImageDocument = gql`
  mutation UploadImage($file: Upload!, $uploadOptions: UploadOptionsInput) {
    uploadImage(file: $file, uploadOptions: $uploadOptions) {
      asset_id
      public_id
      version
      version_id
      signature
      width
      height
      format
      resource_type
      created_at
      tags
      bytes
      type
      etag
      placeholder
      url
      secure_url
      original_filename
    }
  }
`
export type UploadImageMutationFn = Apollo.MutationFunction<
  UploadImageMutation,
  UploadImageMutationVariables
>

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      file: // value for 'file'
 *      uploadOptions: // value for 'uploadOptions'
 *   },
 * });
 */
export function useUploadImageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UploadImageMutation,
    UploadImageMutationVariables
  >
) {
  return Apollo.useMutation<UploadImageMutation, UploadImageMutationVariables>(
    UploadImageDocument,
    baseOptions
  )
}
export type UploadImageMutationHookResult = ReturnType<
  typeof useUploadImageMutation
>
export type UploadImageMutationResult = Apollo.MutationResult<
  UploadImageMutation
>
export type UploadImageMutationOptions = Apollo.BaseMutationOptions<
  UploadImageMutation,
  UploadImageMutationVariables
>
export const DbCountsDocument = gql`
  query DBCounts {
    UserCount
  }
`

/**
 * __useDbCountsQuery__
 *
 * To run a query within a React component, call `useDbCountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDbCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDbCountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDbCountsQuery(
  baseOptions?: Apollo.QueryHookOptions<DbCountsQuery, DbCountsQueryVariables>
) {
  return Apollo.useQuery<DbCountsQuery, DbCountsQueryVariables>(
    DbCountsDocument,
    baseOptions
  )
}
export function useDbCountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DbCountsQuery,
    DbCountsQueryVariables
  >
) {
  return Apollo.useLazyQuery<DbCountsQuery, DbCountsQueryVariables>(
    DbCountsDocument,
    baseOptions
  )
}
export type DbCountsQueryHookResult = ReturnType<typeof useDbCountsQuery>
export type DbCountsLazyQueryHookResult = ReturnType<
  typeof useDbCountsLazyQuery
>
export type DbCountsQueryResult = Apollo.QueryResult<
  DbCountsQuery,
  DbCountsQueryVariables
>
export const AllPostsDocument = gql`
  query AllPosts {
    AllPosts {
      id
      title
      subtitle
      featuredImage
      category
      status
      tags
      slug
      updatedAt
      author {
        id
        name
        avatar
      }
    }
  }
`

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>
) {
  return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(
    AllPostsDocument,
    baseOptions
  )
}
export function useAllPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllPostsQuery,
    AllPostsQueryVariables
  >
) {
  return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(
    AllPostsDocument,
    baseOptions
  )
}
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>
export type AllPostsLazyQueryHookResult = ReturnType<
  typeof useAllPostsLazyQuery
>
export type AllPostsQueryResult = Apollo.QueryResult<
  AllPostsQuery,
  AllPostsQueryVariables
>
export const AllUsersDocument = gql`
  query AllUsers {
    AllUsers {
      id
      name
      email
      role
      avatar
    }
  }
`

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>
) {
  return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(
    AllUsersDocument,
    baseOptions
  )
}
export function useAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllUsersQuery,
    AllUsersQueryVariables
  >
) {
  return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(
    AllUsersDocument,
    baseOptions
  )
}
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>
export type AllUsersLazyQueryHookResult = ReturnType<
  typeof useAllUsersLazyQuery
>
export type AllUsersQueryResult = Apollo.QueryResult<
  AllUsersQuery,
  AllUsersQueryVariables
>
export const MeDocument = gql`
  query Me {
    Me {
      ...userFields
    }
  }
  ${UserFieldsFragmentDoc}
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
export const GetPostBySlugDocument = gql`
  query GetPostBySlug($slug: String!) {
    GetPostBySlug(slug: $slug) {
      ...PostParts
    }
  }
  ${PostPartsFragmentDoc}
`

/**
 * __useGetPostBySlugQuery__
 *
 * To run a query within a React component, call `useGetPostBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPostBySlugQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPostBySlugQuery,
    GetPostBySlugQueryVariables
  >
) {
  return Apollo.useQuery<GetPostBySlugQuery, GetPostBySlugQueryVariables>(
    GetPostBySlugDocument,
    baseOptions
  )
}
export function useGetPostBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostBySlugQuery,
    GetPostBySlugQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetPostBySlugQuery, GetPostBySlugQueryVariables>(
    GetPostBySlugDocument,
    baseOptions
  )
}
export type GetPostBySlugQueryHookResult = ReturnType<
  typeof useGetPostBySlugQuery
>
export type GetPostBySlugLazyQueryHookResult = ReturnType<
  typeof useGetPostBySlugLazyQuery
>
export type GetPostBySlugQueryResult = Apollo.QueryResult<
  GetPostBySlugQuery,
  GetPostBySlugQueryVariables
>

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
}
export default result

export type PostPartsFragment = { __typename?: 'Post' } & Pick<
  Post,
  | 'title'
  | 'subtitle'
  | 'featuredImage'
  | 'category'
  | 'tags'
  | 'body'
  | 'status'
>

export type UserFieldsFragment = { __typename?: 'User' } & Pick<
  User,
  | 'id'
  | 'name'
  | 'email'
  | 'createdAt'
  | 'updatedAt'
  | 'avatar'
  | 'accountLocked'
  | 'emailVerified'
>

export type UserPartsFragment = { __typename?: 'User' } & Pick<
  User,
  | 'accountLocked'
  | 'avatar'
  | 'createdAt'
  | 'email'
  | 'emailVerified'
  | 'id'
  | 'name'
  | 'updatedAt'
>

export type Create_PostMutationVariables = Exact<{
  post?: Maybe<PostInput>
}>

export type Create_PostMutation = { __typename?: 'Mutation' } & {
  CreatePost: { __typename?: 'Post' } & Pick<
    Post,
    'id' | 'title' | 'subtitle' | 'body' | 'category' | 'featuredImage'
  > & { author: { __typename?: 'User' } & Pick<User, 'id' | 'name'> }
}

export type DeletePostMutationVariables = Exact<{
  id: Scalars['ID']
}>

export type DeletePostMutation = { __typename?: 'Mutation' } & {
  DeletePost: { __typename?: 'Post' } & Pick<Post, 'id'>
}

export type SignInMutationVariables = Exact<{
  email: Scalars['String']
  password: Scalars['String']
}>

export type SignInMutation = { __typename?: 'Mutation' } & {
  SignIn: { __typename?: 'User' } & UserPartsFragment
}

export type UpdatePostMutationVariables = Exact<{
  postId: Scalars['ID']
  post?: Maybe<PostInput>
}>

export type UpdatePostMutation = { __typename?: 'Mutation' } & {
  UpdatePost: { __typename?: 'Post' } & Pick<Post, 'id'>
}

export type UploadImageMutationVariables = Exact<{
  file: Scalars['Upload']
  uploadOptions?: Maybe<UploadOptionsInput>
}>

export type UploadImageMutation = { __typename?: 'Mutation' } & {
  uploadImage: { __typename?: 'UploadedImage' } & Pick<
    UploadedImage,
    | 'asset_id'
    | 'public_id'
    | 'version'
    | 'version_id'
    | 'signature'
    | 'width'
    | 'height'
    | 'format'
    | 'resource_type'
    | 'created_at'
    | 'tags'
    | 'bytes'
    | 'type'
    | 'etag'
    | 'placeholder'
    | 'url'
    | 'secure_url'
    | 'original_filename'
  >
}

export type DbCountsQueryVariables = Exact<{ [key: string]: never }>

export type DbCountsQuery = { __typename?: 'Query' } & Pick<Query, 'UserCount'>

export type AllPostsQueryVariables = Exact<{ [key: string]: never }>

export type AllPostsQuery = { __typename?: 'Query' } & {
  AllPosts?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Post' } & Pick<
          Post,
          | 'id'
          | 'title'
          | 'subtitle'
          | 'featuredImage'
          | 'category'
          | 'status'
          | 'tags'
          | 'slug'
          | 'updatedAt'
        > & {
            author: { __typename?: 'User' } & Pick<
              User,
              'id' | 'name' | 'avatar'
            >
          }
      >
    >
  >
}

export type AllUsersQueryVariables = Exact<{ [key: string]: never }>

export type AllUsersQuery = { __typename?: 'Query' } & {
  AllUsers?: Maybe<
    Array<
      Maybe<
        { __typename?: 'User' } & Pick<
          User,
          'id' | 'name' | 'email' | 'role' | 'avatar'
        >
      >
    >
  >
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & {
  Me?: Maybe<{ __typename?: 'User' } & UserFieldsFragment>
}

export type GetPostBySlugQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type GetPostBySlugQuery = { __typename?: 'Query' } & {
  GetPostBySlug: { __typename?: 'Post' } & PostPartsFragment
}
