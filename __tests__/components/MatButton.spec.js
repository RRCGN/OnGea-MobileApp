import { View } from 'react-native'
import React from 'react'
import MatButton from '../../app/components/MatButton'

import renderer from 'react-test-renderer'

describe('<MatButton />', () => {
  test('renders correctly with custom styles', () => {
    const tree = renderer.create(
      <MatButton onPress={() => {}} style={{ backgroundColor: 'red' }} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with label', () => {
    const tree = renderer.create(
      <MatButton onPress={() => {}} label="Foo" />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with label and color', () => {
    const tree = renderer.create(
      <MatButton onPress={() => {}} label="Foo" color="red"  />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with icon', () => {
    const tree = renderer.create(
      <MatButton onPress={() => {}} icon={<View />} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
