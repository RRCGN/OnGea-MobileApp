import { AsyncStorage } from 'react-native'

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

export {
  asyncStorageDebugger
}
