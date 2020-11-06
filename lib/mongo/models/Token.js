import mongoose, { Schema } from 'mongoose'
import randomString from '../../utils/randomString'

// Create Schema
const TokenSchema = new Schema({
  token: {
    type: String,
    default: randomString(5),
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  expiresAt: {
    type: Date,
    index: { unique: true, expires: '1d' },
  },
})

export default mongoose.models.Token || mongoose.model('Token', TokenSchema)
