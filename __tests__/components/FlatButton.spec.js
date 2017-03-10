import { View } from 'react-native'
import React from 'react'
import FlatButton from '../../app/components/FlatButton'

import renderer from 'react-test-renderer'

describe('<FlatButton />', () => {
  test('renders correctly with custom styles', () => {
    const tree = renderer.create(
      <FlatButton onPress={() => {}} style={{ backgroundColor: 'red' }} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with label', () => {
    const tree = renderer.create(
      <FlatButton onPress={() => {}} label="Foo" />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with label and color', () => {
    const tree = renderer.create(
      <FlatButton onPress={() => {}} label="Foo" color="red"  />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with icon', () => {
    const tree = renderer.create(
      <FlatButton onPress={() => {}} icon={<View />} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
