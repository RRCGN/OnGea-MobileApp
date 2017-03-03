/**
 * Manager for everything related to Logins.
 * @flow
 */

import { AsyncStorage } from 'react-native'

export default class LoginManager {
  static TOKEN_KEY: string = '@LoginStore:token'

  static async checkStatus(): Promise<{ loggedIn: boolean, token?: string }> {
    try {
      const token = await LoginManager.getToken()
      if (token != null) {
        return { loggedIn: true, token }
      } else {
        return { loggedIn: false }
      }
    } catch (error) {
      if (__DEV__) console.error(error)
      return { loggedIn: false }
    }
  }

  static async saveToken(token) {
    try {
      await AsyncStorage.setItem(this.TOKEN_KEY, token)
    } catch (error) {
      if (__DEV__) console.error(error)
    }
  }

  static async getToken() {
    try {
      return await AsyncStorage.getItem(this.TOKEN_KEY)
    } catch (error) {
      if (__DEV__) console.error(error)
      return null
    }
  }

  static async removeToken() {
    try {
      await AsyncStorage.removeItem(this.TOKEN_KEY)
    } catch (error) {
      if (__DEV__) console.error(error)
    }
  }

  static async obtainToken(username, password): Promise<{ success: boolean, token?: string }> {
    const { success, json } = await LoginManager.sendLoginRequest(username, password)
    if (!success) return { success }

    return { success, token: json.token }
  }

  static async sendLoginRequest(username, password): Promise<{ success: boolean, json: any }> {
    try {
      const response = await fetch(`http://172.16.0.194:3000/auth?username=${username}&password=${password}`)
      if (!response.ok) return { success: false }

      const json = await response.json()
      return { success: response.ok, json }
    } catch (error) {
      if (__DEV__) console.error(error)
    }
  }
}
