/**
 * TripDate Shows Time, Location and Icon for a Travel
 * @flow
 */

import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import OGTravelDate from './OGTravelDate'


type Props = {
  children: Array<ReactElement<OGTravelDate>>
}

const OGTravelDateList = ({ children }: Props) => (
  <View style={styles.container}>
    {React.Children.map(children, (child, i) => (
      [
        <View key={i} style={styles.item}>{child}</View>,
        (i < React.Children.count(children) - 1) &&
          <Image source={require('../assets/dots.png')} style={styles.dots} />
      ]
    ))}
  </View>
)

export default OGTravelDateList


const styles = StyleSheet.create({
  container: {
    flex: -1
  },
  item: {
    height: 72,
    justifyContent: 'center'
  },
  dots: {
    width: 8,
    height: 36,
    marginTop: -18,
    marginBottom: -18,
    marginLeft: 8,
    zIndex: 2,
    opacity: 0.38
  }
})
