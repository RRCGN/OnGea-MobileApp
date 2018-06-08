import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../components/ButtonText'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../utils/constants'


type Props = {
  primary: string,
  secondary: string,
  big?: boolean,
  interactive?: boolean,
  onPress: func,
  style: {}
}

const ListItemStandard = ({ primary, secondary, big = false, interactive, onPress, style}: Props) => {
  const handlePress = () => {
    interactive ? onPress() : () => {}
  }
  return (
    <View style={[ styles.container, big && styles.big, style ]}>
      {!interactive
        ? (<Text style={styles.primary}>{primary}</Text>)
        : (<Button label={primary} onPress={handlePress} textStyle={{textAlign: 'left'}} />)
      }
      <Text style={styles.secondary}>{secondary}</Text>
    </View>
  )
}

export default ListItemStandard


const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50
  },
  big: {
    height: 72
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
