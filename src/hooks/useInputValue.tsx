import React from 'react'
import { useState } from 'react'

interface BindProps {
  value: string,
  onChangeText: (val: string) => void
}

type returnType = [string, BindProps, () => void]

const useInputValue = (initialValue: string = ''): returnType => {

  const [value, setValue] = useState(initialValue)

  const cleanValue = () => [
    setValue("")
  ]

  const onChangeText = (val: string) => {
    setValue(val)
  }

  const bind = {
    value,
    onChangeText
  }

  return [value, bind, cleanValue]
}

export default useInputValue