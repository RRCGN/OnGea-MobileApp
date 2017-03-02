/**
 * Manager for everything related to Logins.
 * @flow
 */

import { AsyncStorage } from 'react-native'

export default class LoginManager {
  static TOKEN_KEY: string = '@LoginStore:token'

  static async checkStatus(): Promise<{ loggedIn: boolean, token?: string }> {
    try {
      const token = await AsyncStorage.getItem(this.TOKEN_KEY)
      if (token !== null) {
        return { loggedIn: true, token }
      } else {
        return { loggedIn: false }
      }
    } catch (error) {
      if (__DEV__) console.error(error)
      return { loggedIn: false }
    }
  }
}
