import { AsyncStorage } from 'react-native'
const TOKEN_KEY = '@AuthStore:token'
const LOGOUT_TOKEN_KEY = '@AuthStore:logoutToken'
class LoginService {

  static saveTokens = async (tokens) => {
    console.log({tokens})
    try {
      // await AsyncStorage.setItem(TOKEN_KEY, 'I like to save it.')
      await AsyncStorage.setItem(TOKEN_KEY, tokens.token, () => {
        AsyncStorage.mergeItem(LOGOUT_TOKEN_KEY, tokens.logoutToken)
      })
    } catch (e) {
      console.log('Erorr setting AsyncStorage items: ' + e)
    }
    // await AsyncStorage.setItem(TOKEN_KEY, tokens.token, () => {
    //   AsyncStorage.mergeItem(TOKEN_KEY, tokens.logoutToken)
    // })
  }

  static getTokens = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY)
    const logoutToken = await AsyncStorage.getItem(LOGOUT_TOKEN_KEY)
    return {token, logoutToken}
  }

  static checkStatus = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY)
    const logoutToken = await AsyncStorage.getItem(LOGOUT_TOKEN_KEY)
    if (token != null && logoutToken != null ) {
      return { loggedIn: true, token, logoutToken }
    } else {
      return { loggedIn: false }
    }
  }

  static clearTokens = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY)
    await AsyncStorage.removeItem(LOGOUT_TOKEN_KEY)
  }
}


export default LoginService
