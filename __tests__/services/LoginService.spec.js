import 'react-native'
import '../../__mocks__/AsyncStorage'
import LoginService from '../../src/services/LoginService'

describe('LoginService', () => {
  const TEST_TOKEN = 'mock token'

  describe('checkStatus()', () => {
    it('is logged in if token is available', async () => {
      await LoginService.saveToken(TEST_TOKEN)
      const status = await LoginService.checkStatus()

      expect(status.loggedIn).toBe(true)
      expect(status.token).toEqual(TEST_TOKEN)
    })

    it('is not logged in if no token is available', async () => {
      await LoginService.clearToken()
      const status = await LoginService.checkStatus()

      expect(status.loggedIn).toBe(false)
      expect(status.token).toBe(undefined)
    })
  })

  describe('saveToken(token)', async () => {
    it('saves the token', async () => {
      await LoginService.saveToken(TEST_TOKEN)
      const token = await LoginService.getToken()

      expect(token).toEqual(TEST_TOKEN)
    })
  })

})
