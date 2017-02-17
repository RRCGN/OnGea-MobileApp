/**
 * Container for an Image with a Caption
 * @flow
 */

import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import ImageWithCaption from './ImageWithCaption'


type Props = {
  image: ReactElement<Image>,
  caption: ReactElement<ImageWithCaption>
}

const ImageCaptionContainer = ({ image, caption }: Props) => (
  <View style={{ flex: 1, position: 'relative' }}>
    {image}
    {caption}
  </View>
)

export default ImageCaptionContainer
