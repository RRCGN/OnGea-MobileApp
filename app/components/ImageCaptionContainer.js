/**
 * Container for an Image with a Caption
 * @flow
 */

import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import TitleOnShadow from './TitleOnShadow'


type Props = {
  image: ReactElement<Image>,
  caption: ReactElement<TitleOnShadow>
}

const ImageCaptionContainer = ({ image, caption }: Props) => (
  <View style={{ flex: 1, position: 'relative' }}>
    {image}
    {caption}
  </View>
)

export default ImageCaptionContainer
