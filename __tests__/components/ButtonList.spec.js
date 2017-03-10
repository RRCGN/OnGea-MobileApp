import { View } from 'react-native'
import React from 'react'
import ButtonList from '../../app/components/ButtonList'

import renderer from 'react-test-renderer'

describe('<ButtonList />', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <ButtonList>
        <View />
        <View />
      </ButtonList>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with custom justifyContent', () => {
    const tree = renderer.create(
      <ButtonList justifyContent="flex-start">
        <View />
        <View />
      </ButtonList>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
