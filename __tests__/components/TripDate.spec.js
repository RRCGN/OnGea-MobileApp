import 'react-native'
import React from 'react'
import TripDate from '../../app/components/TripDate'

import renderer from 'react-test-renderer'

describe('<TripDate />', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <TripDate type="vom" date="2017-04-10T02:00:00+02:00" />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
