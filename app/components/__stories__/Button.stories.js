import React from 'react'
import { View } from 'react-native'
import { storiesOf, action } from '@kadira/react-native-storybook'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button, ButtonList, IconButton } from '../Button'


export default storiesOf('Button', module)
  .addDecorator(story => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0E0E0' }}>
      {story()}
    </View>
  ))
  .add('Text Button, Flat', () => (
    <Button label="Button" />
  ))
  .add('Text Button, Flat, colored', () => (
    <Button label="Button" color="red" />
  ))
  .add('Text Button, Raised', () => (
    <Button backgroundColor="#00796B" color="white" label="Button" />
  ))
  .add('Icon Button', () => (
    <IconButton icon={<Icon name="information" color="#00796B" />} />
  ))
  .add('Button List', () => (
    <ButtonList>
      <Button backgroundColor="#00796B" color="white" label="Button" />
      <Button backgroundColor="white" label="Button" />
    </ButtonList>
  ))
