import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../utils/colors'

const CardSegment = ({
  hasBorderBottom = false,
  small,
  big,
  children
}) => (
  <View
    style={[
      hasBorderBottom && styles.segmentWithBorder,
      big && styles.segmentBigSpace,
      small && styles.segmentSmallSpace
    ]}
  >
    {children}
  </View>
)

export default CardSegment


const styles = StyleSheet.create({
  segmentSmallSpace: {
    padding: 8
  },
  segmentBigSpace: {
    padding: 16
  },
  segmentWithBorder: {
    borderBottomColor: colors.darkDivider,
    borderBottomWidth: 1
  }
})
