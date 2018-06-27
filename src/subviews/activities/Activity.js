import React from 'react'
import { View } from 'react-native'
import ActivityHeader from './ActivityHeader'
import PropTypes from 'prop-types'

const Activity = ({activityObject}) => {
  return (
    <View style={styles.container}>
      <ActivityHeader activityObject={activityObject} />
    </View>
  )
}

Activity.propTypes = {
  activityObject: PropTypes.object,
  handleClick: PropTypes.func
}

const styles = {
  container: {}
}
export default Activity
