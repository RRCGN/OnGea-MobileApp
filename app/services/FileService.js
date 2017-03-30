/**
 *
 * @flow
 */

import { Platform, PermissionsAndroid, AsyncStorage } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import PermissionsService from './PermissionsService'


export default class FileService {
  static STORE_KEY: string = '@DataStore:downloads'

  static async download({ url, filename }, onProgress = () => {}) {
    const granted = await PermissionsService.request([
      {
        identifier: 'READ_EXTERNAL_STORAGE',
        title: 'OnGea Dokumente anzeigen',
        message: 'OnGea benötigt Speicherzugriff um Dokumente offline anzeigen zu können'
      },
      {
        identifier: 'WRITE_EXTERNAL_STORAGE',
        title: 'OnGea Dokumente speichern',
        message: 'OnGea benötigt Speicherzugriff um Dokumente offline speichern zu können'
      }
    ])

    if (!granted) throw new Error('Permissions not granted')

    const file = await RNFetchBlob
      .config({
        path: RNFetchBlob.fs.dirs.DocumentDir + '/' + filename,
        addAndroidDownloads: {
          useDownloadManager: true,
          mediaScannable: true,
          title: filename,
          description: 'OnGea Dokument'
        }
      })
      .fetch('GET', url)
      .progress({ count: 1 }, (received, total) => onProgress({ received, total }))

    return file.path()
  }

  static async downloadAndStore({ id, url, filename }, onProgress = () => {}) {
    const filepath = await this.download({ url, filename }, onProgress)
    await this.saveDownload({ id, filepath })
  }

  static async saveDownload({ id, filepath }) {
    const downloads = this.getDownloads()
    downloads[id] = { id, filepath }
    await AsyncStorage.setItem(this.STORE_KEY, JSON.stringify(downloads))
  }

  static async getDownloads(): any {
    const value = await AsyncStorage.getItem(this.STORE_KEY)
    if (value !== null) return JSON.parse(value)
    else return {}
  }
}
