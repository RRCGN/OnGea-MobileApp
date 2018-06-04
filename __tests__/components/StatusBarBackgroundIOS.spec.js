import 'react-native'
import React from 'react'
import StatusBarBackgroundIOS from '../../src/components/StatusBarBackgroundIOS'

import renderer from 'react-test-renderer'

describe('<StatusBarBackgroundIOS />', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <StatusBarBackgroundIOS />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
