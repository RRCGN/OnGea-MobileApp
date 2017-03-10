import 'react-native'
import ApiService from '../../app/services/ApiService'

describe('ApiService', () => {
  describe('_queryString(params)', () => {
    it('generates one parameter to a query string', () => {
      const qs = ApiService._queryString({ foo: 'bar' })
      expect(qs).toEqual('?foo=bar')
    })

    it('generates multiple parameters to a query string', () => {
      const qs = ApiService._queryString({ a: 'b', c: 'd' })
      expect(qs).toEqual('?a=b&c=d')
    })
  })
})
