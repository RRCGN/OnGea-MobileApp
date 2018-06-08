import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Touchable from './Touchable'
import { Colors } from '../utils/constants'


type Props = {
  onPress?: () => void,
  label: string,
  color?: string,
  backgroundColor?: string,
  style?: any,
  textStyle?: any
}

const ButtonText = ({ onPress = () => {}, label, color, backgroundColor, style, textStyle }: Props) => (
  <Touchable
    onPress={onPress}
    rippleColor={Colors.RIPPLE_DARK}
    borderRadius={backgroundColor == null ? 2 : 0}
  >
    <View
      style={[
        backgroundColor ? styles.raisedButton : styles.flatButton,
        styles.button,
        { backgroundColor: backgroundColor || 'transparent' },
        style
      ]}
    >
      <Text style={[ styles.text, { color: color || Colors.PRIMARY }, textStyle ]}>
        {label.toUpperCase()}
      </Text>
    </View>
  </Touchable>
)

export default ButtonText


const styles = StyleSheet.create({
  raisedButton: {
    elevation: 2,
    paddingLeft: 16,
    paddingRight: 16
  },
  flatButton: {
    paddingLeft: 8,
    paddingRight: 8
  },
  button: {
    height: 36,
    borderRadius: 2,
    flex: -1,
    minWidth: 64,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14
  }
})
