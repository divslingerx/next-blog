/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import mongoose from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'

const connect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Mongo running at ${process.env.MONGO_URI}`))
    .catch((err) => console.log(err))
}

const connectDB = (handler: any) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (mongoose.connections[0].readyState !== 1) {
    await connect()
  }
  return handler(req, res)
}

const db = mongoose.connection
db.once('ready', () =>
  console.log(`connected to mongo on ${process.env.MONGO_URI}`)
)

export default connectDB
