import React from 'react'
import { storiesOf } from '@storybook/react-native'
import ViewDecorator from '../../components/__stories__/ViewDecorator'
import SignupForm from '../forms/Signup'

export default storiesOf('Forms', module)
  .addDecorator(story => (
    <ViewDecorator>
      {story()}
    </ViewDecorator>
  ))
  .add('Signup Form', () => (
    <SignupForm />
  ))
