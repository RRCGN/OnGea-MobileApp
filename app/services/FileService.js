/**
 *
 * @flow
 */

import { Platform, PermissionsAndroid, AsyncStorage } from 'react-native'
import * as mime from 'react-native-mime-types'
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
    await this.saveDownload({ id, filepath, mime })
  }

  static async saveDownload({ id, filepath, mime }): Promise<void> {
    const downloads = await this.getDownloads()
    downloads[id] = { id, filepath }
    await AsyncStorage.setItem(this.STORE_KEY, JSON.stringify(downloads))
  }

  static async getDownloads(): Promise<any> {
    const value = await AsyncStorage.getItem(this.STORE_KEY)
    if (value !== null) return JSON.parse(value)
    else return {}
  }

  static async getDownload(id: number): Promise<any> {
    const downloads = await this.getDownloads()
    return downloads[id]
  }

  static async openFile(id): Promise<void> {
    const { filepath } = await this.getDownload(id)
    if (Platform.OS === 'ios') {
      try {
        RNFetchBlob.ios.previewDocument(filepath)
      } catch (e) {
        alert('Can\'t find application to open this file')
      }
    } else {
      try {
        await RNFetchBlob.android.actionViewIntent(filepath, mime.lookup(filepath))
      } catch (e) {
        alert('Can\'t find application to open this file')
      }
    }
  }
}
