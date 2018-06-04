/**
 *
 * @flow
 */

import { Platform, PermissionsAndroid } from 'react-native'


export default class PermissionsService {
  static async request(permissions) {
    if (Platform.OS === 'ios') return true
    let allGood = true

    for (let permission of permissions) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS[permission.identifier],
        { title: permission.title, message: permission.message }
      )

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        allGood = false
      }
    }

    return allGood
  }
}
