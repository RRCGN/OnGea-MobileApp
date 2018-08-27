import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import PlatformIcon from '../components/PlatformIcon'

export default class AgreementAcceptanceItems extends React.PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.items.map(agreement => (
          <View style={styles.block} key={agreement.title}>
            <View style={styles.blockHeader}>
              <View style={styles.iconContainer}>
                <PlatformIcon
                  androidIcon={agreement.androidIcon}
                  iosIcon={agreement.iosIcon}
                  size={26}
                  style={styles.icon}
                />
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{agreement.title}</Text>
              </View>
            </View>
            <Text style={styles.details}>{agreement.text}</Text>
          </View>
        ))}
      </View>
    )
  }
}

const styles = {
  container: {
    padding: 10
  },
  block: {
    flexDirection: 'column',
    paddingVertical: 10
  },
  iconContainer: {
    width: 40
  },
  titleContainer: {
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold'
  },
  blockHeader: {
    flexDirection: 'row'
  },
  icon: {
    width: 26,
    height: 26,
    textAlign: 'center'
  },
  details: {
    paddingLeft: 40
  }
}
