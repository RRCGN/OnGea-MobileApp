import { View } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import TripDate from '../../app/components/TripDate'
import TripDateList from '../../app/components/TripDateList'

import renderer from 'react-test-renderer'

describe('<TripDateList />', () => {
  test('renders correctly', () => {
    const wrapper = shallow(
      <TripDateList>
        <TripDate type="vom" date="2017-04-10T02:00:00+02:00" />
        <TripDate type="vom" date="2017-04-10T02:00:00+02:00" />
      </TripDateList>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
