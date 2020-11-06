import { gql } from '@apollo/client'

const UploadImage = gql`
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

export default UploadImage
