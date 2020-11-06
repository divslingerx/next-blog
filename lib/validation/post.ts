import Validator from 'validator'
import { PostInput } from '../../generated/graphql'

import isEmpty from './is-empty'

type CreatePostErrors = PostInput

module.exports = function validatePostInput(data: PostInput) {
  const errors = {} as CreatePostErrors

  if (!Validator.isLength(data.body, { min: 10, max: 300 })) {
    errors.body = 'Post must be between 10 and 300 characters'
  }

  if (Validator.isEmpty(data.title)) {
    errors.body = 'Title field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
