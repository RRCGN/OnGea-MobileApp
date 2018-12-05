import React, { Component } from 'react'
import { View, Text, StyleSheet, SectionList } from 'react-native'

import { i18n } from '../i18n'
import ToolbarButton from '../components/ToolbarButton'
import creditsParagraphs from '../strings/credits'
import ossLibs from '../strings/oss'

export default class Credits extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: i18n.t`Credits`,
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          iconColor="black"
          onPress={() => navigation.goBack(null)}
        />
      )
    }
  }

  renderItemOSS = item => {
    const ossLib = ossLibs[item]

    return (
      <React.Fragment>
        <View>
          <Text style={[styles.ossText, styles.ossTitle]}>{item}</Text>
        </View>
        {(ossLib.licenses || ossLib.repository) && (
          <View>
            <Text style={styles.ossText}>
              {ossLib.licenses} {ossLib.repository}
            </Text>
          </View>
        )}
        {ossLib.licenseUrl && (
          <View>
            <Text selectable style={styles.ossText}>{ossLib.licenseUrl}</Text>
          </View>
        )}
      </React.Fragment>
    )
  }

  renderItemProject = item => {
    return <Text style={styles.creditsText}>{item}</Text>
  }

  renderItem = ({ item, index, section }) => {
    return (
      <View style={styles.item} key={index}>
        {section.type === 'PROJECT'
          ? this.renderItemProject(item)
          : this.renderItemOSS(item)}
      </View>
    )
  }

  renderSectionHeader = ({ section: { type } }) => {
    if (type === 'PROJECT') {
      return <View style={{ height: 10 }} />
    }

    return (
      <View style={styles.item}>
        <View style={{ height: 10 }} />
        <Text style={styles.ossTitle}>Open Source Attributions:</Text>
      </View>
    )
  }

  render() {
    const sections = [
      { type: 'PROJECT', data: creditsParagraphs },
      { type: 'OSS', data: Object.keys(ossLibs) }
    ]

    return (
      <SectionList
        contentContainerStyle={styles.screen}
        sections={sections}
        keyExtractor={item => item}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        stickySectionHeadersEnabled={false}
      />
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white'
  },
  creditsText: {
    fontSize: 15,
    color: 'black'
  },
  ossText: {
    fontSize: 14
  },
  item: {
    padding: 10
  },
  ossTitle: {
    fontWeight: 'bold'
  }
})
