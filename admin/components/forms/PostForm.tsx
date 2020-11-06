import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Post } from '../../../types'

const FormGroup: React.FC = ({ children }) => (
  <div className="my-4 block">{children}</div>
)

interface Props {
  onSubmit?: (data: Post) => void
  post?: Post
}

const PostForm: React.FC<Props> = ({ onSubmit, post }) => {
  const { register, handleSubmit } = useForm<Post>()

  const handleFormSubmit = (data) => {
    console.log(JSON.stringify(data, null, 4))
    onSubmit(data)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-wrap justify-around mt-10 "
      >
        <div className="w-1/2 mx-1 ">
          <FormGroup>
            <label className="block" htmlFor="title">
              <span className="text-white">Title</span>
              <input
                name="title"
                defaultValue={post.title}
                ref={register({ required: true })}
                type="text"
                id="title"
                placeholder="Title"
                className="form-input mt-1 block w-full"
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label className="block" htmlFor="subtitle">
              <span className="text-white">Subtitle</span>
              <input
                className="form-input mt-1 block w-full"
                type="text"
                defaultValue={post.subtitle}
                placeholder="subtitle"
                name="subtitle"
                ref={register({ required: true })}
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label className="block" htmlFor="body">
              <span className="text-white">Body</span>
              <textarea
                name="body"
                defaultValue={post.body}
                ref={register({ required: true })}
                rows={10}
                cols={10}
                className="form-textarea mt-1 block w-full"
              />
            </label>
          </FormGroup>
          {/* End col 1 */}
        </div>
        <div id="w-1/2 mx-1">
          {/* STATUS */}
          <FormGroup>
            <span className="text-white">Post Status</span>
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center" htmlFor="status">
                  <input
                    type="radio"
                    className="form-radio"
                    name="status"
                    value="DRAFT"
                    ref={register({ required: true })}
                  />
                  <span className="ml-2">Draft</span>
                </label>
              </div>

              <div>
                <label className="inline-flex items-center" htmlFor="status">
                  <input
                    type="radio"
                    className="form-radio"
                    name="status"
                    value="PUBLISHED"
                    ref={register({ required: true })}
                  />
                  <span className="ml-2">Published</span>
                </label>
              </div>
              <div />
            </div>
          </FormGroup>
          {/* FEATURED IMAGE */}
          <FormGroup>
            <p>Featured Image</p>
            <div>
              <img
                className="object-cover object-center h-48 mb-4 mt-2"
                src={post.featuredImage}
                alt="featured"
              />
            </div>
            <div>
              {/* Here we hide the input holding the existing images url */}
              {post.featuredImage ? (
                <>
                  <input
                    type="text"
                    className="hidden"
                    name="featuredImage"
                    ref={register}
                  />
                  <button
                    type="button"
                    className="px-4 py-2 bold bg-indigo-800 text-white"
                  >
                    Replace Image
                  </button>
                </>
              ) : (
                <input
                  type="file"
                  accept="img"
                  ref={register}
                  name="featuredImage"
                />
              )}
            </div>
          </FormGroup>
          {/* CATEGORY */}
          <FormGroup>
            <label className="block" htmlFor="category">
              <span className="text-white">Category</span>
              <input
                name="category"
                ref={register({ required: true })}
                type="text"
                defaultValue={post.category}
                placeholder="Select Category"
                list="categories"
                className="form-select block w-full mt-1"
              />
              <datalist id="categories">
                <option>Volvo</option>
                <option>Saab</option>
                <option>Mercedes</option>
                <option>Audi</option>
              </datalist>
            </label>
          </FormGroup>
          {/* TAGS */}
          <FormGroup>
            <label className="block" htmlFor="tags">
              <span className="text-white">Tags</span>
              <input
                name="tags"
                defaultValue={post.tags}
                ref={register({ required: true })}
                type="text"
                id="tags"
                placeholder="Tags"
                className="form-input mt-1 block w-full"
              />
            </label>
          </FormGroup>
          {/* End call 2 */}
        </div>
        <button
          type="submit"
          className="w-full m-5 p-4  bg-indigo-800 text-white "
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default PostForm
