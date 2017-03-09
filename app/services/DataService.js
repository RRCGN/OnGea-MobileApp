/**
 * Service for all Data-related stuff.
 * @flow
 */

import { AsyncStorage } from 'react-native'
import ApiService from './ApiService'


type ApiData = any

export default class DataService {
  static DATA_KEY: string = '@DataStore:data'

  static async save(json: any): Promise<void> {
    await AsyncStorage.setItem(this.DATA_KEY, JSON.stringify(json))
  }

  static async getAll(): Promise<any> {
    const data = await AsyncStorage.getItem(this.DATA_KEY)
    if (data == null) return null

    return JSON.parse(data)
  }

  static async fetchAndSave(): Promise<ApiData> {
    const data = await ApiService.all()
    try {
      await this.save(data)
    } catch (error) {
      console.error('Could not save data:', error)
    } finally {
      return data
    }
  }

  static async purge(): Promise<void> {
    await AsyncStorage.removeItem(this.DATA_KEY)
  }

}
