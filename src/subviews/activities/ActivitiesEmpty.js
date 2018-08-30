import React from 'react'
import { Image, Text, View } from 'react-native'
import PropTypes from 'prop-types'
const pullDownImage = require('../../assets/pull-down.png')
import { Trans } from '@lingui/react'

const ActivitiesEmpty = ({ isRefreshing }) => {
  if (isRefreshing) {
    return <View />
  } else {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={pullDownImage} />
        <Text>
          <Trans>No Actitivities are available.</Trans>
        </Text>
        <Text>
          <Trans>Pull down to refresh.</Trans>
        </Text>
      </View>
    )
  }
}
ActivitiesEmpty.propTypes = {
  isRefreshing: PropTypes.bool
}
const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4
  },
  image: {
    padding: 40,
    margin: 30,
    width: 20,
    height: 20
  }
}
export default ActivitiesEmpty
