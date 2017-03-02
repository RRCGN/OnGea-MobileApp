import 'react-native'
import '../../__mocks__/AsyncStorage'
import LoginManager from '../../app/managers/LoginManager'

describe('LoginManager checkStatus()', () => {

  describe('if no token is available', () => {
    let status

    beforeAll(async () => {
      status = await LoginManager.checkStatus()
    })

    it('should return not logged in', () => {
      const { loggedIn } = status
      expect(loggedIn).toBe(false)
    })

    it('should return no token', () => {
      const { token } = status
      expect(token).toBe(undefined)
    })
  })

})
