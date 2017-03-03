import 'react-native'
import '../../__mocks__/AsyncStorage'
import LoginService from '../../app/services/LoginService'

describe('LoginService', () => {
  const TEST_TOKEN = 'token'

  describe('if no token is available', () => {
    let status

    beforeAll(async () => {
      status = await LoginService.checkStatus()
    })

    it('should return not logged in', () => {
      expect(status.loggedIn).toBe(false)
    })

    it('should return no token', () => {
      expect(status.token).toBe(undefined)
    })
  })

  describe('if token is available', () => {
    let status

    beforeAll(async () => {
      await LoginService.saveToken(TEST_TOKEN)
      status = await LoginService.checkStatus()
    })

    it('should return logged in', () => {
      expect(status.loggedIn).toBe(true)
    })

    it('should return token', () => {
      expect(status.token).toEqual(TEST_TOKEN)
    })
  })

  it('should save token', async () => {
    await LoginService.saveToken(TEST_TOKEN)
    const token = await LoginService.getToken()
    expect(token).toEqual(TEST_TOKEN)
  })

})
