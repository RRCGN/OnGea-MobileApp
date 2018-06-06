import LoginService from './LoginService'
import Config from 'react-native-config'

type Params = { [key: string]: string }
type All = any
// type AuthApiResponse = ApiResponse<{ token: string }>

class ApiService {
  static BASE_URL = 'http://ongea-mockserver.apps.railslabs.com'
  static AUTH_PATH = '/auth'
  static ALL_PATH = '/data'
  static NOTIFICATION_PATH = '/notifications'

  static postData (data) {
    return {
      body: JSON.stringify(data),
      cache: 'no-cache',
      // credentials: 'same-origin', // include, same-origin, *omit
      headers: { 'content-type': 'application/json' },
      method: 'POST'
    }
  }


  static async auth (name, pass) {
    console.log('auth.....')
    return await fetch(Config.LOGIN_URI, this.postData({name, pass}))
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.csrf_token) {
          // success login :/
          return { ok: true, token: responseJson.csrf_token , logoutToken: responseJson.logout_token, message: ''}
        } else {
          return { ok: false, token: '', logoutToken: '', message: responseJson.message }
        }
      })
      .catch((error) =>{
        console.error(error)
      })
  }

  static async logout (logoutToken) {
    return await fetch(Config.LOGOUT_URI + `&token=${logoutToken}`)
      .then((response) => {
        console.log({response})
        return (response.status == 204)
      })
      .catch((error) =>{
        console.error(error)
        return false
      })
  }

  static call = async (path, params, opts) => {
    const qs = this._queryString(params)
    let response

    console.info('API', `${this.BASE_URL}${path}${qs}`, opts)

    try {
      response = await fetch(`${this.BASE_URL}${path}${qs}`, opts)
    } catch (error) {
      console.log('Something went wrong while sending the request', error)
      response = { ok: false }
    }

    return response
  }

  static async notifications() {
    const token = await LoginService.getTokens()
    const response = await this.call(this.NOTIFICATION_PATH, { token })
    if (!response.ok) return { notifications: [] }

    const json = await response.json()
    return json
  }

  static async all(): Promise<All> {
    const token = await LoginService.getTokens()
    const response = await this.call(this.ALL_PATH, { token })
    if (!response.ok) return { ok: false }
    const json = await response.json()
    return { ok: true, data: json }
  }

  static _queryString(params: Params): string {
    return '?' + Object.getOwnPropertyNames(params)
      .map(key => [key, params[key]].join('='))
      .join('&')
  }
}



export default ApiService
