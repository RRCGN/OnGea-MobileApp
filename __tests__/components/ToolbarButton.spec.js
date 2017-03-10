import { View } from 'react-native'
import React from 'react'
import ToolbarButton from '../../app/components/ToolbarButton'

import renderer from 'react-test-renderer'

jest.mock('react-navigation/src/views/TouchableItem', () => 'TouchableOpacity')

describe('<ToolbarButton />', () => {

  test('renders correctly', () => {
    const tree = renderer.create(
      <ToolbarButton
        androidIcon="settings"
        iosIcon="ios-cog-outline"
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders correctly as floating button', () => {
    const tree = renderer.create(
      <ToolbarButton
        floating={true}
        androidIcon="settings"
        iosIcon="ios-cog-outline"
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with onPress', () => {
    const tree = renderer.create(
      <ToolbarButton
        onPress={() => {}}
        androidIcon="settings"
        iosIcon="ios-cog-outline"
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
