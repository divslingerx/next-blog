import * as React from 'react'

const useTrueFalse = (
  intiialValue: boolean
): readonly [boolean, () => void, () => void] => {
  const [value, setValue] = React.useState(intiialValue)
  const setTrue = () => setValue(true)
  const setFalse = () => setValue(false)
  return [value, setTrue, setFalse] as const
}

export default useTrueFalse
