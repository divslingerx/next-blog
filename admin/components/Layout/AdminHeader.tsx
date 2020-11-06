import * as React from 'react'
import useToggle from '../../hooks/useToggle'

interface AdminHeaderProps {
  userAvatar: string
  onSignOut: () => void
  onBurgerclick: (e: React.MouseEvent) => void
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  onBurgerclick,
  onSignOut,
  userAvatar,
}) => {
  const [dropdownOpen, toggleDropdown] = useToggle(false)

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
        <button
          type="button"
          onClick={onBurgerclick}
          className="text-gray-500 focus:outline-none lg:hidden"
          aria-label="open-sidebar"
          tabIndex={0}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="relative mx-4 lg:mx-0">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <input
            className="block w-54 sm:w-64 rounded-md pl-10  py-3 pr-4 focus:border-indigo-600"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex items-center">
        <button
          className="flex mx-4 text-gray-600 focus:outline-none"
          type="button"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="relative">
          <button
            type="button"
            aria-label="open-dropwdown"
            onClick={toggleDropdown}
            className="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
          >
            <img
              className="h-full w-full object-cover"
              src={userAvatar}
              alt="Your avatar"
            />
          </button>

          {/* <div x-show="dropdownOpen" onClick={toggleDropdown} className="fixed inset-0 h-full w-full z-10" style={{display: "none"}}></div> */}

          <div
            onClick={toggleDropdown}
            aria-hidden="true"
            onKeyDown={toggleDropdown}
            className={`${
              !dropdownOpen && 'hidden'
            } absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20`}
          >
            <a
              href="www.google.com"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >
              Profile
            </a>
            <a
              href="www.google.com"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >
              Products
            </a>
            <a
              href="www.google.com"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
              onClick={onSignOut}
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader
