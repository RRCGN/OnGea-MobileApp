import { Platform } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'
import Permissions from 'react-native-permissions'
import * as mime from 'react-native-mime-types'

export function downloadWithPermission(dload) {
  if (Platform.OS === 'ios') return download(dload)

  return Permissions.request('storage')
    .then(response => {
      if (response !== 'authorized') {
        const error = new Error('Permission not granted')
        error.internalCode = 'NO_PERMISSION'
        throw error
      }

      return download(dload)
    })
}

export function download(dload) {
  return RNFetchBlob
    .config({
      addAndroidDownloads: {
        useDownloadManager: true,
        title: dload.filename,
        description: 'OnGea Document',
        mime: mime.lookup(dload.filename),
        mediaScannable: true,
        notification: true,
        path: RNFetchBlob.fs.dirs.DownloadDir + '/' + dload.filename
      },
      path: RNFetchBlob.fs.dirs.DownloadDir + '/' + dload.filename
    })
    .fetch('GET', dload.url)
    .then(res => res.path())
}
