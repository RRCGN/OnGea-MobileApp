/**
 * Service for everything related to Logins.
 * @flow
 */

import { AsyncStorage } from 'react-native'
import ApiService from './ApiService'

export default class LoginService {
  static TOKEN_KEY: string = '@LoginStore:token'

  static async checkStatus(): Promise<{ loggedIn: boolean, token?: string }> {
    try {
      const token = await this.getToken()
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

  static async saveToken(token): Promise<void> {
    await AsyncStorage.setItem(this.TOKEN_KEY, token)
  }

  static async getToken(): Promise<string> {
    return await AsyncStorage.getItem(this.TOKEN_KEY)
  }

  static async clearToken(): Promise<void> {
    await AsyncStorage.removeItem(this.TOKEN_KEY)
  }
}
