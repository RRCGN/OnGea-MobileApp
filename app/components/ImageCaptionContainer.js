/**
 * Container for an Image with a Caption
 * @flow
 */

import React from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'
import type { ImageSource } from 'react-native'
import TitleOnShadow from './TitleOnShadow'


type Props = {
  source: ImageSource,
  caption: ReactElement<TitleOnShadow>
}

const ImageCaptionContainer = ({ source, caption }: Props) => (
  <View style={{ flex: 1, position: 'relative' }}>
    <Image source={source} style={styles.image} />
    {caption}
  </View>
)

export default ImageCaptionContainer


const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    resizeMode: 'cover'
  }
})
