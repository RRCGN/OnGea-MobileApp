import React from 'react'
import {Text, View} from 'react-native'
import PropTypes from 'prop-types'

const Description = ({description}) => {
  return (
    <View>
      <Text style={styles.text}>{description}</Text>
    </View>
  )
}

const styles = {
  text: {
    fontSize: 16,
    color: 'black'
  }
}
Description.propTypes = { description: PropTypes.string }
export default Description
