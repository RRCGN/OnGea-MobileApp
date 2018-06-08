import LoginService from './LoginService'
import Config from 'react-native-config'
const activitiesJSON = require('./temp/activities.json')
type Params = { [key: string]: string }

const urlWithToken = (url, token) => {
  return (`${url}&token=${token}`)
}

class ApiService {
  static BASE_URL = 'http://ongea-mockserver.apps.railslabs.com'
  static AUTH_PATH = '/auth'
  static ALL_PATH = '/data'
  static NOTIFICATION_PATH = '/notifications'

  static postData (data) {
    return {
      body: JSON.stringify(data),
      cache: 'no-cache',
      headers: { 'content-type': 'application/json' },
      method: 'POST'
    }
  }

  static getRequestData () {
    return {
      cache: 'no-cache',
      headers: { 'content-type': 'application/json' },
      method: 'GET'
    }
  }


  static async auth (name, pass) {
    console.log('auth.....')
    // name = pass = 'api' // debug
    return await fetch(Config.LOGIN_URI, this.postData({name, pass}))
      // .then((response) => response.json())
      .then((responseJson) => {
        return { ok: true, token: 'responseJson.csrf_token' , logoutToken: 'responseJson.logout_token', message: ''}
        // if (responseJson.csrf_token) {
        //   // success login :/
        //   return { ok: true, token: responseJson.csrf_token , logoutToken: responseJson.logout_token, message: ''}
        // } else {
        //   return { ok: false, token: '', logoutToken: '', message: responseJson.message }
        // }
      })
      .catch((error) =>{
        console.error(error)
      })
  }

  static async logout (logoutToken) {
    return await fetch(urlWithToken(Config.LOGOUT_URI, logoutToken), this.postData({}))
      .then((response) => {
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
    const { token } = await LoginService.getTokens()
    const response = await this.call(this.NOTIFICATION_PATH, { token })
    if (!response.ok) return { notifications: [] }

    const json = await response.json()
    return json
  }

  static all = async () => {

    // Since API not stable ATM, this could be a temp solution for developemnt
    // const {token} = await LoginService.getTokens()

    return await fetch(Config.DATA_URI, ApiService.getRequestData())
      .then((response) => {

        console.log(response)
        console.log(activitiesJSON)

        // #### This is where static files are loaded ####
        return ({ ok: true, data: activitiesJSON })

        // ### this is fetching content from API ###

        // if (!response.ok) return ({ ok: false, data: {} })
        // return response.json()

      })
      .then((data) => {
        return { ok: true, data }
      })
      .catch((error) =>{
        console.error(error)
        return { ok: false, data: {} }
      })
  }

  static _queryString(params: Params): string {
    return '?' + Object.getOwnPropertyNames(params)
      .map(key => [key, params[key]].join('='))
      .join('&')
  }
}



export default ApiService
