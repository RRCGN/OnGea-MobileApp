import 'react-native'
import React from 'react'
import TitleOnShadow from '../../app/components/TitleOnShadow'

import renderer from 'react-test-renderer'

describe('<TitleOnShadow />', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <TitleOnShadow title="Foo" subtitle="bar" />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders correctly without subtitle', () => {
    const tree = renderer.create(
      <TitleOnShadow title="Foo" />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
