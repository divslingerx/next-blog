import * as React from 'react'

const useToggle = (initialValue: boolean): readonly [boolean, () => void] => {
  const [value, setValue] = React.useState(initialValue)
  const toggleValue = () => setValue(!value)
  // here, we freeze the array to a tuple
  return [value, toggleValue] as const
}

export default useToggle
