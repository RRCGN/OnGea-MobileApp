import React from 'react'
import { View } from 'react-native'
import { storiesOf, action } from '@kadira/react-native-storybook'
import OGTextButton from '../OGTextButton'
import ButtonList from '../ButtonList'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default storiesOf('ButtonList', module)
  .addDecorator(story => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0E0E0' }}>
      {story()}
    </View>
  ))
  .add('Normal', () => (
    <ButtonList>
      <OGTextButton backgroundColor="#00796B" color="white" label="Button" />
      <OGTextButton backgroundColor="white" label="Button" />
    </ButtonList>
  ))
