import React from 'react'
import { View } from 'react-native'
import { storiesOf, action } from '@kadira/react-native-storybook'
import Hint from '../Hint'


export default storiesOf('Hint', module)
  .add('Friendly Hint', () => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Hint text="Hello!" />
    </View>
  ))
