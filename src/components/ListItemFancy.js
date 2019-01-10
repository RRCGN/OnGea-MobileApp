import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../utils/constants'

export default class ListItemFancy extends React.PureComponent {
  static propTypes = {
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    isLinked: PropTypes.bool
  }

  static defaultProps = {
    iconColor: Colors.DARK_TERTIARY
  }

  render() {
    const {
      primary,
      secondary,
      icon,
      iconColor,
      onPress,
      isLinked
    } = this.props

    const ContainerComponent = onPress ? TouchableOpacity : View


    return (
      <View>
        <ContainerComponent onPress={onPress}>
          <View style={styles.container}>
            <View style={styles.left}>
              <View style={styles.iconContainer}>
                {icon && (
                  <Icon
                    name={icon}
                    style={[styles.icon, { color: iconColor }]}
                    size={24}
                  />
                )}
              </View>
            </View>
            <View style={styles.right}>
              <Text style={styles.primary}>{primary}</Text>
              <Text style={styles.secondary}>{secondary}</Text>
            </View>
          </View>
        </ContainerComponent>
        {isLinked && (
          <Image source={require('../assets/dots.png')} style={styles.dots} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    position: 'relative',
    height: 72,
    alignItems: 'center',
    marginLeft: -16,
    marginRight: -16,
    paddingLeft: 16,
    paddingRight: 16
  },
  right: {
    marginLeft: 32,
    flex: 1
  },
  left: {
    width: 24,
    flex: 0,
    justifyContent: 'center'
  },
  iconContainer: {
    width: 24,
    height: 24
  },
  icon: {
    color: Colors.DARK_TERTIARY
  },
  primary: {
    color: Colors.DARK_PRIMARY
  },
  secondary: {
    color: Colors.DARK_SECONDARY
  },
  dots: {
    position: 'absolute',
    top: 54,
    left: 8,
    width: 8,
    height: 36,
    zIndex: 2,
    opacity: 0.38
  }
})
