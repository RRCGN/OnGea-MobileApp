import 'react-native'
import '../../__mocks__/AsyncStorage'
import DataService from '../../src/services/DataService'

jest.mock('../../src/services/ApiService')
const AsyncStorage = require('AsyncStorage')

describe('DataService', () => {
  describe('save(json)', () => {
    it('saves any js object', async () => {
      await DataService.save({ a: 1, b: 'b', c: true })
      const store = AsyncStorage.getItem(DataService.DATA_KEY)
      expect(store).toEqual('{"a":1,"b":"b","c":true}')
    })
  })

  describe('getAll()', () => {
    it('returns null if store is empty', async () => {
      AsyncStorage.clear()
      const data = await DataService.getAll()
      expect(data).toBe(null)
    })

    it('returns saved data as js object', async () => {
      await DataService.save({ a: 1, b: 'b', c: true })
      const data = await DataService.getAll()
      expect(data).toEqual({ a: 1, b: 'b', c: true })
    })
  })

  describe('purge()', () => {
    it('should empty the data store', async () => {
      await DataService.purge()
      const data = await DataService.getAll()
      expect(data).toBe(null)
    })
  })

  describe('fetchAndSave()', () => {
    it('fetches and saves data from the api', async () => {
      await DataService.fetchAndSave()
      const data = await DataService.getAll()
      expect(data).toEqual({ foo: 'bar' })
    })

    it('returns the fetched data', async () => {
      const data = DataService.fetchAndSave()
      const storeData = DataService.getAll()
      expect(data).toEqual(storeData)
    })
  })

})
