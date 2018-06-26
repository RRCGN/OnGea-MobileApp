import Config from 'react-native-config'
import { postRequestData } from './helpers'

const parseAndVerify = (response) => {
  console.log({response})
  if (response.status === 401) { console.error('Data return 401') }
  return response.json().then( json => {
    return response.ok ? json : Promise.reject(json)
  })
}

export const login = ({username, password}) => {
  return (
    fetch (
      Config.LOGIN_URI,
      postRequestData({name: username, pass: password}) // name & pass are backend specifics
    ).then( parseAndVerify )
  )
}

export const logout = (token) => {
  return (
    fetch (
      Config.LOGOUT_URI,
      postRequestData({token})
    ).then( parseAndVerify )
  )
}
