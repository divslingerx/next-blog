/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import gql from 'graphql-tag'
import { v2 } from 'cloudinary'

import uploadSingle from './uploadSingle'

const cloudinary = v2

export const uploadTypes = gql`
  scalar Upload

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  input TransformImageOptionsInput {
    width: Int
    height: Int
    crop: String
  }

  input CategoryInput {
    name: String
  }
  input TagInput {
    tag_name: String!
  }
  type Tag {
    tag_name: String!
  }

  input UploadOptionsInput {
    public_id: String
    folder: String
    use_filename: Boolean
    unique_filename: Boolean
    resource_type: String
    type: String
    access_mode: String
    discard_original_filename: Boolean
    overwrite: Boolean
    tags: [TagInput]
    colors: Boolean
    faces: Boolean
    quality_analysis: Boolean
    cinemegraph_analysis: Boolean
    image_metadata: Boolean
    phash: Boolean
    auto_tagging: Boolean
    categorization: [CategoryInput]
  }

  type UploadedImage {
    asset_id: String
    public_id: String
    version: Int
    version_id: String
    signature: String
    width: Int
    height: Int
    format: String
    resource_type: String
    created_at: String
    tags: [String]
    bytes: Int
    type: String
    etag: String
    placeholder: Boolean
    url: String
    secure_url: String
    original_filename: String
  }

  type ImageUrl {
    imageLink: String!
  }

  extend type Query {
    getImageUrl(
      imageName: String!
      transformOptions: TransformImageOptionsInput
    ): ImageUrl!
    uploads: [String]
  }

  extend type Mutation {
    uploadImage(
      file: Upload!
      uploadOptions: UploadOptionsInput
    ): UploadedImage!
  }
`

export const uploadResolvers = {
  Query: {
    getImageUrl: (_, { imageName, transformOptions }) => {
      let result = ''
      if (transformOptions) {
        result = cloudinary.url(imageName, { ...transformOptions })
      } else {
        result = cloudinary.url(imageName)
      }
      return {
        imageLink: result,
      }
    },
  },
  Mutation: {
    uploadImage: async (parent, { file }) => uploadSingle(file),
  },
}
