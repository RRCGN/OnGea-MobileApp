import { AsyncStorage } from 'react-native'
import ApiService from './ApiService'

const DATA_KEY = '@DataStore:data'

class DataService {

  static save = async (json) => {
    await AsyncStorage.setItem(DATA_KEY, JSON.stringify(json)) }

  static getAll = async () => {
    const data = await AsyncStorage.getItem(DATA_KEY)
    if (data == null) return null
    return JSON.parse(data) }

  static fetchAndSave = async () => {
    console.log('all')
    const { ok, data } = await ApiService.all()
    if (!ok) { return DataService.getAll() }
    try { await DataService.save(data) }
    catch (error) { console.error('Could not save data:', error) }
    return data }

  static purge = async () => {
    await AsyncStorage.removeItem(DATA_KEY) }
}

export default DataService
