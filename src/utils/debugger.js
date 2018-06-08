import { AsyncStorage } from 'react-native'
import ApiService from '../services/ApiService'

const asyncStorageDebugger = async () => {
  console.log('debugging AsyncStorage.....')
  await AsyncStorage.getAllKeys((err, keys) => {
    console.log({err, keys})
    AsyncStorage.multiGet(keys, (err, stores) => {
      stores.map((result, i, store) => {
        let key = store[i][0]
        let value = store[i][1]
        console.log({key, value})
      })
    })
  })
}

const loadDataDebugger = async () => {
  console.log('debugging load data.....')
  const data = await ApiService.all()
  console.log(data)
}

export {
  asyncStorageDebugger,
  loadDataDebugger
}
