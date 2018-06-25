import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import Section from '../Section'


export default storiesOf('Section', module)
  .addDecorator(story => (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#E0E0E0' }}>
      {story()}
    </View>
  ))
  .add('Section with Title', () => (
    <Section title="Foo bar">
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
    </Section>
  ))
  .add('Section with Custom Title Color', () => (
    <Section title="Foo bar" titleColor="red">
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
    </Section>
  ))
  .add('Section without Title', () => (
    <Section>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
    </Section>
  ))
  .add('Section without Border', () => (
    <Section title="Foo bar" noBorder>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
    </Section>
  ))
