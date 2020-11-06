/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* 
  This utility function takes parameter of any type and returns true if it is contains a value. Objects are only checked by key length.
*/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isEmpty = (value: any): boolean => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0) ||
    // eslint-disable-next-line no-proto
    (value.__proto__ === File && value.name === '')
  )
}

export default isEmpty
