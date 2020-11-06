import * as React from 'react'

const AdminStats: React.FC<{ userCount: number }> = ({ userCount }) => {
  return (
    <div className="mt-4">
      <div className="flex flex-wrap -mx-6">
        <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 28 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                  fill="currentColor"
                />
                <path
                  d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                  fill="currentColor"
                />
                <path
                  d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                  fill="currentColor"
                />
                <path
                  d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                  fill="currentColor"
                />
                <path
                  d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                  fill="currentColor"
                />
                <path
                  d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">
                {userCount}
              </h4>
              <div className="text-gray-500">New Users</div>
            </div>
          </div>
        </div>

        <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H7Z"
                  fill="currentColor"
                />
                <path
                  d="M4 7C4 6.44772 4.44772 6 5 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H5C4.44772 8 4 7.55228 4 7Z"
                  fill="currentColor"
                />
                <path
                  d="M2 11C2 9.89543 2.89543 9 4 9H16C17.1046 9 18 9.89543 18 11V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V11Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">200,521</h4>
              <div className="text-gray-500">Total Pages</div>
            </div>
          </div>
        </div>

        <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">215,542</h4>
              <div className="text-gray-500">Total Posts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminStats
