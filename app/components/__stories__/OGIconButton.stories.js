import React from 'react'
import { View } from 'react-native'
import { storiesOf, action } from '@kadira/react-native-storybook'
import OGIconButton from '../OGIconButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default storiesOf('OGIconButton', module)
  .addDecorator(story => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0E0E0' }}>
      {story()}
    </View>
  ))
  .add('Normal', () => (
    <OGIconButton icon={<Icon name="information" color="#00796B" />} />
  ))
