import { View } from 'react-native'
import React from 'react'
import Touchable from '../../src/components/Touchable'

import renderer from 'react-test-renderer'

describe('<Touchable />', () => {

  describe('on ios', () => {
    test('renders correctly with default props', () => {
      const tree = renderer.create(
        <Touchable><View /></Touchable>
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('renders correctly with onPress', () => {
      const tree = renderer.create(
        <Touchable onPress={() => {}}><View /></Touchable>
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

})
