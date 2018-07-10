import React from 'react'
import Svg,{ Circle, G } from 'react-native-svg'

const ProgressIcon = ({currentValue, totalValue}) => {
  const scale = () => {
    return(0.5)
  }
  return (
  <Svg height='100' width='100' viewBox='0 0 100 100'>
     <G y="50" x="50" cx="50" cy="50">
       <Circle r="22" cx="0" cy="0" strokeWidth="0" fill="red" />
        <Circle r="22" cx="0" cy="0" strokeWidth="0" fill="blue" scale={scale()} />
      </G>
  </Svg>
  )
}


export default ProgressIcon
