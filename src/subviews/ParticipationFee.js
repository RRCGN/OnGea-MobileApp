import React from 'react'
import {Text, View} from 'react-native'
import PropTypes from 'prop-types'

const ParticipationFee = ({participationFee, participationFeeCurrency, participationFeeReducedActive, participationFeeReducedCurrency, participationFeeReduced}) => {
  return (
    <View>
      <Text>Participation Fee: {participationFee} {participationFeeCurrency}</Text>
      <Text></Text>
      <Text>Participation Fee Reduced Active: {participationFeeReducedActive} {participationFeeReducedCurrency} </Text>
      <Text>ParticipationFeeReduced: {participationFeeReduced}</Text>
    </View>
  )
}

ParticipationFee.propTypes = {
  participationFee: PropTypes.string,
  participationFeeCurrency: PropTypes.string,
  participationFeeReducedActive: PropTypes.string,
  participationFeeReducedCurrency: PropTypes.string,
  participationFeeReduced: PropTypes.string
}
export default ParticipationFee
