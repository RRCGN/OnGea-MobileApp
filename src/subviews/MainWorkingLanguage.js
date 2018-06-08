import React from 'react'
import {Text, View} from 'react-native'
import PropTypes from 'prop-types'

const MainWorkingLanguage = ({data}) => {
  return (
    <View>
      <Text style={styles.text}>{data}</Text>
    </View>
  )
}

const styles = {
  text: {
    fontSize: 16,
    color: 'black'
  }
}
MainWorkingLanguage.propTypes = { data: PropTypes.string }
export default MainWorkingLanguage
