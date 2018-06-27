import React from 'react'
import { SafeAreaView, View } from 'react-native'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'

const ViewDecorator = ({children}) => (
  <SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>
      {children}
    </View>
  </SafeAreaView>
)


ViewDecorator.propTypes = {
  children: PropTypes.any
}

const styles = {
  wrapper: { flex: 1 },
  container: {
    backgroundColor: colors.grayLight
  }
}

export default ViewDecorator
