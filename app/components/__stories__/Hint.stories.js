import React from 'react'
import { View } from 'react-native'
import { storiesOf, action } from '@kadira/react-native-storybook'
import Hint from '../Hint'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default storiesOf('Hint', module)
  .addDecorator(story => (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#E0E0E0' }}>
      {story()}
    </View>
  ))
  .add('Nice Hint', () => (
    <Hint type="nice" text="This is a friendly message." />
  ))
  .add('Nice Hint w/ icon', () => (
    <Hint
      type="nice"
      text="This is a friendly message."
      icon={<Icon size={18} color="white" name="airplane-takeoff" />}
    />
  ))
  .add('Warning Hint', () => (
    <Hint
      type="warning"
      text="This is a slightly confused message."
    />
  ))
  .add('Warning Hint w/ icon', () => (
    <Hint
      type="warning"
      text="This is a slightly confused message."
      icon={<Icon size={18} color="white" name="alert-circle" />}
    />
  ))
  .add('Alert Hint', () => (
    <Hint
      type="alert"
      text="This is a mad message! I'm mad."
    />
  ))
  .add('Alert Hint w/ icon', () => (
    <Hint
      type="alert"
      text="This is a mad message! I'm mad."
      icon={<Icon size={18} color="white" name="alert-octagon" />}
    />
  ))
