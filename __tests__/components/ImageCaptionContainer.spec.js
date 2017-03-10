import { View } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import TitleOnShadow from '../../app/components/TitleOnShadow'
import ImageCaptionContainer from '../../app/components/ImageCaptionContainer'

import renderer from 'react-test-renderer'

describe('<ImageCaptionContainer />', () => {
  test('renders correctly', () => {
    const wrapper = shallow(
      <ImageCaptionContainer
        caption={<TitleOnShadow title="Foobar" />}
        source={{ uri: 'http://placehold.it/1x1'}}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
