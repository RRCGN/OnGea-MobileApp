import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, Platform } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'
import filesize from 'filesize'
import * as mime from 'react-native-mime-types'

import {
  addDownload,
  queueDownload,
  dequeueDownload
} from '../redux/ducks/downloads'
import { downloadWithPermission } from '../services/FileService'
import Section from '../components/Section'
import ListItemFancy from '../components/ListItemFancy'

class SectionDownloads extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    storedDownloads: PropTypes.object.isRequired,
    downloadQueue: PropTypes.array.isRequired,
    addDownload: PropTypes.func.isRequired,
    queueDownload: PropTypes.func.isRequired,
    dequeueDownload: PropTypes.func.isRequired
  }

  getDownloadState = download => {
    const isDownloaded = !!this.props.storedDownloads[download.id]
    const isQueued = this.props.downloadQueue.includes(download.id)

    return { isDownloaded, isQueued }
  }

  getSecondaryText = download => {
    const { isDownloaded, isQueued } = this.getDownloadState(download)
    const size = filesize(download.size)

    if (isDownloaded) return size + ', offline available'
    if (isQueued) return size + ', downloading...'
    return size + ', press to download'
  }

  getIcon = download => {
    const { isDownloaded, isQueued } = this.getDownloadState(download)
    if (isDownloaded) return 'file'
    if (isQueued) return 'dots-horizontal'
    return 'download'
  }

  handleDownloadPress = download => () => {
    const { isDownloaded, isQueued } = this.getDownloadState(download)
    if (isQueued) return
    if (isDownloaded) {
      const storedDownload = this.props.storedDownloads[download.id]
      return this.openDownload(storedDownload)
    }

    this.props.queueDownload(download)

    downloadWithPermission(download)
      .then(path => this.props.addDownload({ ...download, path }))
      .catch(e => {
        this.props.dequeueDownload(download)

        if (e.internalCode === 'NO_PERMISSION') {
          alert('No storage permission.')
          return
        }

        alert('Failed to download file.')
      })
  }

  openDownload = download => {
    if (Platform.OS === 'android') {
      const mimeType = mime.lookup(download.path)
      RNFetchBlob.android.actionViewIntent(download.path, mimeType)
    } else {
      RNFetchBlob.ios.openDocument(download.path)
    }
  }

  render() {
    return (
      <Section title="Files">
        {this.props.data.map(download => (
          <ListItemFancy
            key={download.id}
            primary={download.name}
            secondary={this.getSecondaryText(download)}
            icon={this.getIcon(download)}
            onPress={this.handleDownloadPress(download)}
          />
        ))}
      </Section>
    )
  }
}

const mapStateToProps = state => ({
  storedDownloads: state.downloads.files,
  downloadQueue: state.downloads.queue
})

const mapDispatchToProps = {
  addDownload,
  queueDownload,
  dequeueDownload
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionDownloads)
