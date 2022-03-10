
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'

const useRouting = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const navigateTo = (path: string, options: any = {}) => {
    return () => navigation.navigate(path as never, options as never)
  }

  return {navigation, navigateTo, route}
}

export default useRouting