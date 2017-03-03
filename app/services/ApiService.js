/**
 * Wrapper for all API related Requests.
 * @flow
 */

interface ApiResponse<S> {
  json(): Promise<S>
}
type Params = { [key: string]: string }
type Auth = { ok: boolean, token?: string }
type AuthApiResponse = ApiResponse<{ token: string }>

export default class ApiService {
  static BASE_URL = 'http://10.0.3.2'

  static async auth(username, password): Promise<Auth> {
    const AUTH_PATH = '/auth'
    const response = await this.call(AUTH_PATH, { username, password })
    if (!response.ok) return { ok: false }
    const json = response.json()
    return { ok: true, token: json.token }
  }

  static async call(path: string, params: Params, opts?: any): Promise<Response> {
    const qs = this._queryString(params)
    let response

    try {
      response = await fetch(`${this.BASE_URL}${path}${qs}`, opts)
    } catch (error) {
      console.log('Something went wrong while sending the request', error)
      response = new Response()
      response.ok = false
    }

    return response
  }

  static _queryString(params: Params): string {
    return '?' + Object.getOwnPropertyNames(params)
      .map(key => [key, params[key]].join('='))
      .join('&')
  }
}
