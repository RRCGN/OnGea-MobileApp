import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, Platform } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'
import filesize from 'filesize'
import * as mime from 'react-native-mime-types'
import { withI18n } from '@lingui/react'
import { compose } from 'recompose'

import {
  addDownload,
  queueDownload,
  dequeueDownload
} from '../redux/ducks/downloads'
import { downloadWithPermission } from '../services/FileService'
import Section from '../components/Section'
import ListItemStandard from '../components/ListItemStandard'
import ListItemFancy from '../components/ListItemFancy'

class SectionFiles extends React.PureComponent {
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
    const { i18n } = this.props
    const { isDownloaded, isQueued } = this.getDownloadState(download)
    const size = filesize(download.size)

    if (isDownloaded) return size + ' – ' + i18n.t`offline available`
    if (isQueued) return size + ' – ' + i18n.t`downloading…`
    return size + ' – ' + i18n.t`press to download`
  }

  getIcon = download => {
    const { isDownloaded, isQueued } = this.getDownloadState(download)
    if (isDownloaded) return 'file'
    if (isQueued) return 'dots-horizontal'
    return 'download'
  }

  handleUploadPress = () => {
    this.props.onUploadPress()
  }

  handleDownloadPress = download => () => {
    const { i18n } = this.props
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
          alert(i18n.t`No storage permission.`)
          return
        }

        alert(i18n.t`Failed to download file.`)
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
    const { i18n } = this.props

    return (
      <Section title={i18n.t`Files`} noBorder>
        <ListItemStandard
          primary={i18n.t`Upload your documents for this activity`}
          secondary={i18n.t`for travel documents, e.g. boarding passes`}
          onPress={this.handleUploadPress}
        />
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

export default compose(
  withI18n(),
  connect(mapStateToProps, mapDispatchToProps)
)(SectionFiles)
