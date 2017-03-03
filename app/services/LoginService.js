/**
 * Manager for everything related to Logins.
 * @flow
 */

import { AsyncStorage } from 'react-native'
import ApiService from './ApiService'

export default class LoginService {
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
}
