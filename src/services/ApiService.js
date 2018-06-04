/**
 * Wrapper for all API related Requests.
 * @flow
 */

import { Platform } from 'react-native'
import LoginService from './LoginService'

interface ApiResponse<S> {
  json(): Promise<S>
}
type Params = { [key: string]: string }
type Auth = { ok: boolean, token?: string }
type All = any
type AuthApiResponse = ApiResponse<{ token: string }>

export default class ApiService {
  static BASE_URL = 'http://ongea-mockserver.apps.railslabs.com'
  static AUTH_PATH = '/auth'
  static ALL_PATH = '/data'
  static NOTIFICATION_PATH = '/notifications'

  static async auth(username: string, password: string): Promise<Auth> {
    const response = await this.call(this.AUTH_PATH, { username, password })
    if (!response.ok) return { ok: false }
    const json = await response.json()
    return { ok: true, token: json.token }
  }

  static async call(path: string, params: Params, opts?: any): Promise<Response> {
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
    const token = await LoginService.getToken()
    const response = await this.call(this.NOTIFICATION_PATH, { token })
    if (!response.ok) return { notifications: [] }

    const json = await response.json()
    return json
  }

  static async all(): Promise<All> {
    const token = await LoginService.getToken()
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