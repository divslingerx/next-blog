/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { useTable } from 'react-table'
import TableFilters from './TableFilters'
import TableFooter from './TableFooter'

// const SelectAllHeader = () => {
//   return (
//     <th className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 bg-gray-900">
//       <input
//         type="checkbox"
//         className="form-checkbox border-1 border-gray-600 h-4 w-4"
//       />
//     </th>
//   )
// }

const Table: React.FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any
}> = ({ data, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <>
      <TableFilters />
      <table
        {...getTableProps()}
        className="text-black w-full border-collapse flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5"
      >
        <thead>
          {/* For Each item in data we need to create the headers to help with responsive design */}
          {data.map(() => {
            return (
              <>
                {
                  // Loop over the header rows
                  headerGroups.map((headerGroup) => (
                    // Apply the header row props
                    <tr
                      key={Math.random()}
                      {...headerGroup.getHeaderGroupProps()}
                      className="bg-teal-400 flex flex-col flex-no-wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
                    >
                      {/* Create select all input  */}

                      {
                        // Loop over the headers in each row
                        headerGroup.headers.map((column) => (
                          // Apply the header cell props
                          <th
                            key={Math.random()}
                            {...column.getHeaderProps()}
                            className="p-3 text-left"
                          >
                            {
                              // Render the header
                              column.render('Header')
                            }
                          </th>
                        ))
                      }
                    </tr>
                  ))
                }
              </>
            )
          })}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()} className="flex-1 sm:flex-none">
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <tr
                  key={Math.random()}
                  {...row.getRowProps()}
                  className="flex flex-col flex-no-wrap sm:table-row mb-2 sm:mb-0"
                >
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td
                          key={Math.random()}
                          {...cell.getCellProps()}
                          className="border-grey-light border hover:bg-gray-100 p-3"
                        >
                          {cell.render('Cell')}
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <TableFooter />
      <style jsx>{`
        @media (min-width: 640px) {
          table {
            display: inline-table !important;
          }

          thead tr:not(:first-child) {
            display: none;
          }
        }

        td:not(:last-child) {
          border-bottom: 0;
        }

        th:not(:last-child) {
          border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  )
}

export default Table
