import Validator from 'validator'
import isEmpty from './is-empty'
import {} from '../../generated/graphql'

interface LoginErrors {
  email: string
  password: string
}

interface ValidationResults {
  errors: LoginErrors
  isValid: boolean
}

const validateLoginInput = (
  email: string,
  password: string
): ValidationResults => {
  const errors = {} as LoginErrors

  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required'
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}

export default validateLoginInput
