import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import PlatformIcon from '../components/PlatformIcon'
import { Colors } from '../utils/constants'

export default class ListItemStandard extends React.PureComponent {
  static propTypes = {
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string,
    additional: PropTypes.array,
    big: PropTypes.bool,
    withBorder: PropTypes.bool,
    onPress: PropTypes.func
  }

  static defaultProps = {
    additional: []
  }

  render() {
    const { big, primary, secondary, additional, withBorder } = this.props

    const isInteractive = !!this.props.onPress
    const containerProps = isInteractive ? { onPress: this.props.onPress } : {}
    const ContainerComponent = isInteractive ? TouchableOpacity : View

    return (
      <ContainerComponent
        style={[
          styles.container,
          big && styles.big,
          withBorder && styles.withBorder
        ]}
        {...containerProps}
      >
        <View style={styles.mainInfos}>
          <Text style={styles.primary}>{primary}</Text>
          {secondary && <Text style={styles.secondary}>{secondary}</Text>}
          {additional.map((t, i) => (
            <Text key={i} style={styles.secondary}>
              {t}
            </Text>
          ))}
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
    minHeight: 50,
    paddingVertical: 8
  },
  withBorder: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.DARK_DIVIDER
  },
  mainInfos: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  big: {
    minHeight: 72
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
