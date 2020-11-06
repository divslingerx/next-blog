/* eslint-disable no-control-regex */
import bcrypt from 'bcryptjs'
/* eslint-disable func-names */
import { Document, Model, model, models, Schema } from 'mongoose'
import { User } from '../../../generated/graphql'

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

// Create Schema
const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      validate: {
        validator(v) {
          return emailRegex.test(v)
        },

        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      select: false, // prevent password from being queryable
    },
    avatar: {
      type: String,
    },
    count: {
      type: Number,
      default: 0,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    accountLocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

// hash PW before saving user

UserSchema.pre<UserDocument>('save', function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const currentUser = this
  // if password is not change, go to next middleware
  if (!currentUser.isModified('password')) return next()
  bcrypt.genSalt(10, (err, salt) => {
    if (err) console.log(err)
    bcrypt.hash(currentUser.password, salt, (hashErr, hash) => {
      if (hashErr) {
        next(hashErr)
      }
      currentUser.password = hash
    })
  })
  return next()
})

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return cb(err)
    }

    return cb(null, isMatch)
  })
}

interface UserHiddenFields {
  password: string
  count: number
}
// the generated user type does not include the password because we never send it back
// THIS IS A GOOD THING!
// we just have to add it to the type so the password works with type recog in the hash pw func

// Not directly exported because it is not recommanded to
// use this interface direct unless necessarys since the
// type of `company` field is not deterministic
type UserBaseDocument = User & UserHiddenFields & Document

// Export this for strong typing
// export interface UserDocument extends UserBaseDocument {
//   // company: Company['_id']
// }

export type UserDocument = UserBaseDocument

// Export this for strong typing
export type UserPopulatedDocument = UserBaseDocument

// // Static methods
// UserSchema.statics.findMyCompany = async function (id) {
//   return this.findById(id).populate('company').exec()
// }

// For model
// export interface UserModel extends Model<UserDocument> {
//   findMyCompany(id: string): Promise<UserPopulatedDocument>
// }
export type UserModel = Model<UserDocument>

// Query middlewares
// UserSchema.post<Query<UserDocument>>('findOneAndUpdate', async function (doc) {
//   await updateCompanyReference(doc)
// })

// Default export
export default (models.User as Model<UserDocument, UserModel>) ||
  model<UserDocument, UserModel>('User', UserSchema)
