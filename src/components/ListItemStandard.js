import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import PlatformIcon from '../components/PlatformIcon'
import { Colors } from '../utils/constants'

export default class ListItemStandard extends React.PureComponent {
  static propTypes = {
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string,
    big: PropTypes.bool,
    onPress: PropTypes.func
  }

  static defaultProps = {
    onPress: () => {}
  }

  render() {
    const { big, primary, secondary } = this.props

    const isInteractive = !!this.props.onPress
    const containerProps = isInteractive ? { onPress: this.props.onPress } : {}
    const ContainerComponent = isInteractive ? TouchableOpacity : View

    return (
      <ContainerComponent
        style={[styles.container, big && styles.big]}
        {...containerProps}
      >
        <View style={styles.mainInfos}>
          <Text style={styles.primary}>{primary}</Text>
          {secondary && <Text style={styles.secondary}>{secondary}</Text>}
        </View>
        {isInteractive && (
          <PlatformIcon
            androidIcon="keyboard-arrow-right"
            iosIcon="ios-arrow-forward"
            size={24}
            style={styles.icon}
          />
        )}
      </ContainerComponent>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  mainInfos: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  big: {
    height: 72
  },
  icon: {
    flex: 0,
    marginLeft: 16,
    color: Colors.DARK_TERTIARY
  },
  primary: {
    color: Colors.DARK_PRIMARY
  },
  secondary: {
    color: Colors.DARK_SECONDARY
  }
})
