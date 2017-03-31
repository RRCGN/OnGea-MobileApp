/**
 *
 * @flow
 */

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Section from '../components/Section'
import ListManager from '../components/ListManager'
import ListItemFancy from '../components/ListItemFancy'
import FileService from '../services/FileService'
import filesize from 'filesize'


export default class SectionDownloads extends Component {
  constructor(props) {
    super(props)

    this.state = {
      downloads: {}
    }
  }

  componentWillMount() {
    (async () => {
      const downloads = await FileService.getDownloads()
      this.setState({ downloads })
    })()
  }

  render() {
    const { downloads } = this.state

    return (
      <Section title="Dateien">
        <ListManager
          items={this.props.data}
          renderItem={(item, i) => (
            <ListItemFancy
              key={i}
              primary={item.name}
              secondary={filesize(item.size) + (downloads[item.id] ? ', Offline verfügbar' : '')}
              icon={downloads[item.id] ? 'file' : 'download'}
              onPress={downloads[item.id]
                ? () => this._openFile(item.id)
                : () => this._downloadFile({ id: item.id, url: item.path, filename: item.filename })
              }
            />
          )}
        />
      </Section>
    )
  }

  _openFile = (id) => {
    FileService.openFile(id)
  }

  _downloadFile = async ({ id, url, filename }) => {
    try {
      await FileService.downloadAndStore({ id, url, filename })
      const downloads = await FileService.getDownloads()
      this.setState({ downloads })
    } catch (e) {
      console.log('download file error', e)
    }
  }
}
