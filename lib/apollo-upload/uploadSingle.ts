/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// eslint-disable-next-line @typescript-eslint/no-var-requires
import cloudinaryLib from 'cloudinary'

const cloudinary = cloudinaryLib.v2

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadSingle = async (
  file: any,
  folder = 'uploads'
): Promise<unknown> => {
  try {
    return await new Promise((resolve, reject): void => {
      const { createReadStream } = file
      const onStreamFinish = (err: Error, res: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      }
      const stream = cloudinary.uploader.upload_stream(
        { folder },
        onStreamFinish
      )
      createReadStream().pipe(stream)
    }).catch((err) => console.log(err))
  } catch (err) {
    console.log(err)
  }
}

export default uploadSingle
