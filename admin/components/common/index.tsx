import * as React from 'react'
import Link from 'next/link'

export { default as Table } from './Table/Table'
export { default as TableFilters } from './Table/TableFilters'
export { default as TableFooter } from './Table/TableFooter'

export const Button: React.FC = ({ children }) => {
  return (
    <div className="text-right pt-8 pb-4">
      <button
        type="button"
        className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {children}
      </button>
    </div>
  )
}

export const LinkButton: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>
        <Button>{children}</Button>
      </a>
    </Link>
  )
}

export const DangerButton: React.FC = ({ children }) => {
  return (
    <div className="text-right pt-8 pb-4 mx-2">
      <button
        type="button"
        className=" bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {children}
      </button>
    </div>
  )
}

export const Container: React.FC = ({ children }) => {
  return <div className="container mx-auto px-6 py-8">{children}</div>
}

export const Divider: React.FC = () => (
  <hr className="border-b-2 border-gray-400 mb-8 mx-4" />
)

export const filterArrows: React.FC = () => {
  return (
    <div className="inline-block p-2">
      <div className="filter-asc" />
      <div className="filter-desc" />
    </div>
  )
}

export const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64" />
      <style jsx>{`
        .loader {
          border-top-color: #3498db;
          -webkit-animation: spinner 1.5s linear infinite;
          animation: spinner 1.5s linear infinite;
        }

        @-webkit-keyframes spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }

        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
