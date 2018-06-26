import Config from 'react-native-config'
import { getRequestData, parseAndVerify } from './helpers'

export const loadContent = (access_token) => {
  return (
    fetch (
      Config.DATA_URI,
      getRequestData()
    ).then( parseAndVerify )
  )
}
